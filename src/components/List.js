import Todo from "./Todo";

const List = (props) => {
    const {list} = props;

    return (list) ? (
        <div id='todolist'>
            {list.map((todo, index) => {
                return <Todo todo={todo} key={`${todo.title}${index}`}/>
            })}
        </div>
    ) : null;
}

export default List;