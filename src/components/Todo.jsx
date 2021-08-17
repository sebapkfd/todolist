import saveTask from "../methods/saveTask";
import Edit from '../components/Edit';
import dateFormat from "../methods/dateFormat";
import { changeStatus, removeTodo } from "../redux/todoSlice";
import { useDispatch } from "react-redux";
import Details from "./Details";

const Todo = (props) => {
    const {title, id, description, priority, date, status} = props.todo;
    const dispatch = useDispatch();

    const deleteTodo = () => {
        dispatch(removeTodo({id}));
        localStorage.removeItem(id);
    }

    const updateStatus = () => {
        const newStatus = !status;
        const updatedTodo = {...props.todo, status: newStatus};
        dispatch(changeStatus({id, newStatus}));
        saveTask(updatedTodo);
    }
    
    if(props.todo) {
        return (
            <div className={'todo'}>
                <div className={'todo__basic-info'}>
                    <input type='checkbox' checked={status} onChange={() => updateStatus()} />
                    <h2>{title}</h2>
                    <p>{dateFormat(date)}</p>
                </div>
                <div>
                    <button onClick={() => deleteTodo()}>Delete</button>
                    <Edit values={props.todo} />
                    <Details info={{description, priority}} />
                </div>
            </div>
        )
    }
    return null;
}

export default Todo;