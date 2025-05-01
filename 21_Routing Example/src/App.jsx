import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./componets/Navbar";
import Home from "./componets/Home"
import About from "./componets/About"
import Contact from "./componets/Contact"
import Login from "./componets/Login"
import Products from "./componets/Products";


function App() {
  return (  
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;