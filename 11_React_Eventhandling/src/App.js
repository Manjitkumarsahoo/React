import React from "react";
import Quantity from "./componets/Quantity";
//import Counter from './componets/Counter'


function App() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
            <p className="navbar-brand">
                 React Props Example
            </p>
        </div>
      </nav>
      {/* <Counter/> */}
      <Quantity/>
    </>
  );
}

export default App;
