import { useEffect, useState } from "react"

function UseEffectHook() {

    const [count, setCount] = useState(0)
    const [color, setColor] = useState("green")
    const [count1, setCount1] = useState(10)

    // useEffect(()=>{
    //     //1st syntax without 2nd arg
    //     console.log("ist useEffect");
    // })

    // useEffect(()=>{
    //     //2nd syntax with empty array as ens arg
    //     console.log("2nd useEffet");
    // },[])

    // useEffect(()=>{
    //     console.log("3rd useEffect");
    // },[count,color])

    useEffect(() => {
        console.log("4th useEffect");
        return () => {
            console.log("return function");
        }
    })
    return (
        <>
            <div style={{ backgroundColor: color, color: "white", padding:"10px"}}>UseEffect Hook()</div>
            <h1>Count :- {count}</h1>
            <h1>Count1 :- {count1}</h1>
            <button onClick={() => setCount(count + 1)}>Change count</button>
            <button onClick={() => setCount1(count1 + 1)}>Change count1</button>
            <button onClick={() => setColor("blue")}>Change color</button>
        </>
    )
}
export default UseEffectHook;