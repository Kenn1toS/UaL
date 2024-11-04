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
    const newContainer = document.createElement('div');
    newContainer.className = 'containerSearch';
    const newButton = document.createElement('div');
    newButton.className = 'searchButton';
    newButton.textContent = '';
    const newInput = document.createElement('input');
    newInput.className = 'search';
    newInput.type = 'text';
    newInput.placeholder = 'повтор пароля';

    borderContainerSearch.appendChild(newContainer);
    newContainer.appendChild(newButton);
    newContainer.appendChild(newInput);

    document.getElementById('searchContainer').appendChild(borderContainerSearch);
});
const searchButtonLogin = document.getElementById('searchButtonLogin');
const searchButtonPassword = document.getElementById('searchButtonPassword');
const enterButton = document.getElementById('Enter'); 
const loginInput = document.getElementById('login');
const passwordInput = document.getElementById('password');


function checkLogin() {
    const login = loginInput.value;
    searchButtonLogin.classList.remove('error', 'success');

    if (login.length <= 1) {
        searchButtonLogin.classList.add('error');
        searchButtonLogin.classList.remove('success');
        document.getElementById("warningLogin").innerHTML = "занадто короткий";
    } else if (login.length >= 50) {
        searchButtonLogin.classList.add('error');
        searchButtonLogin.classList.remove('success');
        document.getElementById("warningLogin").innerHTML = "занадто довгий";
    } else {
        searchButtonLogin.classList.add('success');
        searchButtonLogin.classList.remove('error');
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
function validateForm() {
    if (
        searchButtonLogin.classList.contains('success') &&
        searchButtonPassword.classList.contains('success')
    ) {
        alert("Все введено правильно!");
        window.location.href = "file:///C:/Users/михаил/Desktop/UaL/HTML/UaLHomePage.html";
    } else {
        
    }
}
loginInput.addEventListener('input', checkLogin);
passwordInput.addEventListener('input', checkPassword);
enterButton.addEventListener('click', (event) => {
    event.preventDefault(); 
    validateForm(); 
});