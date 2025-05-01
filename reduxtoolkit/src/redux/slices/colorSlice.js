import { createSlice } from "@reduxjs/toolkit"

const colorSlice = createSlice({
    name: "color",
    initialState: "black",
    reducers: {
        green: (state, action) => {
            return state = action.payload
        },
        blue: (state, action) => {
            return state = action.payload
        },
        red: (state, action) => {
            return state = action.payload
        },
        yellow: (state, action) => {
            return state = action.payload
        },
    }
})

export const { green, blue, red, yellow } = colorSlice.actions

export const colorReducer = colorSlice.reducer