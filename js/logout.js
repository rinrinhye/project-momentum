const userName = document.querySelector(".user-name");
const savedUserName = localStorage.getItem("user-name");
const btnLogout = document.querySelector(".logout-button");

if (savedUserName) {
  userName.innerText = "Hello, " + localStorage.getItem("user-name") + "!";
  btnLogout.addEventListener("click", handleLogout);
}

function handleLogout() {
  localStorage.removeItem("user-name");
  localStorage.removeItem("todos");
  location.replace("login.html");
}
