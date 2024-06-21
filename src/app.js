// Weather App JavaScript Code
// Global variables
const apiKey = 'f8137ecdbb6c2bb02d3a4f37814507ba';
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const locateBtn = document.getElementById('locateBtn');
const currentWeatherDiv = document.getElementById('currentWeather');
const forecastDiv = document.getElementById('forecast');
const forecastCardsDiv = document.getElementById('forecastCards');
const weatherIcon = document.getElementById('weatherIcon');
const recentCitiesDropdown = document.getElementById('recentCitiesDropdown');

// Array to store recently searched cities
let recentCities = JSON.parse(sessionStorage.getItem('recentCities')) || [];

function saveToRecentCities(city) {
    if (!recentCities.includes(city)) {
        recentCities.unshift(city);
        recentCities = recentCities.slice(0, 5);
        sessionStorage.setItem('recentCities', JSON.stringify(recentCities));
        displayRecentCitiesDropdown();
    }
}

function displayRecentCitiesDropdown() {
    recentCitiesDropdown.innerHTML = '<option value="">Select a city</option>';
    recentCities.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        recentCitiesDropdown.appendChild(option);
    });
}

function getWeatherData(city) {
    if (!city) {
        alert('Please enter a city name.');
        return;
    }

    saveToRecentCities(city);

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found.');
            }
            return response.json();
        })
        .then(data => {
            console.log('Current weather data:', data);
            displayCurrentWeather(data);
            getForecastData(data.coord.lat, data.coord.lon);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error.message);
            alert('Error: City not found.');
        });
}

function getWeatherDataByCoords(latitude, longitude) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log('Current weather data:', data);
            displayCurrentWeather(data);
            getForecastData(latitude, longitude);
        })
        .catch(error => console.error('Error fetching weather data:', error));
}

function displayCurrentWeather(data) {
    console.log('Displaying current weather:', data);
    const city = document.getElementById('city');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    const humidity = document.getElementById('humidity');
    const windSpeed = document.getElementById('windSpeed');

    city.textContent = data.name;
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    description.textContent = data.weather[0].description;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
    weatherIcon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    currentWeatherDiv.style.display = 'block';
}

function getForecastData(latitude, longitude) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log('Forecast data:', data);
            displayForecastData(data.list);
        })
        .catch(error => console.error('Error fetching forecast data:', error));
}

function displayForecastData(forecastData) {
    forecastCardsDiv.innerHTML = '';
    for (let i = 0; i < forecastData.length; i += 8) {
        const forecastItem = forecastData[i];
        const date = new Date(forecastItem.dt * 1000);
        const card = `
            <div class="bg-white rounded shadow-md p-4">
                <p class="text-lg font-bold mb-2">${date.toLocaleDateString()}</p>
                <img src="https://openweathermap.org/img/w/${forecastItem.weather[0].icon}.png" alt="${forecastItem.weather[0].description}" class="mb-2">
                <p class="text-lg mb-2">${Math.round(forecastItem.main.temp)}°C</p>
                <p class="text-sm">${forecastItem.weather[0].description}</p>
            </div>
        `;
        forecastCardsDiv.innerHTML += card;
    }

    forecastDiv.style.display = 'block';
}

// Display recent cities dropdown on page load
displayRecentCitiesDropdown();

// Show weather data of Pune by default
window.addEventListener('load', () => {
    getWeatherData('Pune');
});

searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    getWeatherData(city);
});

locateBtn.addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                getWeatherDataByCoords(latitude, longitude);
            },
            (error) => {
                console.error('Error getting location:', error);
            }
        );
    } else {
        console.error('Geolocation is not supported by this browser.');
    }
});

recentCitiesDropdown.addEventListener('change', () => {
    const selectedCity = recentCitiesDropdown.value;
    if (selectedCity) {
        getWeatherData(selectedCity);
    }
});
