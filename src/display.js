import deleteTask from './deleteTask'

const display = (task) =>{
    let taskDiv = document.getElementById('taskDiv');
    let auxDiv = document.createElement('div');
    auxDiv.setAttribute('id', `${task.title}-div`)

    let titleDiv = document.createElement('div');
    titleDiv.setAttribute('id', `${task.title}-titleDiv`);
    titleDiv.innerText = `${task.title}`;

    let descDiv = document.createElement('div');
    descDiv.setAttribute('id', `${task.title}-descDiv`);
    descDiv.innerText = `${task.description}`;

    let dateDiv = document.createElement('div');
    dateDiv.setAttribute('id', `${task.title}-dateDiv`);
    dateDiv.innerText = `${task.date}`;

    let priorityDiv = document.createElement('div');
    priorityDiv.setAttribute('id', `${task.title}-priorityDiv`);
    priorityDiv.innerText = `${task.priority}`;

    let statusDiv = document.createElement('div');
    statusDiv.setAttribute('id', `${task.title}-statusDiv`);
    statusDiv.innerText = `${task.status}`;

    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';

    let statusBtn = document.createElement('button');
    statusBtn.innerText = 'Mark as complete';

    taskDiv.appendChild(auxDiv);
    auxDiv.appendChild(titleDiv);
    auxDiv.appendChild(descDiv);
    auxDiv.appendChild(dateDiv);
    auxDiv.appendChild(priorityDiv);
    auxDiv.appendChild(statusDiv);
    auxDiv.appendChild(deleteBtn);
    auxDiv.appendChild(statusBtn);

    deleteBtn.addEventListener('click', () =>{
        deleteTask(task.title);  
    })

    statusBtn.addEventListener('click', ()=>{
        console.log(task.title);
    })
}

export default display