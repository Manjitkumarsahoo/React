import Child1 from "./Child1";
import numberContext from "./context/NumberContext";

function App(){
  return(
    <>
      <numberContext.Provider value={45}>
        <h1>This is vite React Project</h1>
        <Child1 name={"Rahul"}/>
      </numberContext.Provider>
    </>
  )
}
export default App;