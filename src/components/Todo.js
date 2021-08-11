import { useState } from "react";
import saveTask from "../methods/saveTask";
import Edit from '../components/Edit'
import dateFormat from "../methods/dateFormat";

const Todo = (props) => {
    const [todo, setTodo] = useState(props.todo);
    const [display, setDisplay] = useState(true);
    const [edit, setEdit] = useState(false);
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

    const editInput = (edit) ? <Edit values={todo} updateTodo={setTodo}/> : null;

    const updateButtonText = (status === 'Not Completed') ? 'Marks as Complete' : 'Mark as Not Complete';
    
    if(display) {
        return (
            <div className={'todo'}>
                <h2>{title}</h2>
                <p>{description}</p>
                <p>{dateFormat(date)}</p>
                <p>Priority: {priority}</p>
                <p>Status: {status}</p>
                <button onClick={() => deleteTodo()}>Delete</button>
                <button onClick={() => updateStatus()}>{updateButtonText}</button>
                <button onClick={() => setEdit(!edit)}>Edit</button>
                {editInput}
            </div>
        )
    }
    return null;
    
}

export default Todo;