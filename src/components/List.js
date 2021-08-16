import { useState } from "react";
import getTodos from "../methods/getTodos";
import Todo from "./Todo";
import { useSelector } from "react-redux";

const List = () => {
    const list = useSelector(state => state.todo);
    const [filter, setFilter] = useState('All');

    return (list) ? (
        <div id='todolist'>
            <div>
                <button onClick={()=> setFilter('All')}>All</button>
                <button onClick={()=> setFilter('Not Completed')}>Completed</button>
                <button onClick={()=> setFilter('Completed')}>Not Completed</button>
            </div>
            {
                list
                .filter(item => item.status !== filter)
                .map(todo => <Todo todo={todo} key={Math.random()*100}/>)
            }
        </div>
    ) : null;
}

export default List;