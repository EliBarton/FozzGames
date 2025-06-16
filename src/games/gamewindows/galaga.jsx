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
    const userData = {
        userId: user ? user.uid : 'guest',
        username: user ? localStorage.getItem('userName') || 'Guest' : 'Guest',
    };
    // Expose user data to the global window object for Godot to access
    window.godotUser = userData;
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