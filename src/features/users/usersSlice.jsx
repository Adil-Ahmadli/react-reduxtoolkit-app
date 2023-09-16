import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {id: "0", name: "1"},
    {id: "0", name: "1"},
    {id: "0", name: "1"}
]

const usersSlice =createSlice({
    name: "users",
    initialState,
    reducers:{}
})

export default usersSlice.reducer
export const selectAllUsers = state => state.users