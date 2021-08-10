import { useState } from "react";

const Todo = (props) => {
    const {title, id, description, date, priority, status} = props.todo;
    const [display, setDisplay] = useState(true);

    const deleteTodo = () => {
        setDisplay(false);
        localStorage.removeItem(id);
    }

    
    if(display) {
        return (
            <div className={'todo'}>
                <h2>{title}</h2>
                <p>{description}</p>
                <p>{date}</p>
                <p>{priority}</p>
                <p>{status}</p>
                <p>ID: {id}</p>
                <button onClick={() => deleteTodo()}>Delete</button>
            </div>
        )
    }
    return null;
    
}

export default Todo;