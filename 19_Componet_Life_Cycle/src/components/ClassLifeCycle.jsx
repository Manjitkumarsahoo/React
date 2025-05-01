import { Component } from "react";
class ClassLifeCycle extends Component{
    constructor(){
        //1st method of mounting phase is used to initialize the state
        super()
        this.state={name:"Manjit",address:"Odisha"}
    }
    static getDerivedStateFromProps(props,state){
        //2nd method of mounting phase
        //it is used to create the state value using props values
        //it is also 1st method of updating phase
        console.log("static getDerivedStateFromProps() method")
        return {address:props.currentAddress}
    }
    shouldComponentUpdate(){
        //2nd method of updating phase
        //it is used to return boolean value to the next render
        console.log("shouldcomponentUpdate()method")
        return true;
    }
    componentDidMount(){
        
        //last method of mounting phase
        //it is used to handle the side effects after initial render
        //this method executes only once after the 1st render
        console.log("componentDidMount() method")
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        //this is the 4th method of updating phase
        //it has the access to previous props and state values
        console.log("get snapshotBeforeUpdate() method");
        //console.log(prevProps,prevState)
        return null;
    }
    componentDidUpdate(prevProps,prevState,snapshot){
        //this is the last method of updating phase
        //it is used to perform some side effects using the prev props/State values or current props/state value
        console.log("componentDidUpdate() method")
    }
    render(){
        //3rd method of mounting phase
        //insert the jsx into dom
        //it is also 3rd method of updating phase
        console.log("render() method")
        return(
            <>
               <h1>Name:-{this.state.name}</h1>
               <h1>Adress:-{this.state.address}</h1>
               <h1>CurrentAdress:-{this.props.currentAddress}</h1>
               <button onClick={()=>this.setState({name:"Kiran"})}>Change Name</button>
            </>
        )
    }
}
export default ClassLifeCycle;