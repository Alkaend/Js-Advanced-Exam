class Task {
    #id = "id" + Math.random().toString(16).slice(2);
    #name;
    #description;
    #date = new Date();
    #status = false;
    #element = null;

    static fromObject(tasksManager, obj) {
        const task = new Task(tasksManager, obj.name, obj.description);
        task.id = obj.id;
        task.date = obj.date;
        task.status = obj.status;
        return task;
    }

    constructor(tasksManager, name, description) {
        this.#name = name;
        this.#description = description;

        this.#element = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', e => {
            this.#status = e.target.checked;
            tasksManager.syncWithLS();
        });


        const nameLink = document.createElement('a');
        nameLink.textContent = this.#name;
        nameLink.href = `./details/index.html?id=${this.#id}`;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => tasksManager.deleteTask(this));

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click',  () => {

            window.location.href = `./edit/index.html?id=${this.#id}`;
        })

        this.#element.append(checkbox, nameLink, deleteBtn, editBtn);
    }

    get element() {
        return this.#element;
    }

    get id() {
        return this.#id;
    }

    get date() {
        return this.#date;
    }

    get status() {
        return this.#status;
    }

    get name() {
        return this.#name;
    }

    get description() {
        return this.#description;
    }

    set id(newId) {
        this.#id = newId;
        this.#element.querySelector('a').href = `./details/index.html?id=${this.#id}`;
    }

    set date(newDate) {
       this.#date = new Date(newDate);
    }

    set status(newStatus) {
        this.#status = newStatus;
        this.#element.querySelector('input').checked = newStatus;
    }


    toJSON() {
        return {
            id: this.#id,
            name: this.#name,
            description: this.#description,
            date: this.#date,
            status: this.#status
        };
    }
}

export default Task;