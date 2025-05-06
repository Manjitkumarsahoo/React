import React, { useState } from "react";
import "../css/main.css";
import img1 from "/assets/main.jpg";
import white from "/assets/white.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Main = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src="/assets/logo.png" alt="Logo" draggable="false" />
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>
              About Us
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => setIsMenuOpen(false)}>
              Services
            </a>
          </li>
          <li>
            <a href="#testimonials" onClick={() => setIsMenuOpen(false)}>
              Testimonials
            </a>
          </li>
        </ul>
        <div className="contact-button">
          <a href="#contact">
            <button>Contact Us</button>
          </a>
        </div>
      </nav>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-text1">
              <h1>
                Connecting <span className="highlight">Top Talent</span> with
                <br />
                Leading Companies
              </h1>
              <p>
                Work Force – Today helps businesses find the perfect candidates
                <br></br>
                and professionals discover their dream careers.
              </p>
              <div
                className="hero-btn"
                onClick={() => {
                  const footer = document.getElementById("footer");
                  if (footer) {
                    footer.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <b>Get in Touch</b>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-wrapper">
              <img src={img1} alt="person1" draggable="false" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
