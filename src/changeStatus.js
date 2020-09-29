const changeStatus = (task) =>{//seems to not work with hard coded todo
    console.log(`Changing status from ${task}`);
    let taskToChange = JSON.parse(localStorage[task]);
    taskToChange.status = !taskToChange.status;
    localStorage.setItem(task, JSON.stringify(taskToChange));
}

export default changeStatus;