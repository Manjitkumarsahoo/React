import { useState } from "react";
import ChildComp from "./ChildComp";

export default function ParentComp(){
let [state,setState]=useState({
    instName:"jspider",
    vp:""
})
function receiveData(data){
    setState((state)=>({...state,vp:data}))
}
return(<>
<section className="container-fluid">
    <div className="row">
        <div className="col-5">
            <div className="card">
                <div className="card-body bg-success text-white">
                    <h2>parent component</h2>
                    <h3>Data from child =={state.vp}</h3>
                    <ChildComp instName={state.instName} sendData={receiveData}/>

                </div>
            </div>
        </div>
    </div>
</section>

</>)
}