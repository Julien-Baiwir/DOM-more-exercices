let inputField = document.getElementById('firstname');
let displayFirstName = document.getElementById('display-firstname');

inputField.addEventListener('keyup', function() {
    displayFirstName.textContent = inputField.value;
});

// ----------------------

let section = document.getElementById('a-hard-truth');
let ageInput = document.getElementById('age');

ageInput.addEventListener('keyup', function() {

    let age = parseInt(ageInput.value);

    if (age < 18) {
        section.style.visibility = 'hidden';
    } else {
        section.style.visibility = 'visible';  
    }
});

// ----------------------

let passwordInput = document.getElementById('pwd');
let confirmPasswordInput = document.getElementById('pwd-confirm');

function validatePassword() {
    let passwordValue = passwordInput.value;
    let confirmPasswordValue = confirmPasswordInput.value;
    if (passwordValue.length < 6 || passwordValue !== confirmPasswordValue) {
        passwordInput.style.border = '2px solid red';
        confirmPasswordInput.style.border = '2px solid red'; 
    } else {
        passwordInput.style.border = '';
        confirmPasswordInput.style.border = '';
    }
    }

passwordInput.addEventListener('keyup', validatePassword);
confirmPasswordInput.addEventListener('keyup', validatePassword);

// ----------------------

let selectField = document.getElementById('toggle-darkmode');

selectField.addEventListener('change', function() {
    let body = document.body;

    if (selectField.value === 'dark') {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
    } else {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
    }
});

// ----------- faire les bonus -------