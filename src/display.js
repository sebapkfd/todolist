import deleteTask from './deleteTask'
import changeStatus from './changeStatus'
import changeDivStatus from './changeStatusDiv';
import form from './form'

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
    
    if(task.priority == 'Low'){
        priorityDiv.setAttribute('style', 'color: rgb(24, 110, 17)');
    }else if (task.priority == 'Medium'){
        priorityDiv.setAttribute('style', 'color: rgb(231, 197, 4)');
    }else if(task.priority == 'High'){
        priorityDiv.setAttribute('style', 'color: rgb(218, 42, 42)');
    }

    let statusDiv = document.createElement('div');
    statusDiv.setAttribute('id', `${task.title}-statusDiv`);
    statusDiv.className = 'statusDiv';

    if(task.status == true){
        statusDiv.innerText = 'Already done';
        statusDiv.setAttribute('style', 'color: rgb(24, 110, 17)');
    }else if (task.status == false){
        statusDiv.innerText = 'Not done yet';
        statusDiv.setAttribute('style', 'color: rgb(218, 42, 42)');
    }

    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';

    let statusBtn = document.createElement('button');
    statusBtn.innerText = 'Mark as complete';

    let editBtn = document.createElement('button');
    editBtn.innerText = 'Edit';

    taskDiv.appendChild(auxDiv);
    auxDiv.appendChild(titleDiv);
    auxDiv.appendChild(descDiv);
    auxDiv.appendChild(dateDiv);
    auxDiv.appendChild(priorityDiv);
    auxDiv.appendChild(statusDiv);
    auxDiv.appendChild(deleteBtn);
    auxDiv.appendChild(statusBtn);
    auxDiv.appendChild(editBtn);

    deleteBtn.addEventListener('click', () =>{
        deleteTask(task.title);  
    })

    statusBtn.addEventListener('click', () =>{
        changeStatus(task.title);
        changeDivStatus(task.title);
        location.reload();
    })

    editBtn.addEventListener('click', () =>{
        form(task);
    })
}

export default display