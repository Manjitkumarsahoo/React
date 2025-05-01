import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import { green ,blue,red,yellow} from '../redux/slices/colorSlice'

function Child2() {
    const state = useSelector((store) => store.color)

    const dispatch = useDispatch()

  return (
        <>
            <h1>Using reduxtoolKit</h1>
            <h1 style={{backgroundColor:state,height:"400px",color:"White"}} >Color</h1>
            <button onClick={() => dispatch(green("#3dfc03"))}>Green</button>
            <button onClick={() => dispatch(blue("#035efc"))}>Blue</button>
            <button onClick={() => dispatch(red("#fc3503" ))}>Red</button>
            <button onClick={() => dispatch(yellow("#fcfc03"))}>Yellow</button>
        </>
    
  )
}

export default Child2