import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            const users = await response.json()
            return users
        } catch (error) {
            throw new Error(error)
        }
    }
)
const userSlice = createSlice({
    name: "users",
    initialState: {
        allUsers: [],
        status: "idl",
        error : null
    },
    reducers: {
        //Sync action
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchUsers.pending, (state, action) => {
            state.status = "loading.."
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.allUsers = action.payload
            state.status = "success"
        })
        .addCase(fetchUsers.rejected, (state, action) => {
            state.error = action.error
            state.status = "error"
        })
    }
})

export const { } = userSlice.actions
export const userReducer = userSlice.reducer