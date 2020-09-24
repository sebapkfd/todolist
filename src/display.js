import deleteTask from './deleteTask'

const display = (taskToDisplay) =>{
    let taskDiv = document.getElementById('taskDiv');
    let auxDiv = document.createElement('div');
    auxDiv.setAttribute('id', `${taskToDisplay.title}-div`)
    auxDiv.innerText = `${taskToDisplay.title}`

    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';

    taskDiv.appendChild(auxDiv);
    auxDiv.appendChild(deleteBtn)

    deleteBtn.addEventListener('click', () =>{
        deleteTask(taskToDisplay.title);  
    })
}

export default display