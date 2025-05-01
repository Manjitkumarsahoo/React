import React from "react";
import ParentComp from "./componets/ParentComp";




function App() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
            <p className="navbar-brand">
                 ToDoList
            </p>
        </div>
      </nav>
      <ParentComp/>
    </>
  );
}

export default App;
