import React, { useState } from "react";
import Task from "../methods/task";
import dateFormat from "../methods/dateFormat";

const Input = (props) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [priority, setPriority] = useState('Low   ');
    const {add} = props;

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = `${localStorage.length}${title}`;
        const task = Task(title, id, description, dateFormat(date), priority);
        add(task);
        setTitle('');
        setDescription('');
        setDate('');
        setPriority('Low');
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor='title'>Title: </label>
            <input type ='text' name='title' value={title} onChange={(e) =>setTitle(e.target.value)} required />
            <label htmlFor='description'>Description: </label>
            <textarea type ='text' name='description' value={description} onChange={(e) =>setDescription(e.target.value)} />
            <label htmlFor='date'>Date: </label>
            <input type ='date' name='date' value={date} onChange={(e) =>setDate(e.target.value)} required/>
            <label htmlFor='priority'>Priority: </label>
            <select value={priority} onChange={(e) =>setPriority(e.target.value)}>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
            <button type='submit'>Ok</button>
        </form>
    )
}

export default Input;