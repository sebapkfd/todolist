import deleteTask from './deleteTask'

const display = (task) =>{
    let taskDiv = document.getElementById('taskDiv');
    let auxDiv = document.createElement('div');
    auxDiv.setAttribute('id', `${task.title}-div`)
    auxDiv.innerText = `${task.title} ${task.description} ${task.date} ${task.priority} ${task.status}`

    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';

    taskDiv.appendChild(auxDiv);
    auxDiv.appendChild(deleteBtn)

    deleteBtn.addEventListener('click', () =>{
        deleteTask(task.title);  
    })
}

export default display