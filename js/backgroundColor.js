const body = document.body;

const colorButton1 = document.querySelector(".btn-1");
const colorButton2 = document.querySelector(".btn-2");
const colorButton3 = document.querySelector(".btn-3");
const colorButton4 = document.querySelector(".btn-4");
const colorButton5 = document.querySelector(".btn-5");
const colorButton6 = document.querySelector(".btn-6");
const colorButton7 = document.querySelector(".btn-7");
const colorButton8 = document.querySelector(".btn-8");

const btns = [
  colorButton1,
  colorButton2,
  colorButton3,
  colorButton4,
  colorButton5,
  colorButton6,
  colorButton7,
  colorButton8,
];

function randomChangeBackGround() {
  const number = Math.floor(Math.random() * 8) + 1;
  console.log(number);
  body.className = `background-color-${number}`;
}

function BtnchangeBackGround(index) {
  body.className = `background-color-${index + 1}`;
}

window.addEventListener("load", randomChangeBackGround);

btns.forEach((btn, index) => {
  btn.addEventListener("click", () => BtnchangeBackGround(index));
});
