import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { increment,decrement } from '../redux/slices/countSlice'

function Child1() {

    const state = useSelector((state) =>state.count)

    const dispatch = useDispatch()
    return (
        <>
            <h1>Working with redux toolkit state</h1>
            <div>
                <h2>Count:{state}</h2>
                <button onClick={()=>dispatch(increment(10))}>Increment</button>
                <button onClick={()=>dispatch(decrement(5))}>Decrement</button>
            </div>
        </>
    )
}

export default Child1