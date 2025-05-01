import React, { useState } from 'react'
import Child3 from './Child3'


function Parent() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState("Manjit")
    return (
        <>
            {console.log("Parent comp REnder")}
            <h1>Parent Component</h1>
            <button onClick={() => setCount(count + 1)}>Change Count</button>
            <button onClick={() => setName("Virat")}>Change Name</button>
            <Child3 name={name} />
        </>
    )
}

export default Parent;