const display = (taskToDisplay) =>{
    const taskDiv = document.getElementById('taskDiv');
    let auxDiv = document.createElement('div');
    auxDiv.innerText = `${taskToDisplay.title} ${taskToDisplay.description}`
    taskDiv.appendChild(auxDiv);
}

export default display