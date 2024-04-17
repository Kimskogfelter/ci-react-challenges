
/* FUNKAR INTE!!! FINNS INTE FÄRDIG KOD I DETTA CHALLENGE I LMS */

import React from 'react'
import Book from './book'

function RenderingLists() {
    const bookList = [
        'bee',
        'boo',
        'bye',

    ]
    const books = [
        {
        title: 'book1',
        author: 'pelle svanlös',
        pages: '321',
        },
        {
            title: 'book2',
            author: 'gargamel',
            pages: '345',
        },
        {
            title: 'book3',
            author: 'svampen',
            pages: '123',
        }



    ]

  return (
    <div>
        {bookList.map(book => {
            return <h2>{book}</h2>
        }
        )}
        <hr/>

        {
            books.map(book => {
                return (
                <div>
                <h5>{book.title}</h5>
                <p>{book.author}</p>
                <p>{book.pages}</p>
                </div>)
            })
        }
        <hr/>
        {
            books.map(book => {
                return <Book book={book}/>
            })
        }
    </div>
  )
}

export default RenderingLists