import React from "react";
import "../css/Aboutus.css";

const Aboutus = () => {
  return (
    <section className="about-us-section" id="about">
      <div className="about-button">
        <p>About Us</p>
      </div>
      <h2 className="about-us-title">Your Trusted Recruitment Partner</h2>

      <div className="about-us-card">
        <div className="about-us-text">
          <p>
            Work Force - Today is a leading recruitment agency with years of
            experience connecting talented professionals with top employers. We
            understand the unique challenges of today's job market and provide
            tailored solutions for both candidates and employers.
          </p>
          <p>
            Our team of experienced recruiters brings industry-specific
            knowledge and a personalized approach to every placement, ensuring
            the perfect match for both parties.
          </p>
          <a href="#contact" className="contact-btn">
            Contact Us
          </a>
        </div>
        <div className="about-us-image-placeholder" />
      </div>
    </section>
  );
};

export default Aboutus;
