import React, { useState } from "react";
import Task from "../methods/task";

const Input = (props) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [priority, setPriority] = useState('');
    const {add} = props

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = `${localStorage.length}${title}`
        const task = Task(title, id, description, date, priority);
        add(task);
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