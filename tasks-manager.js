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

        this.syncWithLS();
    }

    deleteTask(task) {
        const index = this.#tasks.indexOf(task);

        this.#tasks.splice(index, 1);
        task.element.remove();

        this.syncWithLS();

    }

    sortByDate(){
        this.#tasks.sort((a, b) => {
            return b.date - a.date; 

            
        });
        this.updateTasksList(this.#tasks);
        
    }

    sortByName() {
        this.#tasks.sort((a, b) => {
           return  a.name.localeCompare(b.name);
           
          

        });
        this.updateTasksList(this.#tasks);
        
    }

    updateTasksList(tasks){
        this.#tasksListElement.innerHTML ='';
        tasks.forEach(task => this.#tasksListElement.append(task.element));
    }
    
    filterBy(filter){
        const tasks = this.#tasks.filter(task => {
            switch (filter){
                case 'all':
                    return true;
                case 'done':
                    return task.status;
                case 'undone':
                    return !task.status;    
            }
        });
        this.updateTasksList(tasks);
    }



    syncWithLS() {
        localStorage.setItem('tasks', JSON.stringify(this.#tasks));

    }
}

export default TasksManager;