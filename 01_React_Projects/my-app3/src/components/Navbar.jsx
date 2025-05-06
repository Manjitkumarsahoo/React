import { NavLink } from "react-router-dom";
import "../css/navbar.css";
import logo from "../assets/logo.jpg";

function Navbar() {
    return (
        <header className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Work Force Today" />
            </div>

            <nav className="navbar-links">
                <ul>
                    <li><NavLink to="/" className="nav-link">Home</NavLink></li>
                    <li><NavLink to="/service" className="nav-link">Service</NavLink></li>
                    <li><NavLink to="/testimonial" className="nav-link">Testimonial</NavLink></li>
                    <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
                </ul>
            </nav>

            <div className="navbar-cta">
                <button>Contact Us</button>
            </div>
        </header>
    );
}

export default Navbar;
