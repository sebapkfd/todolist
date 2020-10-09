const addTask = (task) =>{
    localStorage.setItem(`${task.title}`, JSON.stringify(task));
};

export default addTask;