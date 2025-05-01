import React from "react";
import Product from "./componets/Product";


function App() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
            <p className="navbar-brand">
                 🛒Product Cart
            </p>
        </div>
      </nav>
      <Product/>
    </>
  );
}

export default App;
