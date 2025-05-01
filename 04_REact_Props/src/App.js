import React from "react";
import Employee from "./componets/Employee";


function App() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <p className="navbar-brand">
                React Props
            </p>
          </div>
      </nav>
      <Employee ename="Manjit" age={25}/>
      <Employee ename="Baya" age={24}/>
    </>
  );
}

export default App;
