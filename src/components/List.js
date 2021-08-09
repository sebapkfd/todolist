import Todo from "./Todo";
import getTodos from "../methods/getTodos";

const List = () => {

    const todos = (localStorage.length > 0) ? getTodos() : null;

    return (todos) ? (
        <div>
            {todos.map((todo, index) => {
                return <Todo todo={todo} key={`${todo.title}${index}`}/>
            })}
        </div>
    ) : null;
}

export default List;