//This creates the content for the contact tab

function contactContent() {
    //create HTML elements
    const formContainerDiv = document.createElement('div');
    const myForm = document.createElement('form');
    const ul = document.createElement('ul');
    const nameLI = document.createElement('li');
    const emailLI = document.createElement('li');
    const msgLI = document.createElement('li');
    const btnLI = document.createElement('li');

    //create labels for the above list items
    const nameLabel = document.createElement('label');
    const emailLabel = document.createElement('label');
    const msgLabel = document.createElement('label');

    //set attributes for the labels
    nameLabel.setAttribute('for', 'name');
    emailLabel.setAttribute('for', 'mail');
    msgLabel.setAttribute('for', 'msg');

    //add text nodes to labels
    nameLabel.textContent = "Name:";
    emailLabel.textContent = "E-mail:";
    msgLabel.textContent = "Message:";

    //create input and textarea for the above list items
    let nameInput = document.createElement('input');
    let emailInput = document.createElement('input');
    let msgTextArea = document.createElement('textarea');
    let btn = document.createElement('button');

    //set attributes for the inputs
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('id', 'name');
    nameInput.setAttribute('name', 'guest_name');

    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('id', 'mail');
    emailInput.setAttribute('name', 'guest_email');

    msgTextArea.setAttribute('id', 'msg');
    msgTextArea.setAttribute('name', 'user_message');
    msgTextArea.setAttribute('placeholder', 'Write your message...');

    btn.textContent = "Send";
    btn.setAttribute('type', 'submit');

    //add class and id to elements
    formContainerDiv.classList.add('form-container');
    myForm.setAttribute('id', 'contact-form');
    btnLI.classList.add('button');

    //append the elements
    nameLI.appendChild(nameLabel);
    nameLI.appendChild(nameInput);

    emailLI.appendChild(emailLabel);
    emailLI.appendChild(emailInput);

    msgLI.appendChild(msgLabel);
    msgLI.appendChild(msgTextArea);

    btnLI.appendChild(btn);

    ul.appendChild(nameLI);
    ul.appendChild(emailLI);
    ul.appendChild(msgLI);
    ul.appendChild(btnLI);

    myForm.appendChild(ul);
    formContainerDiv.appendChild(myForm);

    return formContainerDiv;
}

export { contactContent };