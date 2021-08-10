const Task = (title, description, date, priority, status = false) =>{
    return {
        title,
        id,
        description,
        date,
        priority,
        status
    };
};

export default Task;