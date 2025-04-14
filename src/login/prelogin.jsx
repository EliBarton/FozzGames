import React from "react";
import Button from "react-bootstrap/Button";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import firebaseApp from "../../firebaseConfig";

export function PreLogin(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState("");
  const [displayMessage, setDisplayMessage] = React.useState(null);
  const auth = getAuth(firebaseApp);

  async function loginUser() {
    signInWithEmailAndPassword(auth, `${userName}@fozzgames.com`, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        localStorage.setItem("userName", userName);
        props.onLogin(userName);
      })
      .catch((error) => {
        setDisplayMessage(`Error: ${error.message}`);
      });
  }

  async function createUser() {
    createUserWithEmailAndPassword(auth, `${userName}@fozzgames.com`, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        localStorage.setItem("userName", userName);
        props.onLogin(userName);
      })
      .catch((error) => {
        setDisplayMessage(`Error: ${error.message}`);
      });
  }


  function handleUsernameChange(event) {
    setUserName(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  return (
    <>
      <div className="login_body">
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter username"
            value={userName}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            id="password"
            placeholder="Your password here"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <Button variant="primary" className="btn btn-success" onClick={loginUser}>
          Login
        </Button>
        <Button variant="secondary" className="btn btn-success" onClick={createUser}>
          Create
        </Button>
        <div>{displayMessage}</div>
      </div>
    </>
  );
}