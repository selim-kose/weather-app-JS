import { getWeatherByCoord, getWeaterByCity } from "./fetch.js";


const temp = document.querySelector('.temp')
const city = document.querySelector('.city')
const humidity = document.querySelector('.humidity')
const windSpeed = document.querySelector('.speed')
const searchInput = document.querySelector('.search-input')
const searchButton = document.querySelector('.search-btn')

searchButton.addEventListener('click', search)

searchInput.addEventListener('keypress', (e) => {
   if (e.key === 'Enter') search()
})


navigator.geolocation.getCurrentPosition(function (pos) {
   const latitude = pos.coords.latitude
   const longitude = pos.coords.longitude

   getCurr(latitude, longitude)
},
   function (err) { console.log(err.code); }
)


async function getCurr(lat, lon) {
   let data = await getWeatherByCoord(lat, lon)
   changeValues(data)
}

async function search() {
   let data = await getWeaterByCity(searchInput.value)
   changeValues(data)

}

function changeValues(data) {
   city.textContent = firstCharCap(data.name)
   temp.textContent = Math.trunc(data.main.temp) + '°C'
   windSpeed.textContent = data.wind.speed
   humidity.textContent = data.main.humidity + '%'
}

function firstCharCap(word) {
   let cap = word.charAt(0).toUpperCase()
   let rest = word.slice(1)

   return cap + rest;
}


