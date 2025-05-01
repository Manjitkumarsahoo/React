import { usePeopleCount } from "../context/StudentCount"


export default function Trainer() {

  const { state, dispatch } = usePeopleCount()
  return (
    <>
        <h1>No of Trainer:{state.trainers}</h1>
        <button onClick={() => dispatch({ type: "incTrnr"})}>Increment</button>
        <button onClick={() => dispatch({ type: "decTrnr"})}>Decrement</button>
    </>
  )
}
