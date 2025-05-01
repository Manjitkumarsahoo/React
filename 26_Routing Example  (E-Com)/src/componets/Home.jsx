import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      textAlign: "center",
      backgroundColor: "#f4f4f4"
    }}>
      <h1 style={{ fontSize: "36px" }}>Welcome to E-Com</h1>
      <p style={{ fontSize: "18px" }}>
        This is a simple homepage where users can navigate to different sections of the app.
      </p>
      <button 
        onClick={() => navigate("/products")}
        style={{
          backgroundColor: "#007bff",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          fontSize: "18px"
        }}
      >
        Go to Products
      </button>
    </div>
  );
}
