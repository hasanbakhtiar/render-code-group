import { createSlice } from "@reduxjs/toolkit";
import type { todoType } from "../../types/todos.type";

const initialState: todoType[] = [
    {
        id: Date.now()+1,
        text: "read book"
    },
    {
        id: Date.now()+2,
        text: "learn lesson"
    }
]

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        add: (state, action) => {
            const newTodo: todoType = { id: Date.now(), text: action.payload }
            state.push(newTodo)
        }
    }

})

export default todoSlice.reducer;
export const { add } = todoSlice.actions;