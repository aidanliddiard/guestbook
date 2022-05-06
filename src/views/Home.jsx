import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import ContentCard from '../components/ContentCard';
import { useUser } from '../context/UserContext';
import { createEntry, getEntries } from '../services/entries';
import { signOutUser } from '../services/user';

export default function Home() {
  const [content, setContent] = useState('');
  const { user, logout } = useUser();
  const userId = user.id;
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [update, setUpdate] = useState({});
  const history = useHistory();

  useEffect(() => {
    getEntries()
      .then(setMessages)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [update]);

  const handleAdd = async () => {
    const newMessage = await createEntry({ userId, content });
    console.log('newMessage', newMessage);
    setUpdate(newMessage);
    setContent('');
  };

  // const handleLogOut = async () => {
  //   await signOutUser();
  //   history.push('/login');
  // };

  return (
    <>
      <label>Enter your message here:</label>
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
      <button onClick={logout}>Log Out</button>
    </>
  );
}
