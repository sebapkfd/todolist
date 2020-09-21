import Task from './task'
import taskArray from './taskHandler'

function addTask(title, description, date, priority){
    console.log(title, description, date, priority);
    let taskToAdd = new Task(title, description, date, priority);
    taskArray.push(taskToAdd);
}

export {
    addTask
}