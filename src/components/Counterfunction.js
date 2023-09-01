import React, {useState} from "react";

function CounterFunction(){
    let [number,setNumber] = useState(0)

    function increment(){
        setNumber(++number)
    }
    function decrement(){
        setNumber(--number)
    }


    return(
        <div>
            <h1>FUNCTIONAL COMPONENT</h1>
            <h2>Counter ={number}</h2>
            <button onClick={e => increment()}>Increment</button>
            <button onClick={e => decrement()}>Decrement</button>
        </div>
    )
}

export default CounterFunction;