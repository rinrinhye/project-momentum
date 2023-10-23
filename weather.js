
const API_KEY ='f3013c73b09d1d2ec0384e2d5b0ea48c'

function onGeoOk(position){
  console.log(position)
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log(lat, lng)
  const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  fetch(url).then(res=>res.json().then(data=>{
    const city = document.querySelector('.city')
    const weather = document.querySelector('.weather')
    const temp = document.querySelector('.temp')
    city.innerText = data.name;
    weather.innerText = data.weather[0].main;
    temp.innerText = `${data.main.temp}º`;}))
}
function onGeoError(){
  alert(`Can't find you.`)
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)