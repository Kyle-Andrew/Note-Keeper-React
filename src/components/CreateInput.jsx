import React, { useState } from "react";

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

import { ClickAwayListener } from '@mui/base/ClickAwayListener';

export default function CreateInput({dispatch}) {

  const [newNote, setNewNote] = useState({
    title: "",
    content: ""
  })

  const [inFocus, setFocus] = useState(false);

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

    function handleSubmit(evt) {
      evt.preventDefault()
    }

  return (
    <div>
      <ClickAwayListener onClickAway={() => (setFocus(false))}>
        <form className="create-note" onSubmit={handleSubmit} method="POST">

          {inFocus && 
          <input 
              value={newNote.title} 
              onChange={handleChange} 
              name="title" 
              placeholder="Title" 
          />}

          <textarea 
              value={newNote.content} 
              onChange={handleChange} 
              onClick={() => (setFocus(true))}
              name="content" 
              placeholder="Take a note..." 
              rows={inFocus ? "3" : "1"} 
          />
          <Zoom in={inFocus}>
            <Fab onClick={handleClick}>
                <AddIcon />
            </Fab>
          </Zoom>
        </form>
      </ClickAwayListener>
    </div>
  );
}

