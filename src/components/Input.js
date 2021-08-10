import React, { useState } from "react";
import Task from "../methods/task";

const Input = (props) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [priority, setPriority] = useState('');
    const {add} = props;

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = `${localStorage.length}${title}`;
        const task = Task(title, id, description, date, priority);
        add(task);
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor='title'>Title: </label>
            <input type ='text' name='title' required onChange={(e) =>setTitle(e.target.value)} />
            <label htmlFor='description'>Description: </label>
            <textarea type ='text' name='description' onChange={(e) =>setDescription(e.target.value)} />
            <label htmlFor='date'>Date: </label>
            <input type ='date' name='date' required onChange={(e) =>setDate(e.target.value)} />
            <label htmlFor='priority'>Priority: </label>
            <select defaultValue='Low' onChange={(e) =>setPriority(e.target.value)}>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
            <button type='submit'>Ok</button>
        </form>
    )
}

export default Input;