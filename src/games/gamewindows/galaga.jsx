import { useState, useEffect, useRef } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import CommentsSection from '../gamecomments/comments';
import { addDoc, collection, query, where, getDocs, updateDoc } from 'firebase/firestore';
import { db } from "../../../firebaseConfig";
import { Scores } from '../../scores/scores';

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
      if (event.data?.type === 'updateHighScore') {
        console.log('Received new high score from iframe:', event.data.highScore);
        updateHighScore(event.data.highScore);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [user, iframeLoaded]);


  const updateHighScore = async (score) => {
    if (!user) {
      console.log('User not logged in, cannot update high score.');
      return;
    }

    const scoresRef = collection(db, 'scores');
    const q = query(scoresRef, where('gameId', '==', 'galaga'), where('userId', '==', user.uid));
    const querySnapshot = await getDocs(q);

    let docRef;
        if (!querySnapshot.empty) {
          // Document exists, update it
          const docToUpdate = querySnapshot.docs[0];
          await updateDoc(docToUpdate.ref, {
          score: score,
          timestamp: new Date(),
          username: localStorage.getItem('userName')
    });
    docRef = docToUpdate.ref; // Use the existing document reference
        } else {
          // Document doesn't exist, add a new one
    docRef = await addDoc(scoresRef, {
            gameId: 'galaga',
            userId: user.uid,
            score: score,
            timestamp: new Date(),
            username: localStorage.getItem('userName')
    });
    }
    console.log('High score added with ID: ', docRef.id);
  }

  const getUserScore = async () => {
    const scoresRef = collection(db, 'scores');
    const q = query(scoresRef, where('gameId', '==', 'galaga'), where('userId', '==', user.uid));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      return querySnapshot.docs[0].data().score;
    }
    return 0;
  }


  const sendUserData = async () => {
    if (!iframeLoaded || !iframeRef.current) {
      console.log('Iframe not loaded or ref not available');
      return;
    }

    let userData = {
      score: 0
    };

    if (user) {
      try {
        userData = {
          score: await getUserScore()
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
      <div>
        <Scores gameId="galaga" />
      </div>
    </>
  );
};