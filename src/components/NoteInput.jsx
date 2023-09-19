import React, { useState } from "react";

export default function NoteInput({dispatch}) {

    const [newNote, setNewNote] = useState({})

    function handleChange(evt) {
        const {name, value} = evt.target;

        setNewNote((prev) => {
            return {
                ...prev,
                [name] : value
            }
        })
    }

    function handleClick(evt) {
        dispatch({type: "add-note", payload: {...newNote}})
        setNewNote({title: "", content: ""});   
        evt.preventDefault()
    }

  return (
    <div>
      <form>
        <input 
            value={newNote.title} 
            onChange={handleChange} 
            name="title" 
            placeholder="Title" 
        />
        <textarea 
            value={newNote.content} 
            onChange={handleChange} 
            name="content" 
            placeholder="Take a note..." 
            rows="3" 
        />
        <button onClick={handleClick}>
            Add
        </button>
      </form>
    </div>
  );
}

