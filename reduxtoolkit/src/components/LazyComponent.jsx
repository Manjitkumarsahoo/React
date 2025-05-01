import React from 'react'
import { useState, useEffect } from 'react'

function LazyComponent() {
    const [state, setState] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setState(data))
            .catch(console.log)
    }, [])
    return (
        <>
            <h1>Lazy Component</h1>
            <ol>
                {state.map((user) => (

                    <li key={user.id}>{user.name}</li>
                ))}
            </ol>
        </>
    )
}

export default LazyComponent