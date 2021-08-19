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
    const editLabel = (showEdit) ? 'Cancel' : 'Edit';

    return (
        <div className={'todo'}>
            <Info todo={todo}/>
            <div className={'options'}>
                <button onClick={() => deleteTodo()}>Delete</button>
                <button onClick={() => setShowEdit(!showEdit)}>{editLabel}</button>
            </div>
            {edit}
        </div>
    )
}

export default Todo;