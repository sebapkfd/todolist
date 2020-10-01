import render from './renderTasks'
import display from './display'
import form from './form'

const divContent = document.querySelector('.content');

function renderTitle(){
    let titleDiv = document.createElement('div');
    titleDiv.className = 'container';
    let h1 = document.createElement('h1');
    h1.textContent = 'Home';

    titleDiv.appendChild(h1);
    divContent.appendChild(titleDiv);
}

function renderInfo(){
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
        renderTasks();
    })

    doneBtn.addEventListener('click', ()=>{
        divContent.removeChild(divContent.lastChild);
        renderFiltered(true);
    })

    notDoneBtn.addEventListener('click', ()=>{
        divContent.removeChild(divContent.lastChild);
        renderFiltered(false);
    })
    
    formButton.addEventListener(('click'), () =>{
        form();
    })
}

function renderTasks(){//
    let taskDiv = document.createElement('div')
    taskDiv.className = 'container';
    taskDiv.setAttribute('id', 'taskDiv')
    divContent.appendChild(taskDiv)

    let arrayOfTasks = render();
    console.log(arrayOfTasks);
    arrayOfTasks.forEach((element)=>{
        display(element);
    })
}

function renderFiltered(filterStatus){
    let taskDiv = document.createElement('div')
    taskDiv.className = 'container';
    taskDiv.setAttribute('id', 'taskDiv')
    divContent.appendChild(taskDiv)
    let arrayOfTasks = render();
    let tasksCompleted = [];
    if(filterStatus){
        tasksCompleted = arrayOfTasks.filter(task =>task.status == true)
    }else if (!filterStatus){
        tasksCompleted = arrayOfTasks.filter(task =>task.status == false)
    }
    tasksCompleted.forEach((element)=>{
        display(element)
    })
}



const renderHome = () =>{
    renderTitle();
    renderInfo();
    renderTasks();
    return divContent;
}

export default renderHome