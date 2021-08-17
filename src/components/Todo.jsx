import saveTask from "../methods/saveTask";
import Edit from '../components/Edit';
import dateFormat from "../methods/dateFormat";
import { changeStatus, removeTodo } from "../redux/todoSlice";
import { useDispatch } from "react-redux";

const Todo = (props) => {
    const {title, id, date, status} = props.todo;
    const dispatch = useDispatch();

    const deleteTodo = () => {
        dispatch(removeTodo({id}));
        localStorage.removeItem(id);
    }

    const updateStatus = () => {
        const newStatus = (status === 'Not Completed') ? 'Completed' : 'Not Completed';
        const updatedTodo = {...props.todo, status: newStatus};
        dispatch(changeStatus({id, newStatus}));
        saveTask(updatedTodo);
    }

    const updateButtonText = (status === 'Not Completed') ? 'Marks as Completed' : 'Mark as Not Completed';
    
    if(props.todo) {
        return (
            <div className={'todo'}>
                <button onClick={() => updateStatus()}>{updateButtonText}</button>
                <h2>{title}</h2>
                <p>{dateFormat(date)}</p>
                <p>Status: {status}</p>
                <button onClick={() => deleteTodo()}>Delete</button>
                <Edit values={props.todo} />
            </div>
        )
    }
    return null;
}

export default Todo;