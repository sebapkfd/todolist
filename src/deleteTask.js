const deleteTask = (taskTitle) =>{
    console.log(`Deleting ${taskTitle}`);
    let taskDiv = document.getElementById('taskDiv');
    localStorage.removeItem(taskTitle);
    let divToDelete = document.getElementById(`${taskTitle}-div`)
    taskDiv.removeChild(divToDelete)//should be on a module 
}

export default deleteTask