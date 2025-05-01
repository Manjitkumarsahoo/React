import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./componets/Navbar";
import Home from "./componets/Home";
import Products from "./componets/Products";
import Contact from "./componets/Contact";
import Cart from "./componets/Cart";
import ProductDetails from "./componets/ProductDetails";
import Login from "./componets/Login";


function App() {
  return (  
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/product/:id" element={<ProductDetails/>} />
          <Route path="/login" element={<Login/>} />  
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;



