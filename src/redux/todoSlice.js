import { createSlice } from "@reduxjs/toolkit";
import getTodos from '../methods/getTodos';

const initialState = getTodos();

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo (state, action) {
            state.push(action.payload)
        }

    }
})

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;