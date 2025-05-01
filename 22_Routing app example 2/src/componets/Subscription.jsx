import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Subscription() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Subscription Page</h1>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-4">
            <h3 className="text-center mb-3">Subscribe to Our Newsletter</h3>
            <p className="text-center">
              Stay updated with the latest news, blogs, and offers!
            </p>

            <form>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" placeholder="Enter your name" />
              </div>

              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-control" placeholder="Enter your email" />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscription;
