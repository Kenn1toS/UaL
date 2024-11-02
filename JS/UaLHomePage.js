// Находим кнопку по ID
const addButton = document.getElementById('addSearchButton');

// Добавляем обработчик события на кнопку
addButton.addEventListener('click', function(event) {
    // Предотвращаем стандартное поведение кнопки
    event.preventDefault();
const links = document.querySelectorAll('.containerHelp a');
    links.forEach(link => {
        if (link.textContent === "Не можу зайти") {
            link.remove(); // Удаляем ссылку с текстом "Не можу зайти"
        }
    });
    // Проверяем, добавлен ли уже элемент
    if (addButton.dataset.added) {
        return; // Если элемент уже добавлен, выходим из функции
    }

    // Устанавливаем атрибут, чтобы пометить, что элемент добавлен
    addButton.dataset.added = 'true';

    // Создаем новый div для контейнера поиска
    const newContainer = document.createElement('div');
    newContainer.className = 'containerSearch';

    // Создаем кнопку внутри нового div
    const newButton = document.createElement('button');
    newButton.className = 'searchButton';
    newButton.textContent = '';

    // Создаем input внутри нового div
    const newInput = document.createElement('input');
    newInput.className = 'search';
    newInput.type = 'text';
    newInput.placeholder = 'повтор пароля';

    // Вставляем кнопку и input в контейнер
    newContainer.appendChild(newButton);
    newContainer.appendChild(newInput);

    // Добавляем новый контейнер в основной контейнер
    document.getElementById('searchContainer').appendChild(newContainer);
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