import React from 'react'
import { useSelector, useDispatch } from "react-redux"


function Child1() {

    const state = useSelector((store) => store.count)  //This can use for store the redux state 

    const dispatch = useDispatch()  //create one dispatch variable which can pass type and payload

    return (
        <>
            <h1>Using redux state</h1>
            <h1>Count : {state}</h1>
            <button onClick={() => dispatch({ type: "inc", payload: 5 })}>Increment 5</button>
            <button onClick={() => dispatch({ type: "inc", payload: 15 })}>Increment 15</button>
            <button onClick={() => dispatch({ type: "dec", payload: 10 })}>Decrement 10</button>
            <button onClick={() => dispatch({ type: "dec", payload: 20 })}>Decrement 20</button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </>
    )
}

export default Child1