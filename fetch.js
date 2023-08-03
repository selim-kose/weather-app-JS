



let url = 'https://api.openweathermap.org/data/2.5/weather?q=';
let apiKey = '9fab484755c6333aa56e2d4c19b1c9c0';
let units = '&units=metric'

export async function getWeaterByCity(input) {
   const data = await fetch(url + input + `&appid=${apiKey}` + units)
   const jsonData = await data.json();
   return jsonData
}


export async function getWeatherByCoord(lat, lon) {
   const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}` + units)
   const jsonData = await data.json()
   return jsonData
}
