import React from 'react';
//stateful -> state olan component
class Counter extends React.Component{
    state = {
        number: 0
    }

    decrement = () => {
        this.setState({
            number: --this.state.number
        });
    }
    increment = () => {
        this.setState({
            number: ++this.state.number
        });
    }

    render(){
        return(
            <div>
                <h1>{this.state.number}</h1>
                <button onClick = {this.increment}>+</button>
                <button onClick = {this.decrement}>-</button>
            </div>
        )
    }
}

export default Counter;