import { usePeopleCount } from "../context/StudentCount"


export default function Student() {

  const { state, dispatch } = usePeopleCount()
  return (
    <>
        <h1>No of Student:{state.students}</h1>
        <button onClick={() => dispatch({ type: "incStd"})}>Increment</button>
        <button onClick={() => dispatch({ type: "decStd"})}>Decrement</button>
    </>
  )
}
