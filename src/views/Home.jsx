import React, { useEffect, useState } from 'react';
import ContentCard from '../components/ContentCard';
import { useUser } from '../context/UserContext';
import { createEntry, getEntries } from '../services/entries';
import { signOutUser } from '../services/user';

export default function Home() {
  const [content, setContent] = useState('');
  const { user } = useUser();
  const userId = user.id;
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [update, setUpdate] = useState({});

  useEffect(() => {
    getEntries()
      .then(setMessages)
      .catch(console.error)
      .finally(setLoading(false));
  }, [update]);

  const handleAdd = async () => {
    const newMessage = await createEntry({ userId, content });
    setUpdate(newMessage);
    setContent('');
  };

  return (
    <>
      <labe>Enter your message here:</labe>
      <input
        id="content"
        name="content"
        type="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></input>
      <button
        style={{ backgroundColor: 'green', color: 'white' }}
        onClick={handleAdd}
      >
        Add
      </button>
      {loading ? (
        <p>Loading Messages ..</p>
      ) : (
        <>
          {messages.map((message) => (
            <div
              key={message.id}
              style={{
                width: '25%',
                border: '1px solid black',
                padding: '10px',
                margin: '10px',
              }}
            >
              <ContentCard updateDeleted={setUpdate} message={message} />
            </div>
          ))}
        </>
      )}
      <button onClick={signOutUser}>Log Out</button>
    </>
  );
}
