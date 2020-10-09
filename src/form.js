import submit from './submit';
import date from './date';

const modal = document.querySelector('.modal');

const form = (editing = false) =>{
    modal.style.display = 'block';

    if(modal.firstChild == null){
        let formDiv = document.createElement('div');
        formDiv.setAttribute('id', 'formDiv');

        let titleLabel = document.createElement('label');
        titleLabel.innerText = 'Title';
        let titleInput = document.createElement('input');
        titleInput.setAttribute('id', 'titleInput');

        let descLabel = document.createElement('label');
        descLabel.innerText = 'Description';
        let descripInput = document.createElement('input');
        descripInput.setAttribute('id', 'descripInput' );

        let dateLabel = document.createElement('label');
        dateLabel.innerText = 'Date';
        let dateInput = document.createElement('input');
        dateInput.setAttribute('id', 'dateInput');
        dateInput.setAttribute('type', 'date');

        let priorityLabel = document.createElement('label');
        priorityLabel.innerText = 'Priority';
        let priorityInput = document.createElement('select');
        priorityInput.setAttribute('id', 'priorityInput');

        let options = ['Low', 'Medium', 'High'];

        options.forEach( (elemnt) =>{
            let option = document.createElement('option');
            option.setAttribute('value', elemnt);
            let optionText = document.createTextNode(elemnt);
            option.appendChild(optionText);
            priorityInput.appendChild(option);
        });

        if(editing != false){
            titleInput.defaultValue = editing.title;
            descripInput.defaultValue = editing.description;
            dateInput.defaultValue = date(editing.date);
            for (let i = 0; i < options.length; i++) {
                if(options[i] == editing.priority){
                    priorityInput.selectedIndex = i;
                }
            }
        }

        let submitButton = document.createElement('button');
        submitButton.innerText = 'Submit';
        submitButton.addEventListener(('click'), () => {
            if(editing == false){
                submit(false);
            }
            else if(editing != false){
                submit(true, editing.status);
            }
            modal.style.display = 'none';
        });
        let cancelButton = document.createElement('button');
        cancelButton.innerText = 'Cancel';
        cancelButton.addEventListener(('click'), () => {
            modal.style.display = 'none';
        });
        modal.appendChild(formDiv);
        formDiv.appendChild(titleLabel);
        formDiv.appendChild(titleInput);
        formDiv.appendChild(descLabel);
        formDiv.appendChild(descripInput);
        formDiv.appendChild(dateLabel);
        formDiv.appendChild(dateInput);
        formDiv.appendChild(priorityLabel);
        formDiv.appendChild(priorityInput);
        formDiv.appendChild(submitButton);
        formDiv.appendChild(cancelButton);
    }
};

export default form;