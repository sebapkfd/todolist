import Todo from "./Todo";

const List = (props) => {
    const {list} = props;

    return (list) ? (
        <div id='todolist'>
            {list.map((todo) => {
                return <Todo todo={todo} key={Math.random()*100}/>
            })}
        </div>
    ) : null;
}

export default List;