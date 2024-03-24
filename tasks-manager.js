import Task from "./task.js";

class TasksManager {
    #tasks = [];
    #tasksListElement = null;


    constructor(tasksListElement) {
        this.#tasksListElement = tasksListElement;
        
        const cachedTasks = localStorage.getItem('tasks')  ?? '[]';
        const parsedTasks = JSON.parse(cachedTasks);

        parsedTasks.forEach(parsedTask => this.addTask(Task.fromObject(this, parsedTask)));
    }

    addTask(task) {
        this.#tasks.push(task);
        this.#tasksListElement.append(task.element);

        this.#syncWithLS();
    }

    deleteTask(task) {
        const index = this.#tasks.indexOf(task);

        this.#tasks.splice(index, 1);
        task.element.remove();

        this.#syncWithLS();

    }
    #syncWithLS() {
        localStorage.setItem('tasks', JSON.stringify(this.#tasks));

    }
}

export default TasksManager;