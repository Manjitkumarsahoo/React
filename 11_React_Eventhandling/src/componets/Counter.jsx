import { useState } from "react";

function Counter(props){

    const [count,setCount] = useState(1)

    function handleDec(){
        setCount((prevstate)=>{
            if(prevstate > 0){
                return prevstate - 1;
            }
            return 0;
        });
    }

    function handleInc(){
        setCount((prevstate)=> prevstate + 1);
    }

    return(
        <>
            <section className="container-fluid">
                <div className="row">
                    <div className="col-4 m-auto">
                        <div className="card">
                            <div className="card-header bg-dark text-white text-center">
                                <h2>Counter App</h2>
                            </div>
                            <div className="card-body text-center">
                                <h2>Count:-{count}</h2>
                                <button className="btn btn-danger me-2" onClick={handleDec}>Decrement</button>
                                <button className="btn btn-success" onClick={handleInc}>Increment</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Counter;