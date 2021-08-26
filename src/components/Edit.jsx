import React, { useState } from "react";
import Task from "../methods/task";
import saveTask from "../methods/saveTask";
import { useDispatch } from "react-redux";
import { updateTodo } from '../redux/todoSlice';

const Edit = (props) => {
    const {values, values: {id}} = props;
    const [title, setTitle] = useState(values.title);
    const [date, setDate] = useState(values.date);
    const [priority, setPriority] = useState(values.priority);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const task = Task(title, id, date, priority);
        saveTask(task);
        dispatch(updateTodo(task));
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} className={'edit'}>
            <div>
                <label htmlFor='title'>Title</label>
                <input 
                    type ='text' 
                    name='title' 
                    value={title} 
                    maxLength={15}
                    onChange={(e) =>setTitle(e.target.value)} 
                    required 
                />
            </div>
            <input 
                type ='date' 
                name='date' 
                value={date} 
                onChange={(e) =>setDate(e.target.value)} 
                required 
            />
            <div>
                <label htmlFor='priority'>Priority</label>
                <select value={priority} onChange={(e) =>setPriority(e.target.value)}>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </div>
            <button type='submit'>Ok</button>
        </form>
    )
}

export default Edit;