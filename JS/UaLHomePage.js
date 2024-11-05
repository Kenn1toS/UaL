const addButton = document.getElementById('addSearchButton');

addButton.addEventListener('click', function(event) {
    event.preventDefault();
    const links = document.querySelectorAll('.containerHelp a');
    links.forEach(link => {
        if (link.textContent === "Не можу зайти") {
            link.remove(); 
        }
    });
    
    if (addButton.dataset.added) {
        return; 
    }

    addButton.dataset.added = 'true';
    const borderContainerSearch = document.createElement('div');
    borderContainerSearch.className = 'borderContainerSearch';

    const warning = document.createElement('div');
    warning.className = 'warning';
    warning.id ="warningConfirmPassword";

    const newContainer = document.createElement('div');
    newContainer.className = 'containerSearch';

    const newButton = document.createElement('div');
    newButton.className = 'searchButton';
    newButton.textContent = '';

    const newInput = document.createElement('input');
    newInput.className = 'search';
    newInput.type = 'text';
    newInput.id = 'confirmPassword';
    newInput.placeholder = 'повтор паролю';

    borderContainerSearch.appendChild(newContainer);
    newContainer.appendChild(newButton);
    newContainer.appendChild(newInput);
    borderContainerSearch.appendChild(warning);

    document.getElementById('searchContainer').appendChild(borderContainerSearch);
    
    newInput.addEventListener('input', checkConfirmPassword);
});

const searchButtonLogin = document.getElementById('searchButtonLogin');
const searchButtonPassword = document.getElementById('searchButtonPassword');
const enterButton = document.getElementById('Enter'); 
const loginInput = document.getElementById('login');
const passwordInput = document.getElementById('password');
let confirmPasswordInput = null;

function checkLogin() {
    const login = loginInput.value;
    searchButtonLogin.classList.remove('error', 'success');

    if (login.length <= 1) {
        searchButtonLogin.classList.add('error');
        document.getElementById("warningLogin").innerHTML = "занадто короткий";
    } else if (login.length >= 50) {
        searchButtonLogin.classList.add('error');
        document.getElementById("warningLogin").innerHTML = "занадто довгий";
    } else {
        searchButtonLogin.classList.add('success');
        document.getElementById("warningLogin").innerHTML = "";
    }
}

function checkPassword() {
    const password = passwordInput.value;
    searchButtonPassword.classList.remove('error', 'success');

    if (password !== "secret") {
        searchButtonPassword.classList.add('error');
        document.getElementById("warningPassword").innerHTML = "Не підходить";
    } else {
        searchButtonPassword.classList.add('success');
        document.getElementById("warningPassword").innerHTML = "";
    }
}

function checkConfirmPassword() {
    confirmPasswordInput = document.getElementById('confirmPassword');
    if (!confirmPasswordInput) return;

    const confirmPasswordButton = confirmPasswordInput.previousElementSibling;
    confirmPasswordButton.classList.remove('error', 'success');

    if (confirmPasswordInput.value === passwordInput.value) {
        confirmPasswordButton.classList.add('success');
        document.getElementById("warningConfirmPassword").innerHTML = "";
    } else {
        confirmPasswordButton.classList.add('error');
        document.getElementById("warningConfirmPassword").innerHTML = "Пароли не сопівпадають";
    }
}

function validateForm() {
    const isLoginValid = searchButtonLogin.classList.contains('success');
    const isPasswordValid = searchButtonPassword.classList.contains('success');
    const isConfirmPasswordValid = confirmPasswordInput && confirmPasswordInput.previousElementSibling.classList.contains('success');
    
    if (isLoginValid && isPasswordValid && (!confirmPasswordInput || isConfirmPasswordValid)) {
        alert("Все введено правильно!");
        window.location.href = "file:///C:/Users/михаил/Desktop/UaL/HTML/UaLHomePage.html";
    }
}

loginInput.addEventListener('input', checkLogin);
passwordInput.addEventListener('input', checkPassword);
enterButton.addEventListener('click', (event) => {
    event.preventDefault(); 
    validateForm(); 
});