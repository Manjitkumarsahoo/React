import React from 'react'

function Button({text,handelClick,bgColor,textColor}) {
  return (
    <>
        <button 
        onClick={handelClick}
        style={{padding:"10px 20px",
            backgroundColor:bgColor,
            color:textColor
        }}
        >{text}</button>
    </>
  )
}

export default Button