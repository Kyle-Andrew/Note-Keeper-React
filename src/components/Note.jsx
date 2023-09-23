import React from 'react'

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function Note({note, dispatch, isEditing}) {

    const {id, title, content} = note

    function handleDelete() {
        dispatch({type: "delete-note", payload:{id}})
    }

    function handleEdit() {
        dispatch({type: "edit-note-start", payload:{...note}})
    }

    const disabledBtn = {
        color: "#CCC"
    }

  return (
    <div className="note">
        <h1>{title} </h1>
        <p>{content}</p>
        {isEditing ? <button disabled style={disabledBtn} onClick={handleDelete}><DeleteIcon /></button> 
        : <button onClick={handleDelete}><DeleteIcon /></button>}
        {isEditing ? <button disabled style={disabledBtn} onClick={handleEdit}><EditIcon /></button> 
        : <button onClick={handleEdit}><EditIcon /></button>}
    </div>
  )
}
