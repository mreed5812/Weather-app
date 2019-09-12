var apikey = '1b23dcb87aa42a7d93f01fef6cf5050b';
const searchButton = document.getElementById('searchButton');
const displayWeather = document.getElementById('weatherDisplay');


//On click, get city from input
searchButton.addEventListener('click', function () {
    let city = getInputCity();
    clearInput();
    const result = getWeatherData(city);
    result.then(data => displayWeatherData(data, city));
    result.then(data => getWeatherGif(data));
});

function getInputCity() {
    let city = document.getElementById('searchInput').value;
    return city;
}

function clearInput() {
    document.getElementById('searchInput').value = '';
}

//get city weather data from api
async function getWeatherData(city) {
    let response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=' + apikey, { mode: 'cors' })
    let weatherData = await response.json()
    //console.log(weatherData.weather[0].description);
    let data = weatherData.weather[0].description;
    return data;
}

//get gif to match weather data
async function getWeatherGif(weatherDescription) {
    const img = document.querySelector('img');
    let giphyAPIKey = 'y1iU3pDPR9daxVTIEt7YyIyGFYkNFhBR';
    let gifSearch = weatherDescription;
    let response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=' + giphyAPIKey + '&s=' + gifSearch, { mode: 'cors' })
    let gifData = await response.json()

    img.src = gifData.data.images.original.url;
}

function displayWeatherData(weatherStatus, city) {
    displayWeather.innerHTML = "Today's forecast for " + city + " : " + weatherStatus;
}


