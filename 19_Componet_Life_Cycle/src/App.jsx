import { useState } from "react";
import ClassLifeCycle from "./components/ClassLifeCycle";


function App() {
  
  const[isVisible,setisVisible] = useState(true)

  return (
    <>
      <button onClick={()=> setisVisible(!isVisible)}>{isVisible ? "Remove" : "ADD"}</button>
      {isVisible && <ClassLifeCycle currentAddress={"Mumbai"}/>}
    </>
  );
}

export default App;
