const saveTask = (task) => {
    localStorage.setItem(task.id, JSON.stringify(task));
}

export default saveTask;