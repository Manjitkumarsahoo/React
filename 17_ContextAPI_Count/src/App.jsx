import { Child1 } from "./components/Child1";
import { CountContextWrapper } from "./context/CountContext";

function App() {
  return (
    <CountContextWrapper>
        <h1>Welcome to Vite Component</h1>
        <Child1 />
    </CountContextWrapper>
  );
}

export default App;
