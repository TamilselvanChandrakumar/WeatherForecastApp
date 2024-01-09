import React, { useState } from "react";
import axios from "axios";
import WeatherInformationUI from "./WeatherInformationUI";
import "./Weather.css";
const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  // useEffect(() => {
  //   fetchData();
  // }, []);

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
    setCity("");
    console.log(weatherData);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=fd682f76b97bea3933626265f56d492c`
      );
      setWeatherData(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter the city"
          value={city}
          onChange={handleInputChange}
        ></input>
        <button type="submit">Click to see weather</button>
      </form>
      <br></br>
      <WeatherInformationUI weatherData={weatherData}></WeatherInformationUI>
    </div>
  );
};

export default Weather;
