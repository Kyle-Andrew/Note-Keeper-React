import React from 'react'

export default function Note({index, title, content, dispatch}) {

    function handleClick() {
        dispatch({type: "delete-note", payload:{index}})
    }

  return (
    <div className="note">
        <h1>{title} </h1>
        <p>{content}</p>
        <button onClick={handleClick}>Delete</button>
    </div>
  )
}
