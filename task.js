class Task {
    #id = "id" + Math.random().toString(16).slice(2);
    #name;
    #description;
    #date = new Date();
    #status = false;
    #element = null;

    constructor(name, description) {
        this.#name = name;
        this.#description = description;

        this.#element = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const nameLink = document.createElement('a');
        nameLink.textContent = this.#name;
        nameLink.href = '';

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';

        this.#element.append(checkbox, nameLink, deleteBtn, editBtn);
    }

    get element(){
        return this.#element;
    }

}

export default Task;