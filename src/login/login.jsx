import React from 'react';

import { useEffect } from 'react';
import { PreLogin } from './prelogin';
import { PostLogin } from './postlogin';
import { AuthState } from './authState';
import "./login.css"

export function Login({ userName, authState, onAuthChange }) {

  return (
    <div className='container-fluid text-center' >
      {authState !== AuthState.Unknown && <div className="Welcome">Welcome to FozzGames!</div>}
       <p className='login_title'>Login</p>
       <div className="login_body">

        {authState === AuthState.Authenticated && (
          <PostLogin userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />
        )}
        {authState === AuthState.Unauthenticated && (
          <PreLogin
            userName={userName}
            onLogin={(loginUserName) => {
              onAuthChange(loginUserName, AuthState.Authenticated);
            }}
          />
        )}
      </div>
    </div>
  )
}

