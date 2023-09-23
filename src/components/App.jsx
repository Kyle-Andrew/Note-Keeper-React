import React, { useState, useReducer, useRef } from "react";

import Header from "./Header"
import Note from "./Note"
import Footer from "./Footer"
import CreateInput from "./CreateInput";
import EditInput from "./EditInput";

function App() {
  const [isEditing, setEditing] = useState(false)
  const noteForEdit = useRef();

  const [notes, dispatch] = useReducer(reducer, [])

  function reducer(notes, { type, payload }) {
    switch (type) {
      case "add-note": {
        return [...notes, {id: Date.now(), ...payload}]
      }
  
      case "delete-note": {
        return notes.filter((note) => {
            return note.id !== payload.id
        })
      }
  
      case "edit-note-start": {
        noteForEdit.current = payload;
        setEditing(true);
        return notes
      }
  
      case "edit-note-finish": {
        noteForEdit.current = {};
        setEditing(false);
        return notes.map((note) => {
          if (note.id === payload.id){
            return payload
          }
          return note
        })
      }
      
      default: {
        return notes
      }
    }
  }

  return (
    <>
      <Header />

      {isEditing ? <EditInput noteForEdit={noteForEdit.current} dispatch={dispatch} /> 
      : <CreateInput dispatch={dispatch}/>}

      {notes.map((note, index) => {
        return <Note key={index} note={note} dispatch={dispatch} isEditing={isEditing}/>
      })}
      
      <Footer />
    </>
  );
}

export default App;
