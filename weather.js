async function fetchWeather() {
    const location = document.getElementById('locationInput').value;
    const apiKey = 'YOUR_API_KEY'; 
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
    const data = await response.json();

    document.getElementById('cityName').innerText = data.name;
    document.getElementById('temperature').innerText = `${data.main.temp}°C`;
    document.getElementById('weatherDescription').innerText = data.weather[0].description;
    document.getElementById('weatherIcon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    document.getElementById('windSpeed').innerText = `${data.wind.speed} m/s`;
    document.getElementById('humidity').innerText = `${data.main.humidity}%`;
    document.getElementById('feelsLike').innerText = `${data.main.feels_like}°C`;
    document.getElementById('uvIndex').innerText = 'N/A'; 
}
