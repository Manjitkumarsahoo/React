import React, { useEffect, useState } from 'react'

function Debouncing() {
    const [ text,setText] = useState("")

    useEffect(()=>{
        let timeout;
        if(text){
            timeout = setTimeout(()=>{
                console.log(text)
            },1000)
        }
        return ()=>{
            //clear the timeout 
            clearTimeout(timeout)
        }
    },[text])
  return (
    <>
        <h1>Debouncing Techinqe in React</h1>
        <input type="text" onChange={(e)=>setText(e.target.value)}/>
    </>
  )
}

export default Debouncing;