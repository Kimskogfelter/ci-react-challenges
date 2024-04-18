import React, { Component } from 'react'

export class LifeCyclesCDMChild extends Component {

    constructor(props) {
        console.log('Child Constructor Called')
      super(props)
    
      this.state = {
        data: 'Child loading...',
         
      }
    }

    getdata() {
        console.log('Child getData() called')
        setTimeout(() => {
            console.log('Child data fetched')
            this.setState({
                data: 'Child Loaded!'
            })
        }, 3000)
    }

    componentDidMount(){
        console.log('Child component mounted')
        this.getdata();
    }

  render() {
    console.log('Child Render method called')
    return (
      <div>
        <h1>{this.state.data}</h1>
      </div>
    )
  }
}

export default LifeCyclesCDMChild