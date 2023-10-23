const formToDo = document.querySelector(".todo-form");
const inputToDo = document.querySelector(".todo-form input");
const btnToDoAdd = document.querySelector(".todo-form button");
const ulToDo = document.querySelector(".todo-list-box");




























// formToDo.addEventListener("submit", handleSubmit);

// /*  */
// let toDos = [];

// /* form event */
// function handleSubmit(e) {
//   e.preventDefault();
//   const newToDo = inputToDo.value;
//   inputToDo.value = "";
//   const newToDoObj = {
//     id: Date.now(),
//     text: newToDo,
//   };
//   if (newToDoObj.text.trim().length === 0) {
//     return;
//   }
//   addToDoList(newToDoObj);
//   toDos.push(newToDoObj);
//   saveToDos();
// }
// /*  add todo list */
// function addToDoList(newToDoObj) {
//   const li = document.createElement("li");
//   const span = document.createElement("span");
//   const btnToDoDel = document.createElement("button");
//   btnToDoDel.innerHTML = '<i class="fa-solid fa-minus"></i>';
//   li.id = newToDoObj.id; // 막힌 부분!
//   span.innerText = newToDoObj.text;
//   li.appendChild(span);
//   li.appendChild(btnToDoDel);
//   ulToDo.appendChild(li);
//   btnToDoDel.addEventListener("click", delToDoList);
// }

// /* todoList remove*/
// function delToDoList(e) {
//   const btn = e.target.parentElement;
//   const li = btn.parentElement;
//   li.remove();
//   toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
//   saveToDos();
//   // localStorage.removeItem()
// }

// /* localStorage Save */
// function saveToDos() {
//   localStorage.setItem("todos", JSON.stringify(toDos));
//   // console.log(JSON.stringify(toDos));
// }

// const savedToDos = localStorage.getItem("todos");

// if (savedToDos !== null) {
//   const parsedToDos = JSON.parse(savedToDos); // 배열로 만들어줌
//   toDos = parsedToDos;
//   console.log(parsedToDos);
//   parsedToDos.forEach(addToDoList);
// }
