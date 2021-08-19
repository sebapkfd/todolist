import saveTask from "../methods/saveTask";
import dateFormat from "../methods/dateFormat";
import { changeStatus } from "../redux/todoSlice";
import { useDispatch } from "react-redux";

const Info = (props) => {
    const {title, id, date, status} = props.todo;
    const dispatch = useDispatch();

    const updateStatus = () => {
        const newStatus = !status;
        const updatedTodo = {...props.todo, status: newStatus};
        dispatch(changeStatus({id, newStatus}));
        saveTask(updatedTodo);
    }
    
    if(props.todo) {
        return (
            <div className={'info'}>
                <input type='checkbox' checked={status} onChange={() => updateStatus()} />
                <h2>{title}</h2>
                <p>{dateFormat(date)}</p>
            </div>
        )
    }
    return null;

}

export default Info;