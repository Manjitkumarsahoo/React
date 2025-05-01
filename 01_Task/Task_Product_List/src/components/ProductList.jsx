import React, { useEffect, useState } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);

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
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", padding: "20px" }}>
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid black",
            borderRadius: "10px",
            padding: "15px",
            width: "220px",
            textAlign: "center",
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-between"  
          }}
        >
          <img
            src={product.thumbnail}
            style={{ width: "100%", height: "150px" }}
          />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>⭐ {product.rating} / 5</p>
          <button
            style={{
              backgroundColor: "#27ae60",
              color: "white",
              padding: "8px 12px",
              borderRadius: "5px"
            }}
          >
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
