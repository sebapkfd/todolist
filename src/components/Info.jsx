import saveTask from "../methods/saveTask";
import dateFormat from "../methods/dateFormat";
import { changeStatus } from "../redux/todoSlice";
import { useDispatch } from "react-redux";

const Info = (props) => {
    const {todo, todo: {title, id, date, priority, status}} = props;
    const dispatch = useDispatch();

    const updateStatus = () => {
        const newStatus = !status;
        const updatedTodo = {...todo, status: newStatus};
        dispatch(changeStatus({id, newStatus}));
        saveTask(updatedTodo);
    }
    
    if(props.todo) {
        return (
            <div className={'info'}>
                <input type='checkbox' checked={status} onChange={() => updateStatus()} />
                <h2>{title}</h2>
                <p>{dateFormat(date)}</p>
                <p>{priority} priority</p>
            </div>
        )
    }
    return null;

}

export default Info;