

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

    const taskHTML = `<li>  
    <input type="checkbox">
    <a href="">${taskText}</a>
    <button>Delete</button>
    <button>Edit</button>
</li>`;

    tasks.insertAdjacentHTML('beforeend', taskHTML);

    input.value = ""
    input.focus()

}

function deleteTask(event){
    if (event.target.dataset.action === 'delete');
    const parentNode = event.target.closest('li');
    parentNode.remove()

}