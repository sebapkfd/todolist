import Edit from "./Edit";
import Details from "./Details";
import { useDispatch } from "react-redux";
import { removeTodo } from "../redux/todoSlice";
import { useState } from "react";

const Options = (props) => {
    const {id, description, priority} = props.todo;
    const [showEdit, setShowEdit] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const dispatch = useDispatch();

    const deleteTodo = () => {
        dispatch(removeTodo({id}));
        localStorage.removeItem(id);
    }

    const edit = (showEdit) ? <Edit values={props.todo} /> : null;
    const details = (showDetails) ? <Details info={{description, priority}} /> : null;
    const editLabel = (showEdit) ? 'Close' : 'Edit';
    const detailsLabel = (showDetails) ? 'Close' : 'Details';

    return (
        <div>
            <button onClick={() => deleteTodo()}>Delete</button>
            <button onClick={() => setShowEdit(!showEdit)}>{editLabel}</button>
            <button onClick={() => setShowDetails(!showDetails)}>{detailsLabel}</button>
            <div>
                {edit}
                {details}
            </div>
        </div>
    )
}

export default Options;