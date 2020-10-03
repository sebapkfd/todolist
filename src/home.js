import form from './form'
import filterTask from './filterTask'

const divContent = document.querySelector('.content');

function renderTitle(){
    let titleDiv = document.createElement('div');
    titleDiv.className = 'container';
    let h1 = document.createElement('h1');
    h1.textContent = 'To Do List';

    titleDiv.appendChild(h1);
    divContent.appendChild(titleDiv);
}

function renderProjectsInfo(){
    let pjDiv = document.createElement('div');
    pjDiv.className = 'container';
    pjDiv.setAttribute('id', 'pjDiv');

    let h2 = document.createElement('h2');
    h2.textContent = 'Projects';

    let addProject = document.createElement('button');
    addProject.innerText = 'Add Project';

    let deleteProject = document.createElement('button');
    deleteProject.innerText = 'Delete Project';

    pjDiv.appendChild(h2);
    pjDiv.appendChild(addProject);
    pjDiv.appendChild(deleteProject);

    
    divContent.appendChild(pjDiv);
}

function renderTasksInfo(){
    let infoDiv = document.createElement('div');
    infoDiv.className = 'container';
    infoDiv.setAttribute('id', 'infoDiv')

    let allBtn = document.createElement('button');
    allBtn.innerText = 'All';

    let doneBtn = document.createElement('button');
    doneBtn.innerText = 'Completed';

    let notDoneBtn = document.createElement('button');
    notDoneBtn.innerText = 'Not completed';

    let formButton = document.createElement('button')
    formButton.innerText = 'Add Task';

    infoDiv.appendChild(allBtn);
    infoDiv.appendChild(doneBtn);
    infoDiv.appendChild(notDoneBtn);
    infoDiv.appendChild(formButton);
    divContent.append(infoDiv)

    allBtn.addEventListener('click', ()=>{
        divContent.removeChild(divContent.lastChild);
        filterTask(null);
    })

    doneBtn.addEventListener('click', ()=>{
        divContent.removeChild(divContent.lastChild);
        filterTask(true);
    })

    notDoneBtn.addEventListener('click', ()=>{
        divContent.removeChild(divContent.lastChild);
        filterTask(false);
    })
    
    formButton.addEventListener(('click'), () =>{
        form(false);
    })
}

const renderHome = () =>{
    renderTitle();
    renderProjectsInfo();
    renderTasksInfo();
    filterTask();
    return divContent;
}

export default renderHome