import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import HomePage from './home/home';
import { Scores } from './scores/scores';
import { Play } from './play/play';
import { AuthState } from './login/authState';
import { GamesList } from './gameslist/gameslist';
import { Games } from './games/games';

export function NotFound() {
  return (
    <main className="container-fluid bg-secondary text-center">
      404: Return to sender. Address unknown.
    </main>
  );
}

export default function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

  useEffect(() => {
    // Run any initialization or side effects here.
    const username = localStorage.getItem('username');
    // (Optionally update state if needed)
  }, []);

  return (
    <BrowserRouter basename="FozzGames">
      <div className="app bg-dark text-light">
      <header className="container-fluid">
        <nav className="navbar navbar-dark">
          <p className="navbar-brand">FozzGames</p>
          <menu className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="games">
                Games
              </NavLink>
            </li>
            {authState === AuthState.Authenticated && (
              <li className="nav-item">
                <NavLink className="nav-link" to="scores">
                  Scores
                </NavLink>
              </li>
            )}
          </menu>
        </nav>
      </header>
        <main>
          <Routes>
            {/* Uncomment below if you need the Login route */}
            {/* <Route path='/' element={
              <Login 
                userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                }}
              />
            } exact /> */}
            <Route path="/" element={<HomePage />} />
            <Route path="/games/*" element={<Games />} />
            <Route path="/play" element={<Play userName={userName} />} />
            <Route path="/scores" element={<Scores />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <footer>
          <span>Creator: Eli Barton</span>
          <div>
            <a
              className="footer-link"
              href="https://github.com/EliBarton"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className="footer-link"
              href="https://www.youtube.com/@FozzGames"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
            <a
              className="footer-link"
              href="https://x.com/Fozz_MK"
              target="_blank"
              rel="noopener noreferrer"
            >
              X
            </a>
            <a
              className="footer-link"
              href="https://fozzgames.itch.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              itch.io
            </a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
