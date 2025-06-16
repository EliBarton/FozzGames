import { useState, useEffect, useRef } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import CommentsSection from '../gamecomments/comments';

export const Galaga = () => {
  const [user, setUser] = useState(null);
  const iframeRef = useRef(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  // Monitor authentication state
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Detect iframe load
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const handleLoad = () => {
      setIframeLoaded(true);
      console.log('Iframe loaded');
    };

    iframe.addEventListener('load', handleLoad);
    return () => iframe.removeEventListener('load', handleLoad);
  }, []);

  // Pass user data to the iframe
  useEffect(() => {
    if (!iframeLoaded || !iframeRef.current) return;

    const sendUserData = async () => {
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

      // Retry postMessage up to 3 times
      let attempts = 0;
      const maxAttempts = 3;
      const retryInterval = 500; // ms

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

    sendUserData();
  }, [user, iframeLoaded]);

  return (
    <>
      <div>
        <iframe
          ref={iframeRef}
          src={`${import.meta.env.BASE_URL}game_files/galaga_online/index.html`}
          width="480px"
          height="600px"
          title="Galaga Game"
        ></iframe>
      </div>
      <div>
        <CommentsSection gameId="galaga" />
      </div>
    </>
  );
};