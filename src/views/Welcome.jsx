import React from 'react';
import { Link } from 'react-router-dom';

export default function Welcome() {
  return (
    <>
      <h1>Welcome to the Guestbook!</h1>
      <Link to="/">View the Guestbook</Link>
    </>
  );
}
