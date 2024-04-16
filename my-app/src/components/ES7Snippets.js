/* to get the code below type: rfce and press enter or tab */

import React from 'react'

function ES7Snippets() {
  return (
    <div>ES7Snippets</div>
  )
}

export default ES7Snippets

/* to get the code below type: rafce */
/* will create and export the component as a arrow function */

import React from 'react'

const ES7Snippets = () => {
  return (
    <div>ES7Snippets</div>
  )
}

export default ES7Snippets

/* to get the code below type: rce */
/* will create and export a class component */

import React, { Component } from 'react'

export class ES7Snippets extends Component {
  render() {
    return (
      <div>ES7Snippets</div>
    )
  }
}

export default ES7Snippets

/* to get the code below type: rconst */
/* this creates the constructor */

constructor(props) {
  super(props)

  this.state = {
     
  }
}

/* to get the code below type: clg */
/* creates the console.log so you can log something to the console */

console.log(first)

/* to get the code below type: clo */
/* creates the console.log with an object and its name as a string */

console.log('first', first)