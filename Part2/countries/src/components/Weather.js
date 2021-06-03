import React, { useState, useEffect } from 'react';
import axios from 'axios'
const Weather = ({ country }) => {
    const [weather, setWeather] = useState("");
  
    let capital = country.capital;
  
    useEffect(() => {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=5ea4a910ca431288ef44af3146fd1866`
        )
        .then(response => {
          const data = response.data;
          const weatherObject = {
            temperature: data.main.temp,
            windDirection: data.wind.deg,
            windSpeed: data.wind.speed,
            weatherImage: data.weather[0].icon
          };
          setWeather(weatherObject);
        });
    }, [capital]);
  
    return (
      <div>
        <h3>Weather in {capital}</h3>
        <b>temperature:</b> {weather.temperature} Celcius
        <br />
        <img src={`http://openweathermap.org/img/wn/${weather.weatherImage}@2x.png`} alt="weatherImage" />
        <br />
        <b> wind:</b> {weather.windSpeed} kph direction {weather.windDirection} degrees
      </div>
    )
  }

export default Weather;