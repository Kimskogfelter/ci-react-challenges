import React, { Component } from 'react'

export class LifeCyclesCDUChild extends Component {

    constructor(props) {
        console.log('child constructor called')
      super(props)
    
      this.state = {
         greeting: 'Child Hello'
      }
    }

    updateGreeting = () => {
        console.log('child updateGreeting() called')
        this.setState(prevState => {
            return {
                greeting: prevState.greeting === 'Child Hello' ? 'Child Goodbye': 'Child Hello'
            }
        })
    }
    componentDidUpdate() {
        console.log('child Component updated')
    }

  render() {
    console.log('child render method called')
    return (
      <div>
        <h1>{this.state.greeting}</h1>
        <button onClick={this.updateGreeting}>Update child greeting</button>
        </div>
    )
  }
}

export default LifeCyclesCDUChild