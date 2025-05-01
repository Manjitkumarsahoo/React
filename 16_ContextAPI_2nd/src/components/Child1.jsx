import { useNumber } from "../context/NumberContex";
export function Chlid1(){
    const  number = useNumber()
    return(
        <>
        <h1>The Number is :- {number}</h1>
        </>
    )
}