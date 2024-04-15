// Weather.js
import React from "react";
import "./weather.css";
import { FiCloudRain } from "react-icons/fi";
import { BsFillCloudSnowFill } from "react-icons/bs";
import { WiThermometerExterior } from "react-icons/wi";
import { WiNightClear } from "react-icons/wi";
import { IoCloudSharp } from "react-icons/io5";
import { GiFog } from "react-icons/gi";

function Weather({ data, name }) {
    return (
        <div className="weather-container">
            <div className="weather-section weather-styling">
                <h3>{name}</h3>
                <h1>{(Number(data.main.temp) - 273).toFixed(1)} °C</h1>
            </div>

            <div className="weather-info weather-styling">
                <div>
                    <p className="description">{(Number(data.main.feels_like) - 273).toFixed(1)} °C</p>
                    <p>Feels Like</p>
                </div>
                <div>
                    <p className="description">{data.main.humidity} %</p>
                    <p>Humidity</p>
                </div>
                <div>
                    <p className="description">{data.wind.speed} MPH</p>
                    <p>Wind Speed</p>
                </div>
                <div>
                    <p className="description">{data.weather[0].main}</p>
                    <p>Status </p>
                </div>
            </div>
        </div>
    );
}

export default Weather;
