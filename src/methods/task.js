const Task = (title, id, description, date, priority ) =>{
    return {
        title,
        id,
        description,
        date,
        priority,
        status: false
    };
};

export default Task;