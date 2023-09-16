import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns"

const initialState = [
    {id: 1, title: "Learning Redux Toolkit", content: "I have heard good thing."},
    {id: 2, title: "Slices...", content:"Yhe more i say slice, the more i want pizza."}
]

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action){
                state.push(action.payload)
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id : nanoid(),
                        title,
                        content,
                        userId
                    }
                }
            }
        }
    }
})

export default postSlice.reducer

export  const { postAdded } = postSlice.actions
export const selectAllPosts = (state) => state.posts