import CommentsSection from '../gamecomments/comments';
import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const Galaga = () => {
    const [user, setUser] = useState(null);

    // Monitor authentication state
    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);
    user.getIdToken().then((idToken) => {
        const userData = {
          userId: user.uid || 'guest',
          username: localStorage.getItem('userName') || 'Guest',
          idToken: idToken || '',
        };
        window.godotUser = userData;
        console.log('User data passed to Godot:', userData);
    })
    .catch((error) => {
        console.error('Error getting ID token:', error);
    });
    return (
        <>
        <div>
            <iframe src={`${import.meta.env.BASE_URL}game_files/galaga_online/index.html`} width="480px" height="600px"></iframe>
        </div>
        <div>
        <CommentsSection gameId="galaga" />
        </div>
        </>
    );
}