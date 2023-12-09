import React from "react";
import "./WeatherInformationUI.css";

const WeatherInformationUI = ({ weatherData }) => {
  return (
    <>
      {weatherData ? (
        <table>
          <tbody>
            <tr>
              <td rowSpan={2} className="leftSideBar">
                {weatherData.name}
              </td>
              <td>
                <h3>Feelslike</h3>
                <p>{weatherData.main.feels_like}</p>
              </td>
              <td>
                <h3>Temperature</h3>
                <p>{weatherData.main.temp}</p>
              </td>
              <td>
                <h3>Weather</h3>
                <p>{weatherData.weather[0].description}</p>
              </td>
            </tr>
            <tr>
              <td>
                <h3>humidity</h3>
                <p>{weatherData.main.humidity}</p>
              </td>
              <td>
                <h3>Pressure</h3>
                <p>{weatherData.main.pressure}</p>
              </td>
              <td>
                <h3>Wind</h3>
                <p>{weatherData.wind.speed}m/s</p>
              </td>
            </tr>
          </tbody>
        </table>
      ) : null}
    </>
  );
};

export default WeatherInformationUI;
