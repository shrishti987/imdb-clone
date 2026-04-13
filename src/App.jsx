import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");

  // Load notes from localStorage
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if (savedNotes) setNotes(savedNotes);
  }, []);

  // Save notes to localStorage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // Add note
  const addNote = () => {
    if (!input.trim()) return;

    const newNote = {
      id: Date.now(),
      text: input,
    };

    setNotes([newNote, ...notes]);
    setInput("");
  };

  // Delete note
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="app">
      <h1>Notes App</h1>

      {/* Input */}
      <div className="input-box">
        <input
          type="text"
          placeholder="Write a note..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addNote}>Add</button>
      </div>

      {/* Notes List */}
      <div className="notes-list">
        {notes.map((note) => (
          <div key={note.id} className="note">
            <span>{note.text}</span>
            <button onClick={() => deleteNote(note.id)}>❌</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;