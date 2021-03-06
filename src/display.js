import deleteTask from './deleteTask';
import changeStatus from './changeStatus';
import changeDivStatus from './changeStatusDiv';
import form from './form';

const display = (task) =>{
    let taskDiv = document.getElementById('taskDiv');
    let auxDiv = document.createElement('div');
    auxDiv.className = 'task-container';
    auxDiv.setAttribute('id', `${task.title}-div`);

    let titleDiv = document.createElement('div');
    titleDiv.className = 'task-titleDiv';
    titleDiv.setAttribute('id', `${task.title}-titleDiv`);
    titleDiv.innerText = `${task.title}`;

    let descDiv = document.createElement('div');
    descDiv.className = 'task-descDiv';
    descDiv.setAttribute('id', `${task.title}-descDiv`);
    descDiv.innerText = `${task.description}`;

    let dateDiv = document.createElement('div');
    dateDiv.className = 'task-dateDiv';
    dateDiv.setAttribute('id', `${task.title}-dateDiv`);
    dateDiv.innerText = `${task.date}`;

    let priorityDiv = document.createElement('div');
    priorityDiv.className = 'task-priorityDiv';
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


    let buttonsDiv = document.createElement('div');
    buttonsDiv.setAttribute('id', `${task.title}-buttonsDiv`);
    buttonsDiv.className = 'buttonsDiv';

    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'taskBtn';

    let statusBtn = document.createElement('button');
    statusBtn.innerText = 'Mark as complete';
    statusbar.className = 'taskBtn';

    let editBtn = document.createElement('button');
    editBtn.innerText = 'Edit';
    editBtn.className = 'taskBtn';

    taskDiv.appendChild(auxDiv);
    auxDiv.appendChild(titleDiv);
    auxDiv.appendChild(descDiv);
    auxDiv.appendChild(dateDiv);
    auxDiv.appendChild(priorityDiv);
    auxDiv.appendChild(statusDiv);
    auxDiv.appendChild(buttonsDiv);
    buttonsDiv.appendChild(deleteBtn);
    buttonsDiv.appendChild(statusBtn);
    buttonsDiv.appendChild(editBtn);

    deleteBtn.addEventListener('click', () =>{
        deleteTask(task.title);  
    });

    statusBtn.addEventListener('click', () =>{
        changeStatus(task.title);
        changeDivStatus(task.title);
        location.reload();
    });

    editBtn.addEventListener('click', () =>{
        form(task);
    });
};

export default display;