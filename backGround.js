const body = document.body
const btnBackGroundColor1 = document.querySelector('.change-color1')
const btnBackGroundColor2 = document.querySelector('.change-color2')
const btnBackGroundColor3 = document.querySelector('.change-color3')
const btnBackGroundColor4 = document.querySelector('.change-color4')
const btnBackGroundColor5 = document.querySelector('.change-color5')
const btnBackGroundColor6 = document.querySelector('.change-color6')
const btnBackGroundColor7 = document.querySelector('.change-color7')
const btnBackGroundColor8 = document.querySelector('.change-color8')
const btnBackGroundColor9 = document.querySelector('.change-color9')

window.addEventListener('load',changeBackGround)

function changeBackGround(){
  const number = Math.floor(Math.random()*9 )+1
  console.log(number)
  body.className = `bg-color${number}`
}

const btns =[btnBackGroundColor1,btnBackGroundColor2,btnBackGroundColor3,btnBackGroundColor4,btnBackGroundColor5,btnBackGroundColor6,btnBackGroundColor7,btnBackGroundColor8,btnBackGroundColor9]

btns.forEach((btn,index)=>{ 
  btn.addEventListener('click',()=>BtnchangeBackGround(index))})

function BtnchangeBackGround(index){
body.className = `bg-color${index+1}`
}