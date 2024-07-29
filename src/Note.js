import React, { useState } from 'react';
import NoteForm from './NoteForm';
import NoteList from './NoteList';
import './talk.css';

const Note = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  return (
    <div>
      <h1>Notes App</h1>
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} />
    </div>
  );
};

export default Note;
