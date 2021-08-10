import { useState } from "react";
import saveTask from "../methods/saveTask";

const Todo = (props) => {
    const [todo, setTodo] = useState(props.todo);
    const [display, setDisplay] = useState(true);
    const {title, id, description, date, priority, status} = todo;

    const deleteTodo = () => {
        setDisplay(false);
        localStorage.removeItem(id);
    }

    const updateStatus = () => {
        const updatedTodo = (status === 'Not Completed') ? {...todo, status: 'Completed'} : {...todo, status: 'Not Completed'};
        setTodo(updatedTodo);
        saveTask(updatedTodo);
    }

    const updateButtonText = (status === 'Not Completed') ? 'Marks as Complete' : 'Mark as Not Complete';

    
    if(display) {
        return (
            <div className={'todo'}>
                <h2>{title}</h2>
                <p>{description}</p>
                <p>{date}</p>
                <p>Priority: {priority}</p>
                <p>Status: {status}</p>
                <p>ID: {id}</p>
                <button onClick={() => deleteTodo()}>Delete</button>
                <button onClick={() => updateStatus()}>{updateButtonText}</button>
            </div>
        )
    }
    return null;
    
}

export default Todo;