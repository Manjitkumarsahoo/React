import { createContext ,useContext, useState} from "react";

const mycontex = createContext();


export function MyContexWrapper({children}){

    let [state,setState] = useState("")

    return(
        <mycontex.Provider value={{state,setState}}>
            {children}
        </mycontex.Provider>
    )
}


export function useMycontex(){
    return useContext(mycontex)
}