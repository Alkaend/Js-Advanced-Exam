document.getElementById('go-home').addEventListener('click', function () {

    window.location.href = "../index.html";
});

const queryParams = new URLSearchParams(window.location.search);
const id = queryParams.get('id');

const cachedTasks = localStorage.getItem('tasks') ?? '[]';
const parsedTasks = JSON.parse(cachedTasks);

const task = parsedTasks.find(parsedTask =>parsedTask.id === id );

document.querySelector('.task-title').textContent += task.name;

document.querySelector('.task-description').textContent += task.description;

document.querySelector('.task-status').textContent += task.status;

document.querySelector('.task-id').textContent += task.id;



let options = {
    year:'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
};

document.querySelector('.task-date').textContent += new Date (task.date).toLocaleString('ru-RU', options).replace(',', '');

console.log(task.date);