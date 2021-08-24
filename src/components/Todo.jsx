import Edit from "./Edit";
import { useDispatch } from "react-redux";
import { removeTodo } from "../redux/todoSlice";
import { useState } from "react";
import Info from "./Info";

const Todo = (props) => {
    const {todo, todo: {id}} = props;
    const [showEdit, setShowEdit] = useState(false);
    const dispatch = useDispatch();

    const deleteTodo = () => {
        dispatch(removeTodo({id}));
        localStorage.removeItem(id);
    }

    const edit = (showEdit) ? <Edit values={todo} /> : null;
    const editLabel = (showEdit) ? 'Cancel' : <span className="material-icons" id="edit-logo">mode_edit</span>;

    return (
        <div className={'todo'}>
            <Info todo={todo}/>
            <div className={'options'}>
                <button onClick={() => deleteTodo()} className='todo__button'>
                    <span className="material-icons" id="delete-icon">delete</span>
                </button>
                <button onClick={() => setShowEdit(!showEdit)} className='todo__button'>{editLabel}</button>
            </div>
            {edit}
        </div>
    )
}

export default Todo;