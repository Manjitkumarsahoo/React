import { useMycontex } from "../context/Contex"
export default function Count() {

    let {state,setState} = useMycontex()
    

    let letters = state.split("").filter((char)=>char !=" ").length;

    function wordCount() {
        let count = 0;
        if(state.trim()){

            count = state.trim().split(" ").filter(ele => ele !=="").length;
            return count;
        }
        else{
            return count;
        }
    }
    

    return (
        <>
            <div>
                <textarea style={{ border: "2px solid black", height: "400px", width: "500px", marginLeft: "20px" ,marginTop:"10px"}} 
                value={state} 
                onChange={(e)=>{
                    setState(e.target.value)
                }}></textarea>
            </div>
            <div style={{marginTop:"15px",marginLeft:"20px"}}>
                <button className=" me-2" onClick={()=>setState("")}>Remove</button>
                <button className="me-2" onClick={() => setState(state.slice(0, -1))}>BackSpace</button>
                <button onClick={()=>setState(state.toUpperCase())}>UpperCase</button>
            </div><br />
            <h1>No of Letters : {letters}</h1><br />
            <h1>No of Word :{wordCount()} </h1>
        </>
    )
}