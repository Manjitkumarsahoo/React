import Child2 from "./Child2";

function Child1(props){
    return(
        <>
        <h1>Child1 Component</h1>
        <Child2 name={props.name}/>
        </>
    )
}
export default Child1;