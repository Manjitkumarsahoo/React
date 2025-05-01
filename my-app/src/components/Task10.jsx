import React, { useState, useEffect } from "react";

export default function Task10() {
    const screenWidth = window.innerWidth; // Dynamic width
    const [position, setPosition] = useState({ x: 100, y: 100 });

    // Move ball function
    const moveBall = (direction) => {
        setPosition((prev) => {
            const step = 50; // Movement speed
            let newX = prev.x;
            let newY = prev.y;

            if (direction === "left") newX = Math.max(0, prev.x - step);
            if (direction === "right") newX = Math.min(screenWidth - 60, prev.x + step);
            if (direction === "down") newY += step; // No limit for downward movement
            if (direction === "up") newY = Math.max(0, prev.y - step);

            // Scroll down when moving up/down
            if (direction === "down" || direction === "up") {
                window.scrollTo({ top: newY - window.innerHeight / 2, behavior: "smooth" });
            }

            return { x: newX, y: newY };
        });
    };

    // Handle keyboard movement
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "ArrowUp") moveBall("up");
            if (event.key === "ArrowDown") moveBall("down");
            if (event.key === "ArrowLeft") moveBall("left");
            if (event.key === "ArrowRight") moveBall("right");
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <div style={{
            textAlign: "center",
            minHeight: "500vh",  // Infinite scroll downward
            maxWidth: `${screenWidth}px`, // Lock horizontal width
            margin: "0 auto",
            background: "linear-gradient(to bottom, #ff9966, #ff5e62)", // Cool gradient background
            position: "relative",
            paddingTop: "50px"
        }}>
            <h1 style={{ color: "white", fontSize: "2.5rem", textShadow: "2px 2px 5px black" }}>
                🎾 Move the Ball - Unlimited Down Scroll 🚀
            </h1>

            {/* Ball */}
            <div style={{
                width: "60px",
                height: "60px",
                background: "radial-gradient(circle, yellow 20%, orange 60%, red 90%)",
                borderRadius: "50%",
                position: "absolute", // Moves freely
                left: position.x,
                top: position.y,
                transition: "left 0.2s, top 0.2s", // Smooth movement
                boxShadow: "0px 0px 15px rgba(0,0,0,0.5)"
            }}></div>

            {/* Control Buttons */}
            <div style={{
                position: "fixed",
                bottom: "20px",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: "10px",
            }}>
                <button onClick={() => moveBall("up")} style={btnStyle}>⬆ Up</button>
                <button onClick={() => moveBall("left")} style={btnStyle}>⬅ Left</button>
                <button onClick={() => moveBall("down")} style={btnStyle}>⬇ Down</button>
                <button onClick={() => moveBall("right")} style={btnStyle}>➡ Right</button>
            </div>
        </div>
    );
}

// Button styling
const btnStyle = {
    padding: "15px 25px",
    fontSize: "1.5rem",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    background: "#ffcc00",
    color: "#333",
    fontWeight: "bold",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.2)",
};
