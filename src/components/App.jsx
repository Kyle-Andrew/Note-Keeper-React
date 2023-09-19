import React, { useReducer } from "react";

import Header from "./Header"
import Note from "./Note"
import Footer from "./Footer"
import NoteInput from "./NoteInput";

function reducer(notes, { type, payload }) {
  switch (type) {
    case "add-note": {
      return [...notes, payload]
    }

    case "delete-note": {
      return notes.filter((note, index) => {
          return index !== payload.index
      })
    }
    
    default: {
      return notes
    }
  }
}

function App() {

  const [notes, dispatch] = useReducer(reducer, [])

  return (
    <>
      <Header />

      <NoteInput dispatch={dispatch}/>

      {notes.map(({title, content}, index) => {
        return <Note key={index} index={index} title={title} content={content} dispatch={dispatch}/>
      })}
      
      <Footer />
    </>
  );
}

export default App;
