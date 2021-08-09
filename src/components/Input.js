import React, { useState } from "react";
import saveTask from "../methods/saveTask";

const Input = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [priority, setPriority] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const task = {title, description, date, priority, status: false};
        saveTask(task);
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input type ='text' name='title' required onChange={(e) =>setTitle(e.target.value)}/>
            <textarea type ='text' name='description' onChange={(e) =>setDescription(e.target.value)}/>
            <input type ='date' name='date' required onChange={(e) =>setDate(e.target.value)}/>
            <input type ='text' name='priority' required onChange={(e) =>setPriority(e.target.value)}/>
            <button type='submit'>Ok</button>
        </form>
    )
}

export default Input;