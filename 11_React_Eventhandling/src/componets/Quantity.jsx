import React from "react";

class Quantity extends React.Component{

    constructor(props){
        super(props)
        
        this.state = {qty:1}        //create state in class base

        this.handleDec = this.handleDec.bind(this);
        this.handleInc = this.handleInc.bind(this);
    }

    handleDec(){
        if(this.state.qty > 0)
            this.setState ({qty: this.state.qty-1})     //setState is a method in React
    }

    handleInc(){
        this.setState({qty:this.state.qty + 1});
    }

    render(){

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
                                    <h2>Count:-{this.state.qty}</h2>
                                    <button className="btn btn-danger me-2" onClick={this.handleDec} >Decrement</button>
                                    <button className="btn btn-success" onClick={this.handleInc}>Increment</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
export default Quantity;