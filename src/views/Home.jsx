import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { createEntry } from '../services/entries';
import { signOutUser } from '../services/user';

export default function Home() {
  const [content, setContent] = useState('');
  const { user } = useUser();
  const userId = user.id;

  const handleAdd = async () => {
    const data = await createEntry({ userId, content });
    console.log(data);
  };
  return (
    <>
      <input
        id="content"
        name="content"
        type="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></input>
      <button onClick={handleAdd}>Add</button>
      <button onClick={signOutUser}>Log Out</button>
    </>
  );
}
