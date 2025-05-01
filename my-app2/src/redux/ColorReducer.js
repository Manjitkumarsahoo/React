//Create Reducer function (Take two Argument  state(initial value),action(type of dispatch))

const initialvalue = "black"

function ColorReducer(state = initialvalue, action) {
    switch (action.type) {
        case "green":
            return "#3dfc03"
        case "blue":
            return "#035efc"
        case "red":
            return "#fc3503"
        case "yellow":
            return "#fcfc03"
        case "reset":
            return "black"
        default:
            return state
    }
}
export default ColorReducer;