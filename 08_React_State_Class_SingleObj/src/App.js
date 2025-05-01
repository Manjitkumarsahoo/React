import React from "react";
import Card  from "./componets/Card";

function App(){
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <p className="navbar-brand">
                React Props
            </p>
          </div>
      </nav>
      <Card/>
    </>
  )
}
export default App;