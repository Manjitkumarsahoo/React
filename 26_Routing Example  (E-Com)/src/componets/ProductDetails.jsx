import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product details:", error));
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px"
    }}>
      <img style={{
        width: "50%",
        height: "auto",
        borderRadius: "10px"
      }} src={product.thumbnail} />
      <div style={{
        marginLeft: "20px",
        textAlign: "left"
      }}>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p><strong>Price:</strong> ${product.price}</p>
        <p><strong>Rating:</strong> ⭐ {product.rating} / 5</p>
        <button style={{
          backgroundColor: "#27ae60",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          marginTop: "10px"
        }}>Buy Now</button>
      </div>
    </div>
  );
}

export default ProductDetails;
