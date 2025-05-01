import { useState } from 'react'
import { useMemo } from 'react'

function UseMemohook() {
    const [number1, setNumber1] = useState(0)
    const [number2, setNumber2] = useState(0)

    // function setNumber() {
    //     console.log("setNumber function");
    //     for (let i = 0; i < 1000000000; i++) {}
    //     return number1 * 2
    // }
    //const getNumber = setNumber()

    const getNumber = useMemo(() => {
        console.log("setNumber function");
        for (let i = 0; i < 1000000000; i++) {}
        return number1 * 2
    }, [number1])

    
    return (
        <>
            {console.log("render")}
            <h1>useMemoHook</h1>
            <h1>Number1: {number1}</h1>
            <h1>Number2: {number2}</h1>
            <button onClick={() => setNumber1(number1 + 1)}>Increse Num1</button>
            <button onClick={() => setNumber2(number2 + 10)}>Increse Num2</button>
            <h1>{getNumber}</h1>
        </>
    )
}

export default UseMemohook;
