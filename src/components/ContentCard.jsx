import React from 'react';
import { useUser } from '../context/UserContext';
import { deleteEntryById, getEntries } from '../services/entries';

export default function ContentCard({ message, updateDeleted }) {
  const { user } = useUser();

  const handleDelete = async () => {
    const update = await deleteEntryById(message.id);
    updateDeleted(update);
  };

  return (
    <>
      <h4>{message.content}</h4>
      <p style={{ color: 'blue' }}>--{user.email}</p>
      <button
        style={{ backgroundColor: 'maroon', color: 'white' }}
        onClick={handleDelete}
      >
        Delete
      </button>
    </>
  );
}
