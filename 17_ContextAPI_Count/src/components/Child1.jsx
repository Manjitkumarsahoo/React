 import { useCount } from "../context/CountContext";  

export function Child1() {
    const { count, setCount } = useCount(); 

    return (
        <>
            <h2>Count is: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <button onClick={() => setCount(count - 1)}>Decrement Count</button>
        </>
    );
}
