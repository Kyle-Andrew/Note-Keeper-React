import React, { useState } from "react";

import Fab from '@mui/material/Fab';
import DoneIcon from '@mui/icons-material/Done';
import Zoom from '@mui/material/Zoom';

export default function EditInput({noteForEdit, dispatch}) {

    const [editNote, setEditNote] = useState(noteForEdit)

    function handleChange(evt) {
        const {name, value} = evt.target;

        setEditNote((prev) => {
            return {
                ...prev,
                [name] : value
            }
        })
    }

    function handleClick(evt) {
        dispatch({type: "edit-note-finish", payload: {...editNote}})
        setEditNote({id: "", title: "", content: ""});   
        evt.preventDefault()
    }

    function handleSubmit(evt) {
      evt.preventDefault()
    }

  return (
    <div>
      <form className="create-note" style={{backgroundColor: "#DDD"}} onSubmit={handleSubmit}>
        <input 
            value={editNote.title} 
            onChange={handleChange} 
            name="title" 
            placeholder="Edit title" 
            style={{backgroundColor: "#DDD"}}
        />
        <textarea 
            value={editNote.content} 
            onChange={handleChange} 
            name="content" 
            placeholder="Edit content" 
            rows="3" 
            style={{backgroundColor: "#DDD"}}
        />
        <Zoom in={true}>
          <Fab color="inherit" onClick={handleClick}>
              <DoneIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

