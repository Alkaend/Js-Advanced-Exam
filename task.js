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

    }
}