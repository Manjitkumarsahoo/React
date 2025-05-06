import React from "react";

function m1(){
    console.log("m1 Start")
}
function Wishmessage(){

    let msg = "Happy Birthday🎂"
    return <>
                <h1>{msg}</h1>
                <h2>{10+20}</h2>
                {m1()}
           </>

}
export default Wishmessage;