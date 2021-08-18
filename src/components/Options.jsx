import Edit from "./Edit";
import Details from "./Details";
import { useDispatch } from "react-redux";
import { removeTodo } from "../redux/todoSlice";

const Options = (props) => {
    const {id, description, priority} = props.todo;
    const dispatch = useDispatch();

    const deleteTodo = () => {
        dispatch(removeTodo({id}));
        localStorage.removeItem(id);
    }

    return (
        <div>
            <button onClick={() => deleteTodo()}>Delete</button>
            <Edit values={props.todo} />
            <Details info={{description, priority}} />
        </div>
    )
}

export default Options;