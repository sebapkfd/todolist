const Todo = (props) => {
    const {title, description, date, priority, status} = props.todo;

    return (
        <div className={'todo'}>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{date}</p>
            <p>{priority}</p>
            <p>{status}</p>
        </div>
    )
}

export default Todo;