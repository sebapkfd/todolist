const Task = (title, description, date, priority, status = false) =>{
    return {
        title, 
        description,
        date,
        priority,
        status
    };
};

export default Task;