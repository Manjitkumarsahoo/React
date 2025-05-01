import React from 'react';
import '../css/contact.css';
import logo from '../assets/logo.jpg';

function Contact() {
    return (
        <div className="contact-container">
            <div className="contact-content">
                <div className="contact-text">
                    <h2>Ready to Transform Your Hiring Process?</h2>
                    <p>Schedule a consultation with our recruitment experts today.</p>
                </div>

                <div className="contact-form">
                    <h3>Your Contact Information</h3>
                    <form>
                        <div className="input-wrapper">
                            <i className="fa fa-user icon"></i>
                            <input type="text" placeholder="Your Name" />
                        </div>
                        <div className="input-wrapper">
                            <i className="fa fa-building icon"></i>
                            <input type="text" placeholder="Company Name" />
                        </div>
                        <div className="contact-row">
                            <div className="input-wrapper">
                                <i className="fa fa-envelope icon"></i>
                                <input type="email" placeholder="Email" />
                            </div>
                            <div className="input-wrapper">
                                <i className="fa fa-phone icon"></i>
                                <input type="tel" placeholder="Phone Number" />
                            </div>
                        </div>
                        <button type="submit">Request Consultation</button>
                    </form>
                </div>
            </div>

            <footer className="contact-footer">
                <div className="footer-top">
                    <div className="footer-logo">
                        <img src={logo} alt="Work Force Today" />
                        <p>Connecting top talent with leading companies.</p>
                    </div>

                    <div className="footer-location">
                        <h4>Canada</h4>
                        <p>534 Roger Street, Toronto, Ontario, Canada</p>
                        <p>+1 647-405-7024</p>
                        <a href="#">https://</a>
                    </div>

                    <div className="footer-location">
                        <h4>Bhubaneswar</h4>
                        <p>ABC, Kalinga Vihar, Bhubaneswar, Odisha 751017</p>
                        <p>+91 9876543210</p>
                        <a href="#">https://</a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>©2025 Work Force - Today | All rights reserved</p>
                    <div className="social-icons">
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Contact;
