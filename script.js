let addExperience = () => {
    let experienceInput = document.createElement('input');
    experienceInput.type = 'text';
    experienceInput.className = 'form-control experience';
    experienceInput.placeholder = 'Begin with your most recent experience. It\'s okay to show off your achievements';
    experienceInput.required = true;

    let experienceDiv = document.createElement('div');
    experienceDiv.className = 'form-group';
    experienceDiv.appendChild(experienceInput);

    let addButton = document.querySelector('#experienceButton');
    addButton.parentNode.insertBefore(experienceDiv, addButton);
};

let addEducation = () => {
    let edcucationInput = document.createElement('input');
    edcucationInput.type = 'text';
    edcucationInput.className = 'form-control education';
    edcucationInput.id = 'education';
    edcucationInput.placeholder = 'Begain with your most recent education. It\'s okay to brag about your scoors';
    edcucationInput.required = true;
    console.log(edcucationInput);

    let educationDiv = document.createElement('div');
    educationDiv.className = 'form-group';
    educationDiv.appendChild(edcucationInput);

    let addButton = document.querySelector('#educationButton');
    addButton.parentNode.insertBefore(educationDiv, addButton)

}