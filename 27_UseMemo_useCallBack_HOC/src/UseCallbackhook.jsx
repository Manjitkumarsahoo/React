import React from 'react'
import { useState ,useEffect , useCallback } from 'react';

function UseCallbackhook() {

    const [count , setCount] = useState(0)
    const [color , setColor] = useState("blue")

    // function setNumber(){
    //     return count * 10
    // }

    const setNumber = useCallback(() => {
        return count * 10 
    },[count])
  return (
    <>
        <h1>UseCallback() Hook</h1>
        <h1>count : {count}</h1>
        <div style={{backgroundColor: color}}>Hello World</div><br />
        <button onClick={() => setCount(count + 1)}>Change Count</button>
        <button onClick={() => setColor((pre) => pre =="blue" ? "red" : "blue" )}>Change color</button>
        <ChildComponent setNumber = {setNumber}/>
    </>
  )
}

export default UseCallbackhook;

function ChildComponent({setNumber}){

    useEffect(() => {
        console.log("reference Changed")
    },[setNumber])
    return (
        <>
            <h1>Child Component</h1>
            <h1>Number:{setNumber()}</h1>
        </>
    )
}