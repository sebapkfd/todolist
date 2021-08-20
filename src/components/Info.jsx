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
    
    return (
        <div className={'info'}>
            <input type='checkbox' id='checkbox' checked={status} onChange={() => updateStatus()} />
            <p>{title}</p>
            <p>{dateFormat(date)}</p>
            <p>{priority} priority</p>
        </div>
    )

}

export default Info;