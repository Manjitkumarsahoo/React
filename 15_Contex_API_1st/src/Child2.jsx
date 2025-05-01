import { useContext } from "react";
import numberContext from "./context/NumberContext";
function Child2(props){
    //consuming the context
    const number = useContext(numberContext)

    return(
        <>
            <h1>Child2 Component</h1>
            <h2>name = {props.name}</h2>
            <h1>number = {number}</h1>
        </>
    )
}
export default Child2;