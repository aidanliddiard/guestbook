import React from 'react';
import { useUser } from '../context/UserContext';

export default function Home() {
  const context = useUser();

  return (
    <>
      <div>Home</div>
      <button onClick={context.logout}>Log Out</button>
    </>
  );
}
