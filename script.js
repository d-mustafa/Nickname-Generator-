// NICKNAME GENERATOR

// Miscellaneous Elements
let nameList = [ // The seven deadly sins and seven heavenly virtues are set as the starter nicknames
    'The Sin of Anger',
    'The Sin of Envy',
    'The Sin of Gluttony',
    'The Sin of Greed',
    'The Sin of Lust',
    'The Sin of Pride',
    'The Sin of Sloth',
    'The Virtue of Humility',
    'The Virtue of Charity',
    'The Virtue of Chatity',
    'The Virtue of Patience',
    'The Virtue of Kindess',
    'The Virtue of Diligence',
    'The Virtue of Temperance'
];

// HTML Elements
let randNameBtn = document.getElementById('random-name');
let allNamesBtn = document.getElementById('all-names');
let firstNameInput = document.getElementById('first-name');
let lastNameInput = document.getElementById('last-name');
let nameDiv = document.getElementById('nicknames');

let addNameBtn = document.getElementById('add-name');
let removeNameBtn = document.getElementById('remove-name');
let addOrRemoveInput = document.getElementById('add-or-remove');
let validationPara = document.getElementById('check-validation');

randNameBtn.addEventListener('click', randomNickname);
function randomNickname() {
    let rand = Math.floor(Math.random() * 14);
    let nickName = nameList[rand];
    let firstName = firstNameInput.value;
    let lastName = lastNameInput.value;

    nameDiv.innerHTML = '';
    nameDiv.innerHTML += `<p>${firstName} ${lastName}, otherwise known as, <b>${nickName}<b></p>`
}

allNamesBtn.addEventListener('click', allNames);
function allNames() {
    let firstName = firstNameInput.value;
    let lastName = lastNameInput.value;

    
    nameDiv.innerHTML = '';
    for(i = 0; i < nameList.length; i++){
        let nickName = nameList[i];
        nameDiv.innerHTML += `<p>${firstName} ${lastName}, otherwise known as, <b>${nickName}<b></p>`
    }
}

addNameBtn.addEventListener('click' , addName)
function addName() {
    let firstName = firstNameInput.value;
    let lastName = lastNameInput.value;
    let userInput = addOrRemoveInput.value;

    for(let i = 0; i < nameList.length; i++) {
        if (userInput == nameList[i]) { // searches for if the name already exists to avoid duplicates
            validationPara.innerHTML = "Nickname Already Exists!";
            validationPara.style.color = "blue"
            return;
        }
    }
    if (userInput != '' && userInput != ' ' && userInput != null){ // if the name isint blank or null, add the name to the nameList and display it in the nameDiv
        nameList[nameList.length] = userInput;
        validationPara.innerHTML = "Nickname successfully added!";
        validationPara.style.color = "green"
        
        nameDiv.innerHTML = '';
        nameDiv.innerHTML += `<p>${firstName} ${lastName}, otherwise known as, <b>${userInput}<b></p>`;
    } else {  // if the name is blank or null, dont change anything
        validationPara.innerHTML = "Invalid Nickname.";
        validationPara.style.color = "red"
    }
}

removeNameBtn.addEventListener('click' , removeName)
function removeName() {
    let userInput = addOrRemoveInput.value;
    let newArray = [];
    let inputFound = false;
    let index = 0;
    for(let i = 0; i < nameList.length; i++) {
        if (userInput != nameList[i]) { // if the name isnt in the namelist, then add it to the new array
            newArray[index] = nameList[i];
            index++;
        } else {
            inputFound = true;
        }
    }
    if (inputFound) { // if the name was found, make the nameList equal the newArray and reset the nameDiv
        nameList = newArray;
        nameDiv.innerHTML = '';
        validationPara.innerHTML = "Nickname successfully removed!";
        validationPara.style.color = "green"
    } else { // if the name was never found, dont change anything
        validationPara.innerHTML = "No nickname detected."
        validationPara.style.color = "red"
    }

}
