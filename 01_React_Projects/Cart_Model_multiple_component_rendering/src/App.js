import React from "react";
import Products from "./componets/Products";




function App() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
            <p className="navbar-brand">
                 React Componet Rendering
            </p>
        </div>
      </nav>
      <Products/>
    </>
  );
}

export default App;
