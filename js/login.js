const loginForm = document.querySelector(".login-form");
const input = loginForm.querySelector("input");
const savedUserName = localStorage.getItem("user-name");

if (savedUserName === null) {
  loginForm.addEventListener("submit", handleLogin);
}

function handleLogin(e) {
  e.preventDefault();
  const name = input.value;
  localStorage.setItem("user-name", name);
  input.value = "";

  location.replace("momentum.html");
}
