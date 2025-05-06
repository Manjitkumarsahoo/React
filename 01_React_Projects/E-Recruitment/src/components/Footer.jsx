import React from "react";
import "../css/contact.css";
import logo from "/assets/logo.png";
function Footer() {
  return (
    <>
      <footer className="contact-footer" id="footer">
        <div className="footer-top">
          <div className="footer-logo">
            <img src={logo} alt="Work Force Today" draggable="false" />
            <p>
              Connecting top talent with <br /> leading companies.
            </p>
          </div>

          <div className="vertical-line"></div>

          <div className="footer-location">
            <h4>Canada</h4>
            <p>
              3975 Ave SCity, Lethbridge,<br></br>Alberta, T1J 4P4
            </p>
            <br />
            <p>+403 329-0333</p>
            <a href="#">https://http://www.workforce-today.com/</a>
          </div>

          <div className="vertical-line"></div>

          <div className="footer-location">
            <h4>Mumbai</h4>
            <p>1, Sainath Apt, T P Road, Gadhav Naka, Bhandup(w), 400078</p>
            <br />
            <p>+91 9876543210</p>
            <a href="#">https://http://www.workforce-today.com/</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>©2025 Work Force - Today | All rights reserved</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/company/work-force-today/">
              <img
                src="/assets/linkedin.webp"
                alt="LinkedIn"
                className="linkedin-icon"
                draggable="false"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
