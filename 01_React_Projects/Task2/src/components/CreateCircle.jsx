import { useState } from "react"
export default function CreateCircle(){
    const [circles, setCircles] = useState([])
    function createCircle() {
        // circles.push(1)
        // setCircles(circles) it will not cause re-render as it referes to original value
        // console.log(circles)
        let obj = {
            id: Math.trunc(Math.random() * 100000),
            isSelected: false
        }
        setCircles([...circles, obj]) //async
        // console.log(circles)
    }
    function handelSelect(id) {
        // console.log(id)
        let newCircles = circles.map(ele => {
            if (ele.id === id) {
                ele.isSelected = !ele.isSelected
            }
            return ele
        })
        setCircles(newCircles)
    }
    function deleteCircle() {
        let updatedCircles = circles.filter(ele => !ele.isSelected)
        setCircles(updatedCircles)
    }
    return (
        <>
            {console.log("render", circles)}
            <div style={{
                display: "flex", marginTop: "20px",
                justifyContent: "center", gap: "40px"
            }}>
                <button onClick={handelSelect}>Create Circel</button>
                <button onClick={deleteCircle}>Delete Circle</button>

            </div>
            <div style={{
                display: "flex", justifyContent: "center",
                gap: "40px", margin: "20px 0px"
            }}>
                <b>No of Circles :{circles.length}</b>
                <b>No of Selected Circles : {circles.filter(ele => ele.isSelected).length}</b>
            </div>
            <div className="circles" style={{ display: "flex", flexWrap: 'wrap', gap: "20px 30px" }}>
                {
                    circles.map((ele) => {
                        return (
                            <div key={ele.id} style={{
                                height: "100px", width: "100px",
                                borderRadius: "50%", backgroundColor: ele.isSelected ? "red" : "green"
                            }}
                                onClick={() => handelSelect(ele.id)}
                            ></div>
                        )
                    })
                }
            </div>

        </>
    )
    
}  
