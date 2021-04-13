const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteChect);

function addTodo(e) {
  e.preventDefault();
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item");
  newTodo.innerText = todoInput.value;
  todoDiv.appendChild(newTodo);

  const completeButton = document.createElement("button");
  completeButton.innerText = '<li class="fas fa-check"></li>';
  completeButton.classList.add("complete-btn");
}

function deleteChect(e) {
  const item = e.target;
  if (item.classList[0] == "trash-btn") {
    const todo = item.preentElement;
    todo.remove();
  }

  if (item.classList[0] === "complete-btn") {
    const todo = item.preentElement;
    todo.classList.toggle("completed");
  }
}
