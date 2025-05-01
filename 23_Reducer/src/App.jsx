import { useReducer } from "react"
import reducerFun from "./reducers/CountReducer";



function App() {

  const [count, countDispatch] = useReducer(reducerFun, 10)
  
  return (
    <>
      <h1>Reducer Function</h1>
      <h1>Count : {count}</h1>
      <button onClick={() => countDispatch({
        type: "increment", payload: 1
      })}>Increment</button>
      <button onClick={() => countDispatch({
        type: "decrement", payload: 1
      })}>Decrement</button>
      <button onClick={() => countDispatch({
        type: "increment", payload: 10
      })}>Increment 10</button>
      <button onClick={() => countDispatch({
        type: "decrement", payload: 20
      })}>Decrement 20</button>
    </>
  )
}
export default App;