import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import firebaseApp from "../../firebaseConfig";
import { AuthState } from './authState';

export function PostLogin(props){
    const navigate = useNavigate();
    const auth = getAuth(firebaseApp);
    
    function logout() {
        signOut(auth).then(() => {
            props.onLogout(null, AuthState.Unauthenticated);
            localStorage.removeItem('userName');
        }).catch((error) => {
            console.error(error);
        })
        .finally(() => {
            navigate('/login');
        })
    }
    
    function play(){
        navigate( '/play' );
    }
    
    return (
        <div id="playControls">
            <div id="playerName">{props.userName}</div>
            <Button type="button" className="btn btn-secondary" onClick={logout}>Logout</Button>
        </div>
    );
    
}