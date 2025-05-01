import { use, useEffect, useState } from "react";
function Task2() {

    const[color,setColor] = useState("green");
    const[isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true)
        },2000)
    },[])

    useEffect(() => {
        let interval
        if(isVisible){
            interval = setInterval(() => {
                setColor((prevcolor)=>(prevcolor === "green" ? "blue" : "green"))
            },1000)
        }
        return ()=>{
            clearInterval(interval)
        }
    },[isVisible])

    return (
        <>
            <div style={{
                border: "1px solid black",
                padding: "10px",
                width: "400px",
                height: "400px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center", 
                textAlign: "center"
            }}>
                <h1>Hello Jspider</h1>
                {isVisible && <h2 style={{color:color}}>Welcome to React</h2>}
            </div>
        </>
    );
}
export default Task2;
