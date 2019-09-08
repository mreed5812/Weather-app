const searchButton = document.getElementById('searchButton');
//api key 1b23dcb87aa42a7d93f01fef6cf5050b
var city;
var weatherDescription;
const displayWeather = document.getElementById('weatherDisplay');

//On click, get city from input
searchButton.addEventListener('click', function () {
    city = document.getElementById('searchInput').value;
    const result = getWeatherData();
    result.then(data => displayWeatherData(data));
});


//get city weather data from api
async function getWeatherData() {
    let response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=1b23dcb87aa42a7d93f01fef6cf5050b', { mode: 'cors' })
    let weatherData = await response.json()
    console.log(weatherData.weather[0].description);
    let data = weatherData.weather[0].description;
    return data;

}

function displayWeatherData(weatherStatus) {
    displayWeather.innerHTML = weatherStatus;
}


