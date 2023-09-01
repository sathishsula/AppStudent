import React from "react";

class CounterClass extends React.Component{
    constructor(){
        super();
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.state = {
            number :0
        }
    }
increment(){
    this.setState ({
        number: ++this.state.number
    })
}
decrement(){
    this.setState ({
        number: --this.state.number
    })
}

render(){
        return(
            <div>
                <h1>Counter = {this.state.number}</h1>
                <button onClick={this.increment}>Addition</button>
                <button onClick={this.decrement}>Down</button>
            </div>
        )
    }
}

export default CounterClass;
	