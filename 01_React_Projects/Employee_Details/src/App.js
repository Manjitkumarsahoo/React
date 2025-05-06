import React from "react";
import EmpApp from "./componets/EmpApp";


function App() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
            <p className="navbar-brand">
                 Employee Portal
            </p>
        </div>
      </nav>
      <EmpApp/>
    </>
  );
}

export default App;
