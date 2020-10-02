import Task from './task'

const render = () =>{
    let elements = []
    Object.keys(localStorage).forEach(function(key){
        let element = JSON.parse(localStorage.getItem(key));
        let todoToAdd = Task(element.title, element.description, element.date, element.priority, element.status)
        elements.push(todoToAdd)
    })
    return elements
}

export default render