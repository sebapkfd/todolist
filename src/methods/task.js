const Task = (values) => {
    const {title, description, date, priority, status} = values;

    return {
        title,
        description,
        date,
        priority,
        status
    }

}

export default Task;