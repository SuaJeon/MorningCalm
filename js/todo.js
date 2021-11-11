const toDoForm = document.getElementById("todolist-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todolist");

let toDos = [];

const TODOS_KEY = "todos";

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDos(event){
    const deleteList = event.target.parentElement;
    toDos = toDos.filter(todo => todo.id !== parseInt(deleteList.id));
    saveToDos();
    deleteList.remove();
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = "<del>";

    button.addEventListener("click", deleteToDos);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObject = {
        text:newToDo,
        id:Date.now(),
    };
    toDos.push(newToDoObject);
    paintToDo(newToDoObject);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (saveToDos !== null){
    const parsedToDos = JSON.parse(saveToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
