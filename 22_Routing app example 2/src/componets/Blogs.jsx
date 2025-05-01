import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Blogs() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">This is Blogs Page</h1>
      
      <div className="row">
        {/* Blog Post 1 */}
        <div className="col-md-4">
          <div className="card shadow">
            <img
              src="https://via.placeholder.com/300"
              className="card-img-top"
              alt="Blog 1"
            />
            <div className="card-body">
              <h5 className="card-title">Understanding React Hooks</h5>
              <p className="card-text">
                Learn about React Hooks and how they simplify state management in functional components.
              </p>
              <a href="#" className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        </div>

        {/* Blog Post 2 */}
        <div className="col-md-4">
          <div className="card shadow">
            <img
              src="https://via.placeholder.com/300"
              className="card-img-top"
              alt="Blog 2"
            />
            <div className="card-body">
              <h5 className="card-title">Web Development Trends 2025</h5>
              <p className="card-text">
                Discover the latest web development trends that will shape the industry in 2025.
              </p>
              <a href="#" className="btn btn-success">
                Read More
              </a>
            </div>
          </div>
        </div>

        {/* Blog Post 3 */}
        <div className="col-md-4">
          <div className="card shadow">
            <img
              src="https://via.placeholder.com/300"
              className="card-img-top"
              alt="Blog 3"
            />
            <div className="card-body">
              <h5 className="card-title">Why UI/UX Matters</h5>
              <p className="card-text">
                Explore the importance of UI/UX design and how it enhances user experience.
              </p>
              <a href="#" className="btn btn-warning text-dark">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
