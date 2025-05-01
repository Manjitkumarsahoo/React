import { createContext,useContext } from "react";

//createing the context
const numberContext = createContext()

//Wrapping component to get the react ui component
export function NumberContexWrapper({children}){

    let num = 100;  

    return(
        <numberContext.Provider value={num}>
            {children}
        </numberContext.Provider>
    )
}

//Costum hook to consume the context
export function useNumber(){
    return useContext(numberContext)
}