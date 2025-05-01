import { useState } from "react";

export default function ChildComp({instName,sendData}){
    let [state,setState]=useState({
        vp:"Raveesh"
    })
    function dataSend(){
        sendData(state.vp);
    }

    return(<>
<section className="container-fluid">
    <div className="row">
        <div className="col-5">
            <div className="card">
                <div className="card-body bg-success text-white">
                    <h2>child  component</h2>
                    <h3>Data from parent =={instName}</h3>
                    <button className="btn btn-success" onClick={dataSend}> send Data</button>
                    

                </div>
            </div>
        </div>
    </div>
</section>
    </>)
}