import Task from "./task.js";

class tasksManedger {

}

const form = document.querySelector("form");
const input = document.querySelector("input");
const tasks = document.querySelector('.tasks');


// Добавление задачи
form.addEventListener("submit", addTask);

// Удаление задачи
tasks.addEventListener('click', deleteTask);


function addTask(event) {

    event.preventDefault();

    const taskText = input.value;

    tasks.append(new Task(taskText,'').element);

}

function deleteTask(event){
    if (event.target.dataset.action === 'delete');
    const parentNode = event.target.closest('li');
    parentNode.remove()

}