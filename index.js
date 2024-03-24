import Task from "./task.js";
import TasksManager from "./tasks-manager.js";


const form = document.querySelector("form");
const input = document.querySelector("input");
const textArea = document.querySelector("textarea")
const tasks = document.querySelector('.tasks');
const tasksManager = new TasksManager(tasks);


// Добавление задачи
form.addEventListener("submit", addTask);

// Удаление задачи



function addTask(event) {

    event.preventDefault();

    const taskName = input.value;

    const taskDescription  = textArea.value;

    tasksManager.addTask(new Task(tasksManager, taskName, taskDescription));

    console.log(tasksManager);

}





