//Create Reducer function (Take two Argument  state(initial value),action(type of dispatch))

const initialvalue = 0;
function CountReducer(state = initialvalue, action) {
    switch (action.type) {
        case "inc":
            return state + action.payload
        case "dec":
            return state - action.payload
        case "reset":
            return 0
        default:
            return state
    }
}

export default CountReducer;