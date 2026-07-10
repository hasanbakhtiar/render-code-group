import React, { Component } from 'react'

class Counter extends Component {
    constructor() {
        super();
        this.increment = this.increment.bind(this);
        this.state = {
            counter: 0
        }
    }
    increment() {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    decrement=()=> {
        this.setState({
            counter: this.state.counter - 1
        })
    }
    render() {
        return (
            <div className='container mt-3'>
                <button className='btn btn-primary' onClick={this.decrement}>-</button>
                <span className='mx-3'> {this.state.counter}</span>
                <button className='btn btn-primary' onClick={this.increment}>+</button>
            </div>
        )
    }
}

export default Counter