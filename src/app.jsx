import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { useEffect } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import HomePage from './home/home';
import { Scores } from './scores/scores';
import { Play } from './play/play';
import { AuthState } from './login/authState';

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}

export default function App() {

  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

  async function getBackgroundImage() {
    const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=QIIdnp5naW0OmbkboNDBRyog0TyAUj4fB6vqj7Ch', );
    let data = await response.json()
    return `url('${data.url}')`;
  }

  useEffect(() => {
    (async () => {
      const backgroundImage = await getBackgroundImage();
      document.querySelector('main').style.backgroundImage = backgroundImage;
      const userName = localStorage.getItem('username');
    })();
  }, []);
  return <BrowserRouter>
  <div className="bg-dark text-light app">
  <header className="container-fluid">
      <nav className="navbar navbar-dark">
          <p className="navbar-brand">FozzGames</p>
      <menu className="navbar-nav">
              <li className="nav-item"><NavLink className="nav-link active" to="">Home</NavLink></li>
              {authState === AuthState.Authenticated && (
                <li className='nav-item'>
                  <NavLink className='nav-link' to='play'>
                    Play
                  </NavLink>
                </li>
              )}
              {authState === AuthState.Authenticated && (
                <li className='nav-item'>
                  <NavLink className='nav-link' to='scores'>
                    Scores
                  </NavLink>
                </li>
              )}
      </menu>
  </nav>
  </header>

  <Routes>
  {/* <Route path='/' element={<Login userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                }}/>} exact /> */}
  <Route path='/' element={<HomePage />} />
  <Route path='/play' element={<Play userName={userName}/>} />
  <Route path='/scores' element={<Scores />} />
  <Route path='*' element={<NotFound />} />
</Routes>

<footer>
    <span>Creator: Eli Barton</span>
    <div>
    <a class="footer-link" href="https://github.com/EliBarton">GitHub</a>
    <a class="footer-link" href="https://www.youtube.com/@FozzGames">YouTube</a>
    <a class="footer-link" href="https://x.com/Fozz_MK">X</a>
    <a class="footer-link" href="https://fozzgames.itch.io">itch.io</a>
    </div>
</footer>

</div>
</BrowserRouter>;
}
