import { NavLink } from "react-router-dom";
import "./Navbar.css"; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">MyApp</h1>
        <ul className="nav-links">
          <li><NavLink to="/" className="nav-link">Home</NavLink></li>
          <li><NavLink to="/products" className="nav-link">Products</NavLink></li>
          <li><NavLink to="/about" className="nav-link">About</NavLink></li>
          <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
          <li><NavLink to="/login" className="nav-link login-btn">Login</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;