import submit from './submit'

const divContent = document.querySelector('.content');

const modal = document.querySelector('.modal')

const form = () =>{
    modal.style.display = 'block';

    if(modal.firstChild == null){
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
    submitButton.innerText = 'Submit'
    submitButton.addEventListener(('click'), () => {
        console.log('submitting');
        submit();
        modal.style.display = 'none';
    })

    let cancelButton = document.createElement('button')
    cancelButton.innerText = 'Cancel'
    cancelButton.addEventListener(('click'), () => {
        modal.style.display = 'none';
    })

    modal.appendChild(formDiv)
    formDiv.appendChild(titleInput)
    formDiv.appendChild(descripInput)
    formDiv.appendChild(dateInput)
    formDiv.appendChild(priorityInput)
    formDiv.appendChild(submitButton)
    formDiv.appendChild(cancelButton)
    }

    
}

export default form