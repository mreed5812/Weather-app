const searchButton = document.getElementById('searchButton');
var searchItem;
//api key 1b23dcb87aa42a7d93f01fef6cf5050b

const displayWeather = document.getElementById('weatherDisplay');

searchButton.addEventListener('click', function () {
    searchItem = document.getElementById('searchInput').value;
    getWeatherStatus();
});


async function getWeatherStatus() {
    try {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=1b23dcb87aa42a7d93f01fef6cf5050b', { mode: 'cors' })
            .then(function (response) {
                return response.json()
            })
            .then(function (response) {
                var weatherData = response
                console.log(weatherData.weather[0].description)
                // console.log(response.coord)
                //console.log(response.coord.weather.description)
            })
    } catch (error) {
        console.log('oops');
    }
}

