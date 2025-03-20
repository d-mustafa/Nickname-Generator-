// NICKNAME GENERATOR

// Miscellaneous Elements
let nameList = [
    'Sing of Anger',
    'Sin of Envy',
    'Sin of Gluttony',
    'Sin of Greed',
    'Sin of Lust',
    'Sin of Pride',
    'Sin of Sloth',
    'Virtue of Humility',
    'Virtue of Charity',
    'Virtue of Chatity',
    'Virtue of Patience',
    'Virtue of Kindess',
    'Virtue of Diligence',
    'Virtue of Temperance'
];

// HTML Elements
let randNameBtn = document.getElementById('random-name');
let allNamesBtn = document.getElementById('all-names');
let firstNameInput = document.getElementById('first-name');
let lastNameInput = document.getElementById('last-name');
let nameDiv = document.getElementById('nicknames');

randNameBtn.addEventListener('click', randomNickname);
function randomNickname() {
    let rand = Math.floor(Math.random() * 14);
    let nickName = nameList[rand];
    let firstName = firstNameInput.value;
    let lastName = lastNameInput.value;

    nameDiv.innerHTML = '';
    nameDiv.innerHTML += `<p>${firstName} ${lastName}, otherwise known as, <b>The ${nickName}<b></p>`
}

allNamesBtn.addEventListener('click', allNames);
function allNames() {
    let firstName = firstNameInput.value;
    let lastName = lastNameInput.value;

    
    nameDiv.innerHTML = '';
    for(i = 0; i < 13; i++){
        let nickName = nameList[i];
        nameDiv.innerHTML += `<p>${firstName} ${lastName}, otherwise known as, <b>The ${nickName}<b></p>`
    }
}