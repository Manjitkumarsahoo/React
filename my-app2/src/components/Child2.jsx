import React from 'react'
import {useSelector,useDispatch} from "react-redux"

function Child2() {
    const state = useSelector((store) => store.color)

    const dispatch = useDispatch()

  return (
    <>
        <>
            <h1>Using redux state</h1>
            <h1 style={{backgroundColor:state,height:"400px",color:"White"}} >Color</h1>
            <button onClick={() => dispatch({ type: "green", payload: "#3dfc03" })}>Green</button>
            <button onClick={() => dispatch({ type: "blue", payload: "#035efc" })}>Blue</button>
            <button onClick={() => dispatch({ type: "red", payload: "#fc3503" })}>Red</button>
            <button onClick={() => dispatch({ type: "yellow", payload: "#fcfc03" })}>Yellow</button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </>
    </>
  )
}

export default Child2