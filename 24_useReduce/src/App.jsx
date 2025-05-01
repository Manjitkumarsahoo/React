import Student from "./component/Student";
import Total from "./component/Total";
import Trainer from "./component/Trainer";
import { PeopleCountWrapper } from "./context/StudentCount";

function App() {

  return (
    <>
      <PeopleCountWrapper>
        <Student />
        <Trainer />
        <Total />
      </PeopleCountWrapper>
    </>
  )
}
export default App;