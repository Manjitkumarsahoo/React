import React from 'react'

const Child3 = React.memo((props)=>{
    return(
        <>
            {console.log("Child Comp render")}
            <h1>Child Component</h1>
            <h1>Name:{props.name}</h1>
        </>
    )
})
export default Child3; 