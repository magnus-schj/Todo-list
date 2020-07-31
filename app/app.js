//SELECTORS
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
//EVENTLISTENERS
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

//FUNCTIONS
function addTodo(e){
    //PREVENT DEFAULT
    e.preventDefault();
    //DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //CHECK MARK
    const completedButton = document.createElement("button");
    completedButton.innerHTML = "<i class='fas fa-check'></i>";
    completedButton.classList.add("completed-button");
    todoDiv.appendChild(completedButton);
    //TRASH-BUTTON
    const trashButton = document.createElement("button");
    trashButton.innerHTML = "<i class='fas fa-trash'></i>";
    trashButton.classList.add("trash-button");
    todoDiv.appendChild(trashButton);
    //APPEND TO LIST
    todoList.appendChild(todoDiv);
    //CLEAR INPUT
    todoInput.value = "";
}
function deleteCheck(e){
    const item = e.target;
    //  DELETE
    if(item.classList[0] === "trash-button"){
        const todo = item.parentElement;
        //ANIMATION
        todo.classList.add("fall");
        addEventListener("transitionend", function(){
            todo.remove();
        });
    }
    //  CHECK
    if(item.classList[0] === "completed-button"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}