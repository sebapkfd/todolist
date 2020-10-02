const changeStatus = (task) =>{
    let taskToChange = JSON.parse(localStorage[task]);
    taskToChange.status = !taskToChange.status;
    localStorage.setItem(task, JSON.stringify(taskToChange));
}

export default changeStatus;