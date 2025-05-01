//import UseMemohook from "./UseMemohook"
//import UseCallbackhook from "./useCallbackhook"
import Button from "./Button"
import HOC from "./HOC"

const MyButton = HOC(Button)// what HOC is returning
function App() {
  

  return (
    <>
      {/* <UseMemohook /> */}
      {/* <UseCallbackhook/> */}
      <MyButton text="reset"/>
      <MyButton text="Submit"/>
    </>
  )
}

export default App
