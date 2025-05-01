import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./componets/Navbar";
import Home from "./componets/Home";
import Products from "./componets/Products";
import About from "./componets/About";
import Contact from "./componets/Contact";
import Login from "./componets/Login";
import Career from "./componets/Career";
import Blogs from "./componets/Blogs";
import Subscription from "./componets/Subscription";
import Dynamic from "./componets/Dynamic";


function App() {
  return (  
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} >
          <Route index element={<Career/>}></Route>
          <Route path="blogs" element={<Blogs/>}></Route>
          <Route path="sub" element={<Subscription/>}></Route>
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dyn/:product" element={<Dynamic/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
