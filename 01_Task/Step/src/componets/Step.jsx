import { useState } from "react"
import "./Step.css"

let messages = ["Attend Class","Give Mock","Get Offer"]

export default function Step(){

    const [step,setStep] = useState(1);
    const[state,setState] = useState({
        isShow:false
    })

    function handleShow(){
        setState({isShow:true})
    }

    function handleHide(){
        setState({isShow:false})
    }

    function handleStepInc(){
        setStep((s)=>{
            if(s<3){
                return s+1
            }
            else{
                return s=1
            }
        })
    }
    
    function handleStepDec(){
        setStep((s)=>{
            if(s>1){
                return s- 1
            }
            else{
                return s=1
            }
        })
    }

    return(
        <>
             <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <span className="navbar-brand">Step Task</span>
                    <div>
                        <button className="me-2 btn btn-success" onClick={handleShow}>Show</button>
                        <button className="btn btn-danger" onClick={handleHide}>Hide</button>
                    </div>
                </div>
            </nav>
            <section className="container-fluid">
                <div className="row">
                    {
                        state.isShow ? <div className="col-4 m-auto">
                        <div className="card">
                            <div className="card-header text-center">
                                <div className="row">
                                    <div className="col-4">
                                        <button className={`${step>=1 ? "active":""}`}>1</button>
                                    </div>
                                    <div className="col-4">
                                        <button className={`${step>=2 ? "active":""}`}>2</button>
                                    </div>   
                                    <div className="col-4">
                                        <button className={`${step>=3 ? "active":""}`}>3</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body text-center">
                                <h1>Step{step} : {messages[step-1]}</h1>
                            </div>
                            <div className="card-footer">
                                <div className="d-flex justify-content-between">
                                    <button onClick={handleStepDec}>&larr;Prev</button>
                                    <button onClick={handleStepInc}>Next&rarr;</button>
                                </div>
                            </div>
                        </div>
                    </div> :null
                    }
                </div>
            </section>
        </>
    )
}