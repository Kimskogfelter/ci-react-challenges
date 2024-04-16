import React from "react";


class StatefulGreeting extends React.Component {
render() {
    return <h1>Hello {this.props.greeting}. Your name is {this.props.name} and you are {this.props.age} years old</h1>
}
}

export default StatefulGreeting;