import Task from './task'
import taskArray from './taskHandler'

const submit = () =>{
    let titleToAdd = document.getElementById('titleInput').value;
    let descToAdd = document.getElementById('descripInput').value;
    let dateToAdd = document.getElementById('dateInput').value;
    let priorityToAdd = document.getElementById('priorityInput').value;
    if(titleToAdd != '' && descToAdd != '' && dateToAdd != '' && priorityToAdd != ''){
        let taskToAdd = Task(titleToAdd, descToAdd, dateToAdd, priorityToAdd);
        taskArray.addTask(taskToAdd)
    }
}

export default submit