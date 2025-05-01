import { createContext, useReducer, useContext } from "react";

// Create Context
const PeopleContext = createContext();

// Reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case "incStd": return { ...state, students: state.students + 1 }
        case "decStd": return { ...state, students: state.students - 1 }
        case "incTrnr": return { ...state, trainers: state.trainers + 1 }
        case "decTrnr": return { ...state, trainers: state.trainers - 1 }
        default: return state
    }
};

//initialstate
const initialstate = { students: 0, trainers: 0 }

// Context Provider Component
export function PeopleCountWrapper({ children }) {
    const [state, dispatch] = useReducer(reducer, initialstate);

    return (
        <PeopleContext.Provider value={{ state, dispatch }}>
            {children}
        </PeopleContext.Provider>
    );
}

// Custom Hook to use the context
export function usePeopleCount() {
    return useContext(PeopleContext);
}
