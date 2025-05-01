import { createContext,useContext, useState } from "react";

const ColorContext = createContext()

export function ColorContextWrapper({children}){

    const [color,setColor] = useState("light")

    return(
        <ColorContext.Provider value={{color,setColor}}>
            {children}
        </ColorContext.Provider>
    )
}

export function useColor(){
    return useContext(ColorContext)
}


