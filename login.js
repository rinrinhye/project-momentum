const loginForm = document.querySelector(".login-form");
const input = loginForm.querySelector("input");
const savedUserName = localStorage.getItem("user-name");
const loginPage = document.querySelector(".login-layout");
const mainPage = document.querySelector(".main-layout");
const userName = document.querySelector(".user-name");

const btnLogout = document.querySelector(".btn-loggout");

btnLogout.addEventListener("click", handleLogout);

if (savedUserName === null) {
  loginForm.addEventListener("submit", handleLogin);
  mainPage.classList.toggle("hidden");
} else {
  loginPage.classList.toggle("hidden");
  userName.innerText = 'Hello, ' + localStorage.getItem("user-name") + '!';
  btnLogout.addEventListener("click", handleLogout);
}

function handleLogin(e) {
  e.preventDefault();
  const name = input.value;
  localStorage.setItem("user-name", name);
  input.value = "";

  loginPage.classList.toggle("hidden");
  mainPage.classList.toggle("hidden");
  userName.innerText = 'Hello, ' + localStorage.getItem("user-name") + '!';
}

function handleLogout() {
  localStorage.removeItem("user-name");
  localStorage.removeItem("todos");
  loginPage.classList.toggle("hidden");
  mainPage.classList.toggle("hidden");
}

/* 
왜 클릭하고 새로고침 해야
로그인 메인페이지 가 바뀌어서 나타나지?




*/
