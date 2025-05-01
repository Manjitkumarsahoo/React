import React from "react";
import ToDoList from "./componets/ToDoList";



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
      <ToDoList/>
    </>
  );
}

export default App;
