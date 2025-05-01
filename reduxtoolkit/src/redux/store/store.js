import { configureStore } from "@reduxjs/toolkit"
import { countReducer } from "../slices/countSlice";
import { colorReducer } from "../slices/colorSlice";
import { userReducer } from "../slices/asynSlice";

const store = configureStore({
    reducer: {
        //Combine all the reducer with the key value pair
        count: countReducer,
        color:colorReducer,
        users:userReducer,
    }
})

//Exporing the store to connect in Provider function
export default store;
