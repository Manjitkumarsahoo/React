import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Career() {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card bg-dark text-white p-4 shadow-lg" style={{ maxWidth: "600px" }}>
        <div className="card-body">
          <h2 className="card-title text-center mb-3">Career Opportunities</h2>
          <p className="card-text">
            We offer a wide range of career opportunities in various fields, including:
          </p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item bg-dark text-white">🔹 Software Development</li>
            <li className="list-group-item bg-dark text-white">🔹 UI/UX Design</li>
            <li className="list-group-item bg-dark text-white">🔹 Digital Marketing</li>
            <li className="list-group-item bg-dark text-white">🔹 Data Analysis</li>
          </ul>
          <p className="mt-3">Join us and build your dream career!</p>
        </div>
      </div>
    </div>
  );
}

export default Career;
