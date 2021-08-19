import Edit from "./Edit";
import { useDispatch } from "react-redux";
import { removeTodo } from "../redux/todoSlice";
import { useState } from "react";
import Info from "./Info";

const Todo = (props) => {
    const {id} = props.todo;
    const [showEdit, setShowEdit] = useState(false);
    const dispatch = useDispatch();

    const deleteTodo = () => {
        dispatch(removeTodo({id}));
        localStorage.removeItem(id);
    }

    const edit = (showEdit) ? <Edit values={props.todo} /> : null;
    const editLabel = (showEdit) ? 'Cancel' : 'Edit';

    return (
        <div className={'todo'}>
            <Info todo={props.todo}/>
            <div className={'options'}>
                <button onClick={() => deleteTodo()}>Delete</button>
                <button onClick={() => setShowEdit(!showEdit)}>{editLabel}</button>
            </div>
            {edit}
        </div>
    )
}

export default Todo;