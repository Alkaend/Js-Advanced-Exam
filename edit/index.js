document.getElementById('go-home').addEventListener('click', function () {

    window.location.href = "../index.html";
});

const queryParams = new URLSearchParams(window.location.search);
const id = queryParams.get('id');

const cachedTasks = localStorage.getItem('tasks') ?? '[]';
const parsedTasks = JSON.parse(cachedTasks);

const task = parsedTasks.find(parsedTask =>parsedTask.id === id );

const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const form = document.querySelector("form");

input.value = task.name;
textarea.value = task.description;

form.addEventListener("submit", saveTask);

function saveTask (event) {
    event.preventDefault();

    task.name = input.value;
    task.description = textarea.value;

    localStorage.setItem('tasks', JSON.stringify(parsedTasks));
    
    window.location.href = "../index.html";
}
