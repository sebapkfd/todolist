import React, { useState } from "react";
import Task from "../methods/task";
import saveTask from "../methods/saveTask";

const Input = (props) => {
    const {values} = props;
    const [title, setTitle] = useState(values.title);
    const [description, setDescription] = useState(values.description);
    const [date, setDate] = useState(values.date);
    const [priority, setPriority] = useState(values.priority);
    const [display, setDisplay] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const task = Task(title, values.id, description, date, priority);
        saveTask(task);
        setDisplay(false);
    }

    const editLabel = (display) ? 'Cancel' : 'Edit';

    return (display) ? (
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
            <button onClick={() => setDisplay(!display)}>{editLabel}</button>
        </form>
    ) : (
        <button onClick={() => setDisplay(!display)}>{editLabel}</button>
    );
}

export default Input;