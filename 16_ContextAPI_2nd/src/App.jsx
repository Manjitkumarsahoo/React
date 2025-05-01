import { Chlid1 } from "./components/Child1";
import { NumberContexWrapper } from "./context/NumberContex";

function App(){
  return(
    <>
      <NumberContexWrapper>
        <h1>Welcome to vite component</h1>
        <Chlid1/>
      </NumberContexWrapper>
    </>
  )
}
export default App;