import Child from "./components/Child";
import { ColorContextWrapper } from "./context/ColorContext"


function App() {
  return (
    <>
      <ColorContextWrapper>
        <h1>Welcome</h1>
        <Child />
      </ColorContextWrapper>
    </>
  );
}

export default App;
