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
    let h2 = document.createElement('h2');
    h2.textContent = 'Hello, this site was created as an assignment for The Odin Project!'

    infoDiv.appendChild(h2);
    divContent.appendChild(infoDiv);
}

function renderForm(){
    let formButton = document.createElement('button')
    formButton.innerText = 'Add Task';
    formButton.addEventListener(('click'), () =>{
        form();
    })
    divContent.appendChild(formButton)
}

function renderTasks(){
    let taskDiv = document.createElement('div')
    taskDiv.className = 'container';
    taskDiv.setAttribute('id', 'taskDiv')
    divContent.appendChild(taskDiv)

    let arrayOfTasks = render();
    arrayOfTasks.forEach((element)=>{
        display(element);
    })
}


const renderHome = () =>{
    renderTitle();
    renderInfo();
    renderForm();
    renderTasks();
    return divContent;
}

export default renderHome