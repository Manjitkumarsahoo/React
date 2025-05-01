import { createContext, useContext, useState } from "react";

const CountContext = createContext();

// Wrapper Component
export function CountContextWrapper({ children }) {
    const [count, setCount] = useState(0);

    return (
        <CountContext.Provider value={{ count, setCount }}>
            {children}
        </CountContext.Provider>
    );
}

// Custom Hook for Consuming Context
export function useCount() {
    return useContext(CountContext);
}
