class Tasks {
    #id = "id" + Math.random().toString(16).slice(2);
    #name;
    #description;
    #date = new Date();
    #status = false;

    constructor(name,description){
        this.#name = name;
        this.#description = description;

    }
}

class tasksManedger{

}

const form = document.querySelector("form");

form.addEventListener("submit", function(){
    
})