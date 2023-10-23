const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-form input");
const todoUl = document.querySelector(".todo-list-box");

let todos = [];

function paintTodo(newTodoObj) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delButton = document.createElement("i");
  delButton.classList.add("fa-solid");
  delButton.classList.add("fa-minus");
  span.innerText = newTodoObj.text;
  li.id = newTodoObj.id;
  li.appendChild(span);
  li.appendChild(delButton);
  todoUl.appendChild(li);
  delButton.addEventListener("click", delTodo);
}

function delTodo(e) {
  const li = e.target.parentElement;
  li.remove();
  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
  saveTodos();
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function handleTodoSubmit(e) {
  e.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
  };
  if (newTodoObj.text.trim().length === 0) {
    return;
  }
  paintTodo(newTodoObj);
  todos.push(newTodoObj);
  saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem("todos");

if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}
