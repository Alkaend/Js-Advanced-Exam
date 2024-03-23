import Task from "./task.js";
import TasksManager from "./tasks-manager.js";


const form = document.querySelector("form");
const input = document.querySelector("input");
const tasks = document.querySelector('.tasks');
const tasksManager = new TasksManager(tasks);


// Добавление задачи
form.addEventListener("submit", addTask);

// Удаление задачи
tasks.addEventListener('click', deleteTask);


function addTask(event) {

    event.preventDefault();

    const taskText = input.value;

    tasksManager.addTask(new Task(taskText,''));

    console.log(tasksManager);

    

}

function deleteTask(event){
    if (event.target.dataset.action === 'delete');
    const parentNode = event.target.closest('li');
    parentNode.remove();

   

}

