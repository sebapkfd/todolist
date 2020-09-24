import submit from './submit'
import render from './renderTasks'
import display from './display'

const divContent = document.querySelector('.content');

function renderTitle(){
    //maybe on another module
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
    //maybe on another module
    let formDiv = document.createElement('div');
    formDiv.className = 'container';
    formDiv.setAttribute('id', 'formDiv')
    let titleInput = document.createElement('input');
    titleInput.setAttribute('id', 'titleInput')
    let descripInput = document.createElement('input');
    descripInput.setAttribute('id', 'descripInput' )
    let dateInput = document.createElement('input');
    dateInput.setAttribute('id', 'dateInput')
    let priorityInput = document.createElement('input');
    priorityInput.setAttribute('id', 'priorityInput')

    let submitButton = document.createElement('button')
    submitButton.innerText = 'submit'
    submitButton.addEventListener(('click'), () => {
        console.log('submitting');
        submit();
    })

    formDiv.appendChild(titleInput)
    formDiv.appendChild(descripInput)
    formDiv.appendChild(dateInput)
    formDiv.appendChild(priorityInput)
    formDiv.appendChild(submitButton)
    divContent.appendChild(formDiv)

    
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