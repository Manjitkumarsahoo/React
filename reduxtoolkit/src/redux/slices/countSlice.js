import { createSlice } from "@reduxjs/toolkit"

const countSlice = createSlice({
    name: "counter",                      //name of the slice for unique identification
    initialState: 0,                      // value of the state initially
    reducers: {
        //create all the action inside
        increment: (state,action) => {           //type-increment Action
            return state + action.payload
        },
        decrement: (state,action) => {           //type decrement Action
            return state - action.payload
        }
    }
})

//export all the action to use in dispatch
export const {increment,decrement} = countSlice.actions

//export const countReducer to connect in store
export const countReducer = countSlice.reducer