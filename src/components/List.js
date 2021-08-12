import { useState } from "react";
import Todo from "./Todo";

const List = (props) => {
    const {list} = props;
    const [filter, setFilter] = useState('All');

    const filteredList = list.filter(item => item.status === filter)

    return (list) ? (
        <div id='todolist'>
            <div>
                <button onClick={()=> setFilter('All')}>All</button>
                <button onClick={()=> setFilter('Completed')}>Completed</button>
                <button onClick={()=> setFilter('Not Completed')}>Not Completed</button>
            </div>
            {(filter === 'All') ? (
                list.map((todo) => {
                    return <Todo todo={todo} key={Math.random()*100}/>
                })
                ) : (
                    filteredList.map((todo) => {
                        return <Todo todo={todo} key={Math.random()*100}/>
                })
            )}
        </div>
    ) : null;
}

export default List;