import { useState, useEffect, useRef } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import CommentsSection from '../gamecomments/comments';

export const Galaga = () => {
  const [user, setUser] = useState(null);
  const iframeRef = useRef(null); // Reference to the iframe

  // Monitor authentication state
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Pass user data to the iframe when user state changes
  useEffect(() => {
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
      console.log(userData)

      // Send user data to the iframe using postMessage
      if (iframeRef.current) {
        iframeRef.current.contentWindow.postMessage(
          { type: 'userData', data: userData },
          `${import.meta.env.BASE_URL}game_files/galaga_online/`
        );
        console.log('User data sent to iframe:', userData);
      }
    };

    sendUserData();
  }, [user]);

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