import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { signUpUser, signInUser } from '../services/user';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useUser();
  const [error, setError] = useState('');
  const history = useHistory();
  const [newUser, setNewUser] = useState(true);

  const handleSignUp = async (e) => {
    try {
      e.preventDefault();
      const user = await signUpUser({ email, password });
      setUser(user);
      history.replace('/welcome');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignIn = async (e) => {
    try {
      e.preventDefault();
      const user = await signInUser({ email, password });
      setUser(user);
      history.replace('/welcome');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleClick = () => {
    setNewUser(!newUser);
  };

  return (
    <>
      {newUser ? (
        <>
          <button onClick={handleClick}>Have an Account? Sign In</button>
          <form className="signUp" onSubmit={handleSignUp}>
            <h3>Sign Up</h3>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button type="submit">Sign Up</button>
          </form>
          <p>{error}</p>
        </>
      ) : (
        <>
          <button onClick={handleClick}>New User? Sign Up</button>
          <form className="signIn" onSubmit={handleSignIn}>
            <h3>Sign In</h3>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button type="submit">Sign In</button>
          </form>
          <p>{error}</p>
        </>
      )}
    </>
  );
}
