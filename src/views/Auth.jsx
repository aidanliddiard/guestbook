import { context } from 'msw';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useUser } from '../context/UserContext';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation();
  const context = useUser();
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSignUp = async (e) => {
    try {
      e.preventDefault();
      context.login(email, password);
      const url = location.state.from ? location.state.from.pathname : '/';
      history.replace(url);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <p>{error}</p>
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
    </>
  );
}
