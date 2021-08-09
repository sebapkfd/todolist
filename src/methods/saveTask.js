const saveTask = (task) => {
    localStorage.setItem(`${localStorage.length}${task.title}`, JSON.stringify(task));

}

export default saveTask;