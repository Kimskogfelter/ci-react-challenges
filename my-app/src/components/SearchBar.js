import React, { Component } from 'react'
import importedNames from '../names'

export class SearchBar extends Component {

    constructor(props) {
      super(props)
    
      this.state = { 
        names: importedNames
         
      }
    }

  render() {

    return (

      <div>
        <h1>Name Search</h1>
        <form>
            <input 
            type='text' 
            placeholder='search names'/>
        </form>
        <div style={{margin: 'auto'}}>
            {this.state.names}
            </div>
      </div>
    )
  }
}

export default SearchBar