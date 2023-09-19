import React from 'react'

export default function Footer() {
    const today = new Date();
    const year = today.getFullYear();


  return (
    <footer><div>Copyright {year}</div></footer> 
  )
}
