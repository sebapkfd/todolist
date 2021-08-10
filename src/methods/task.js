const Task = (title, id, description, date, priority ) =>{
    return {
        title,
        id,
        description,
        date,
        priority,
        status: 'Not completed'
    };
};

export default Task;