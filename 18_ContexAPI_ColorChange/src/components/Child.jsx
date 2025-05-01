import { useColor } from "../context/ColorContext"
export default function Child(){

    const{color,setColor} = useColor()

    return(
        <>
            <div style={{
                height:"400px",
                border:"2px solid black",
                backgroundColor:color=="light" ? "white" : "black"
                }}>
                    <button style={{padding:"20px 40px",fontSize:"30px"}}
                    onClick={()=>
                        setColor(color == "light" ? "dark" : "light")
                    }>
                        {color == "light" ? "dark" : "light"}
                    </button>
            </div>
        </>
    )
}