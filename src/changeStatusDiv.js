const changeDivStatus = (task) =>{
    let todo = JSON.parse(localStorage[task]);
    let divToChange = document.getElementById(`${task}-statusDiv`);
    if(todo.status == true){
        divToChange.textContent = 'Already done';
        divToChange.setAttribute('style', 'color: rgb(24, 110, 17)');
    }else if (todo.status == false){
        divToChange.textContent = 'Not done yet';
        divToChange.setAttribute('style', 'color: rgb(218, 42, 42)');
    }
}

export default changeDivStatus