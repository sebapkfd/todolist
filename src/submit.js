import Task from './task'
import addTask from './addTask'
import date from './date'
import render from './renderTasks'

const submit = () =>{
    let titleToAdd = document.getElementById('titleInput').value;
    let descToAdd = document.getElementById('descripInput').value;
    let dateToAdd = date(document.getElementById('dateInput').value);
    let priorityToAdd = document.getElementById('priorityInput').value;
    if(titleToAdd != '' && descToAdd != '' && dateToAdd != '' && priorityToAdd != ''){
        let taskToAdd = Task(titleToAdd, descToAdd, dateToAdd, priorityToAdd, false);
        let tasks = render();
        let alreadyAdded = tasks.find( Element => Element.title == titleToAdd);
        if(alreadyAdded == undefined){
            addTask(taskToAdd)
        }
    }
    location.reload();
}

export default submit