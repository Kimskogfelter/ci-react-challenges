
/* FUNKAR INTE!!! FINNS INTE FÄRDIG KOD I DETTA CHALLENGE I LMS */

import React from 'react'

function Book(props) {
    
    const book = props.book

  return (
                <div>
                <h5>{book.title}</h5>
                <p>{book.author}</p>
                <p>{book.pages}</p>
                </div>
                )
    
}

export default Book