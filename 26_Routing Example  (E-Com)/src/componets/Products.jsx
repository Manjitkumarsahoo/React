import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); // 👈 React Router navigation

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <div style={{
        width: "250px",
        padding: "20px",
        backgroundColor: "#f8f9fa",
        height: "100vh",
        borderRight: "2px solid #ddd",
        display: "flex",
        flexDirection: "column",
        gap: "20px"
      }}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px"
        }}>
          <h2 style={{
            fontSize: "18px",
            fontWeight: "bold",
            borderBottom: "2px solid #000",
            paddingBottom: "5px"
          }}>FILTERS</h2>
          <button >Category</button>
          <button >Price Range</button>
          <button >Brand</button>
        </div>
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px"
        }}>
          <h2 style={{
            fontSize: "18px",
            fontWeight: "bold",
            borderBottom: "2px solid #000",
            paddingBottom: "5px"
          }}>SORTS</h2>
          <button >Price: Low to High</button>
          <button >Price: High to Low</button>
          <button >Rating</button>
        </div>
      </div>

      {/* Product List */}
      <div style={{ flex: 1, display: "flex", flexWrap: "wrap", gap: "20px", padding: "20px" }}>
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)} // 👈 Navigate to Product Details
            style={{
              border: "1px solid black",
              borderRadius: "10px",
              padding: "15px",
              width: "220px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              cursor: "pointer",
            }}
          >
            <img src={product.thumbnail} style={{ width: "100%", height: "150px" }} alt={product.title} />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>⭐ {product.rating} / 5</p>
            <button
              style={{
                backgroundColor: "#27ae60",
                color: "white",
                padding: "8px 12px",
                borderRadius: "5px",
              }}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Products;


