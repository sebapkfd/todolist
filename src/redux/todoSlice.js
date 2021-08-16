import { createSlice } from "@reduxjs/toolkit";
import getTodos from '../methods/getTodos';

const initialState = getTodos();

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo (state, action) {
            state.push(action.payload)
        },
        changeStatus (state, action) {
            const {id, newStatus} = action.payload
            const itemToChange = state.find(item => item.id === id)
            if (itemToChange) {
                itemToChange.status = newStatus
            }
        }
    }
})

export const { addTodo, changeStatus } = todoSlice.actions;

export default todoSlice.reducer;