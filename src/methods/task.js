const Task = (title, id, date, priority ) =>{
    return {
        title,
        id,
        date,
        priority,
        status: false
    };
};

export default Task;