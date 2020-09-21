import Task from './task'

const TaskList = () =>{
    const addTask = (task) =>{
        localStorage.setItem(`${task.title}`, JSON.stringify(task));
    };

    const deleteTask = () => console.log('To be Added');
    return { addTask, deleteTask }
}

let taskArray = TaskList();
taskArray.addTask(Task('Complete TOP', 'xd', 'tomorrow', 'High'))

export default taskArray