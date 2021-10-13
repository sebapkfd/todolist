import saveTask from "../methods/saveTask";
import dateFormat from "../methods/dateFormat";
import { changeStatus } from "../redux/todoSlice";
import { useDispatch } from "react-redux";

const Info = ({todo, todo : { title, id, date, priority, status }}) => {
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
            <p className={'todo__title'}>{title}</p>
            <p>{dateFormat(date)}</p>
            <p>{priority} priority</p>
        </div>
    )

}

export default Info;