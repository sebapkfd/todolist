import display from './display'
import render from './render'
const divContent = document.querySelector('.content');

const filterTask = (filterStatus) =>{
    let taskDiv = document.createElement('div');
    taskDiv.setAttribute('id', 'taskDiv')
    divContent.appendChild(taskDiv)
    
    let arrayOfTasks = render();
    let tasksCompleted = [];
    if(filterStatus == true){
        tasksCompleted = arrayOfTasks.filter(task =>task.status == true)
    }else if (filterStatus == false){
        tasksCompleted = arrayOfTasks.filter(task =>task.status == false)
    }else if(filterStatus == null){
        tasksCompleted = arrayOfTasks;
    }
    tasksCompleted.forEach((element)=>{
        display(element)
    })
}

export default filterTask