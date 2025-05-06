import React from "react";
import "../css/Ourservices.css";
import candidateImg from "/assets/Frame1.svg";
import employerImg from "/assets/Frame2.svg";

const OurServices = () => {
  return (
    <section className="services-section" id="services">
      <div class="service-button">
        <p>Services</p>
      </div>
      <h2 className="services-heading">Our Services</h2>
      <div className="services-container">
        {/* Employer Box */}
        <div className="service-box">
          <div className="service-icon">
            <img
              src={employerImg}
              alt="Employer Services"
              className="service-image"
              draggable="false"
            />
          </div>
          <h3>For Employers</h3>
          <ul>
            <li className="service-item">
              <span className="emoji">👉🏻</span>
              <div className="service-text">
                <span className="highlight">Talent Acquisition</span>
                <br />
                Find qualified candidates quickly with our extensive talent
                network.
              </div>
            </li>

            <li className="service-item">
              <span className="emoji">👉🏻</span>
              <div className="service-text">
                <span className="highlight">Executive Search</span>
                <br />
                Specialized recruitment for leadership and executive positions.
              </div>
            </li>

            <li className="service-item">
              <span className="emoji">👉🏻</span>
              <div className="service-text">
                <span className="highlight">
                  Recruitment Process Outsourcing
                </span>
                <br />
                End-to-end recruitment solutions to streamline your hiring
                process.
              </div>
            </li>

            <li className="service-item">
              <span className="emoji">👉🏻</span>
              <div className="service-text">
                <span className="highlight">
                  Recruitment Process Outsourcing
                </span>
                <br />
                Strategic guidance on building and scaling your team
                effectively.
              </div>
            </li>
          </ul>
        </div>

        {/* Candidate Box */}
        <div className="service-box">
          <div className="service-icon">
            <img
              src={candidateImg}
              alt="Candidate Services"
              className="service-image"
              draggable="false"
            />
          </div>
          <h3>For Candidates</h3>
          <ul>
            <li className="service-item">
              <span className="emoji">👉🏻</span>
              <div className="service-text">
                <span className="highlight">Career Placement</span>
                <br />
                Connect with top employers and find your ideal position.
              </div>
            </li>

            <li className="service-item">
              <span className="emoji">👉🏻</span>
              <div className="service-text">
                <span className="highlight">Resume & Interview Coaching</span>
                <br />
                Expert guidance to help you stand out in the application
                process.
              </div>
            </li>

            <li className="service-item">
              <span className="emoji">👉🏻</span>
              <div className="service-text">
                <span className="highlight">Career Development</span>
                <br />
                Resources and support for long-term professional growth.
              </div>
            </li>

            <li className="service-item">
              <span className="emoji">👉🏻</span>
              <div className="service-text">
                <span className="highlight">Salary Negotiation</span>
                <br />
                Professional advice to help you secure the compensation you
                deserve.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
