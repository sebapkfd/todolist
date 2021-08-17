import { createSlice } from "@reduxjs/toolkit";
import getTodos from '../methods/getTodos';

const initialState = getTodos();

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo(state, action) {
            state.push(action.payload)
        },
        changeStatus(state, action) {
            const {id, newStatus} = action.payload
            const itemToChange = state.find(item => item.id === id)
            if (itemToChange) {
                itemToChange.status = newStatus
            }
        },
        removeTodo(state, action) {
            const { id } = action.payload
            const itemToDelete = state.find(item => item.id === id)
            if (itemToDelete) {
                const indexToDelete = state.indexOf(itemToDelete)
                state.splice(indexToDelete, 1)
            }
        },
        updateTodo(state, action) {
            const { id, title, description, date, priority } = action.payload
            const itemToUpdate = state.find(item => item.id === id)
            if (itemToUpdate) {
                itemToUpdate.title = title
                itemToUpdate.description = description
                itemToUpdate.date = date
                itemToUpdate.priority = priority
            }

        }
    }
})

export const { addTodo, changeStatus, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;