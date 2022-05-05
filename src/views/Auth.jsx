import React, { useState } from 'react';
import { signUpUser } from '../services/user';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('second');

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log('signin');
    //await signUpUser();
  };
  return (
    <>
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
