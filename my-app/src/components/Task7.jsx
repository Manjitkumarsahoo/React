import { useEffect, useState, useRef } from "react";

function Task7() {
    const totalBoxes = 60;
    const [boxes, setBoxes] = useState(Array(totalBoxes).fill("_"));
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setBoxes((prevBoxes) => {
                    const newBoxes = [...prevBoxes];
                    newBoxes[currentIndex] = getRandomColor();
                    return newBoxes;
                });

                if (currentIndex >= totalBoxes - 1) {
                    clearInterval(intervalRef.current); // Stop the interval
                    setTimeout(() => {
                        setBoxes(Array(totalBoxes).fill("_")); // Reset all boxes
                        setCurrentIndex(0); // Restart from index 0
                        if (isRunning) startAnimation(); // Restart animation
                    }, 1000);
                } else {
                    setCurrentIndex((prevIndex) => prevIndex + 1);
                }
            }, 100);
        } else {
            clearInterval(intervalRef.current);
        }

        return () => clearInterval(intervalRef.current);
    }, [isRunning, currentIndex]);

    const getRandomColor = () => {
        return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    };

    const startAnimation = () => {
        setIsRunning(true);
    };

    const stopAnimation = () => {
        setIsRunning(false);
    };

    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                <button onClick={startAnimation}>Start</button>
                <button onClick={stopAnimation}>End</button>
            </div>
            <div style={{ margin: "10px", display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "start" }}>
                {boxes.map((color, i) => (
                    <div
                        key={i}
                        style={{
                            height: "100px",
                            width: "100px",
                            borderRadius: "10px",
                            boxShadow: "0 0 5px black",
                            background: color === "_" ? "white" : color,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "18px",
                            fontWeight: "bold"
                        }}
                    >
                        {i}
                    </div>
                ))}
            </div>
        </>
    );
}

export default Task7;