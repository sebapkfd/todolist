import Task from './task'
import addTask from './addTask'
import date from './date'
import render from './render'

const submit = (editing, defaultStatus = false) =>{
    let titleToAdd = document.getElementById('titleInput').value;
    let descToAdd = document.getElementById('descripInput').value;
    let dateToAdd = date(document.getElementById('dateInput').value);
    let priorityToAdd = document.getElementById('priorityInput').value;
    if(titleToAdd != '' && descToAdd != '' && dateToAdd != '' && priorityToAdd != ''){
        let statusToAdd = editing? defaultStatus : false;
        let taskToAdd = Task(titleToAdd, descToAdd, dateToAdd, priorityToAdd, statusToAdd);
        let tasks = render();
        let alreadyAdded = tasks.find( Element => Element.title == titleToAdd);
        if(alreadyAdded == undefined && editing == false){
            addTask(taskToAdd);
        }
        if(alreadyAdded != undefined && editing == true){
            addTask(taskToAdd);
        }
    }
    location.reload();
}

export default submit