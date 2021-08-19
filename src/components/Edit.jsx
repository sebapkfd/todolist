import React, { useState } from "react";
import Task from "../methods/task";
import saveTask from "../methods/saveTask";
import { useDispatch } from "react-redux";
import { updateTodo } from '../redux/todoSlice';

const Edit = (props) => {
    const {values} = props;
    const [title, setTitle] = useState(values.title);
    const [description, setDescription] = useState(values.description);
    const [date, setDate] = useState(values.date);
    const [priority, setPriority] = useState(values.priority);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const task = Task(title, values.id, description, date, priority);
        saveTask(task);
        dispatch(updateTodo(task));
    }

    return (
        <div className='edit'>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor='title'>Title: </label>
                <input 
                    type ='text' 
                    name='title' 
                    value={title} 
                    required 
                    maxLength={15}
                    onChange={(e) =>setTitle(e.target.value)} 
                />
                <label htmlFor='description'>Description: </label>
                <textarea 
                    type ='text' 
                    name='description' 
                    value={description} 
                    maxLength={100}
                    onChange={(e) =>setDescription(e.target.value)} 
                />
                <label htmlFor='date'>Date: </label>
                <input 
                    type ='date' 
                    name='date' 
                    value={date} 
                    required
                    onChange={(e) =>setDate(e.target.value)} 
                />
                <label htmlFor='priority'>Priority: </label>
                <select value={priority} onChange={(e) =>setPriority(e.target.value)}>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
                <button type='submit'>Ok</button>
            </form>
        </div>
    )
}

export default Edit;