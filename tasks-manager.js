class TasksManager {
    #tasks = [];
    #tasksListElement = null;


    constructor(tasksListElement) {
        this.#tasksListElement = tasksListElement;
    }

    addTask(task) {
        this.#tasks.push(task);
        this.#tasksListElement.append(task.element);

        this.#syncWithLS();
    }

    deleteTask(task) {
        const index = this.#tasks.findIndex(task);

        this.#tasks.splice(index, 1);
        task.element.remove();

        this.#syncWithLS();

    }
    #syncWithLS() {
        localStorage.setItem('tasks', JSON.stringify(this.#tasks));

    }
}

export default TasksManager;