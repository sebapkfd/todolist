const Task = (title, id, description, date, priority ) =>{
    return {
        title,
        id,
        description,
        date,
        priority,
        status: 'Not Completed'
    };
};

export default Task;