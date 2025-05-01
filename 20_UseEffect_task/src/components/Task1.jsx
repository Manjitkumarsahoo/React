import { useEffect, useState } from "react";

function Task1() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("grey");

  useEffect(() => {
    if (count<0){
        setColor("red");
    }
    else if (count >=1 && count<=5){
        setColor("yellow");
    }
    else if(count >=5 && count <=9 ){
        setColor("brown");
    }
    else if(count == 10 ){
        setColor("orange");
    }
    else {
        setColor("red");
    }
  },[count])
  return (
    <>
      <div
        style={{
          border: "1px solid black",
          padding: "10px",
          width: "400px",
          height: "400px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor:color,
            color: "white",
            padding: "10px",
            width: "250px",
            height: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px"
          }}
        >
          <button onClick={() => setCount(count - 1)}>➖</button>
          <h3>Count: {count}</h3>
          <button onClick={() => setCount(count + 1)}>➕</button>
        </div>
      </div>
    </>
  );
}

export default Task1;
