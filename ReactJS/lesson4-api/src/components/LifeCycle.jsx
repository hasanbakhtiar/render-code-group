import React, { Component } from 'react'


class List extends Component {
    componentWillUnmount(){
        alert("product deleted");
    }
    render() {
        return (
            <ol>
                <li>list data</li>
                <li>list data</li>
                <li>list data</li>
                <li>list data</li>
                <li>list data</li>
            </ol>
        )
    }

}



class LifeCycle extends Component {
    constructor() {
        super();
        this.state = {
            text: "Hello",
            active: true
        }

    }

    componentDidMount() {
        this.setState({
            text: "New data"
        })
    }

    componentDidUpdate() {
        console.log("updated");

    }

    render() {
        let list;

        if (this.state.active) {
            list = <List />
            
        }
        return (
            <div>
                {list}
                <button onClick={()=>{this.setState({active:false})}}>delete list</button>
                <h1>{this.state.text}</h1>
                <button onClick={() => {
                    this.setState({
                        text: "my data"
                    })
                }}>change old data</button>
            </div>
        )
    }
}

export default LifeCycle