import { useState, useEffect, useRef } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import CommentsSection from '../gamecomments/comments';

export const Galaga = () => {
  const [user, setUser] = useState(null);
  const iframeRef = useRef(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const handleMessage = (event) => {
      // Validate origin for security (optional but recommended)
      if (event.origin !== window.location.origin) {
        console.warn('Received message from unexpected origin:', event.origin);
        return;
      }
      if (event.data?.type === 'readyForUserData') {
        console.log('Iframe is ready to receive user data');
        sendUserData();
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [user, iframeLoaded]);

  const sendUserData = async () => {
    if (!iframeLoaded || !iframeRef.current) {
      console.log('Iframe not loaded or ref not available');
      return;
    }

    let userData = {
      userId: 'guest',
      username: localStorage.getItem('userName') || 'Guest',
      idToken: '',
    };

    if (user) {
      try {
        const idToken = await user.getIdToken();
        userData = {
          userId: user.uid,
          username: localStorage.getItem('userName') || 'Guest',
          idToken,
        };
      } catch (error) {
        console.error('Error getting ID token:', error);
      }
    }

    let attempts = 0;
    const maxAttempts = 5;
    const retryInterval = 1000;

    const trySendMessage = () => {
      try {
        iframeRef.current.contentWindow.postMessage(
          { type: 'userData', data: userData },
          window.location.origin
        );
        console.log('User data sent to iframe:', userData);
      } catch (error) {
        console.error('Error sending postMessage:', error);
        if (attempts < maxAttempts) {
          attempts++;
          console.log(`Retrying postMessage (attempt ${attempts}/${maxAttempts})`);
          setTimeout(trySendMessage, retryInterval);
        }
      }
    };

    trySendMessage();
  };

  return (
    <>
      <div>
        <iframe
          ref={iframeRef}
          src={`${import.meta.env.BASE_URL}game_files/galaga_online/index.html`}
          width="480px"
          height="600px"
          title="Galaga Game"
          onLoad={() => {
            console.log('Iframe loaded');
            setIframeLoaded(true);
          }}
        ></iframe>
      </div>
      <div>
        <CommentsSection gameId="galaga" />
      </div>
    </>
  );
};