import { useState } from "react";

function Task8() {
    const [option, setOption] = useState("");
    const [lucknum, setLuckyNum] = useState(null);
    
    const handelChoices = (event) => {
        setLuckyNum(null);
        setOption(event.target.value);
    };

    const play = () => {
        setTimeout(() => {
            let randomValue = Math.floor(Math.random() * 11) + 2;
            setLuckyNum(randomValue);
        }, 2000);
    };

    function isWon() {
        if (option === "small") {
            return lucknum >= 2 && lucknum <= 6;
        } else if (option === "big") {
            return lucknum >= 8 && lucknum <= 12;
        } else if (option === "jackpot") {
            return lucknum === 7;
        }
        return false;
    }

    return (
        <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif", padding: "20px" }}>
            <h1 style={{ color: "#2c3e50", fontSize: "2rem", marginBottom: "20px" }}>DICE GAME</h1>
            <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginBottom: "20px" }}>
                <div>
                    <input type="radio" name="choice" value="small" id="choice1" onChange={handelChoices} />
                    <label htmlFor="choice1" style={{ marginLeft: "5px", fontSize: "1.2rem" }}>Small 2-6</label>
                </div>
                <div>
                    <input type="radio" name="choice" value="jackpot" id="choice2" onChange={handelChoices} />
                    <label htmlFor="choice2" style={{ marginLeft: "5px", fontSize: "1.2rem" }}>Jackpot 7</label>
                </div>
                <div>
                    <input type="radio" name="choice" value="big" id="choice3" onChange={handelChoices} />
                    <label htmlFor="choice3" style={{ marginLeft: "5px", fontSize: "1.2rem" }}>Big 8-12</label>
                </div>
            </div>
            <div style={{ marginBottom: "20px", fontSize: "1.5rem", color: "#34495e" }}>
                {option ? (
                    <h1>You have bet for <span style={{ fontWeight: "bold", color: "#e74c3c" }}>{option}</span></h1>
                ) : (
                    <h1>Select your option to start</h1>
                )}
            </div>
            <div style={{ marginBottom: "20px" }}>
                {option && <button style={{ padding: "10px 20px", fontSize: "1.2rem", backgroundColor: "#3498db", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }} onClick={play}>PLAY</button>}
            </div>
            <div style={{ fontSize: "1.5rem", color: "#27ae60", fontWeight: "bold" }}>
                {option && <h1>Lucky Number → <span>{lucknum}</span></h1>}
            </div>
            {lucknum !== null && (
                <div style={{ fontSize: "1.5rem", marginTop: "20px" }}>
                    {isWon() ? (
                        <h1 style={{ color: "#2ecc71" }}>🎉 Congratulations! You Won 🎉</h1>
                    ) : (
                        <h1 style={{ color: "#e74c3c" }}>😩 Oops! Better Luck Next Time 😩</h1>
                    )}
                </div>
            )}
        </div>
    );
}

export default Task8;