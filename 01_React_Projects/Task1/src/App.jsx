import Count from "./components/Count";
import { MyContexWrapper } from "./context/Contex";

function App() {
  return (
    <>
      <MyContexWrapper>
        <Count />
      </MyContexWrapper>
    </>
  );
}

export default App;
