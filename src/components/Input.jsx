import React, { useState } from "react";
import Task from "../methods/task";
import saveTask from "../methods/saveTask";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const Input = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [priority, setPriority] = useState('Low');
    const [display, setDisplay] = useState(false);
    const dispatch = useDispatch();

    const clearInputs = () => {
        setTitle('');
        setDescription('');
        setDate('');
        setPriority('Low');
        setDisplay(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = `${localStorage.length}${title}`;
        const task = Task(title, id, description, date, priority);
        saveTask(task);
        dispatch(addTodo(task));
        clearInputs();
    }
    
    if (display) {
        return (
            <div>
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
                    <button onClick={() => setDisplay(false)} type='reset'>Close</button>
                </form>
            </div>
        )
    }

    return (
        <div>
            <button onClick={() => setDisplay(true)}>Add Todo</button>
        </div>
    )
    
}

export default Input;