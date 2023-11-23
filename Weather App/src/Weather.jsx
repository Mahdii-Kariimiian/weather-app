import React from 'react'
import "./weather.css"
//Icons
import { FiCloudRain } from "react-icons/fi";
import { BsFillCloudSnowFill } from "react-icons/bs";
import { WiThermometerExterior } from "react-icons/wi";
import { WiNightClear } from "react-icons/wi";
import { IoCloudSharp } from "react-icons/io5";
import { GiFog } from "react-icons/gi";

function Weather(props) {
  // Status Icons
  const weatherStaus = props.data.weather[0].main
  let statusIcon;
  switch (weatherStaus) {
    case "Clouds" :
      statusIcon = <IoCloudSharp />
      break
    case "Clear":
      statusIcon = <WiNightClear />
      break
    case "Rain":
      statusIcon = <FiCloudRain />
      break
    case "Snow":
      statusIcon = <BsFillCloudSnowFill />
      break
    case "Fog":
      statusIcon = <GiFog />
    default: 
      statusIcon = <WiThermometerExterior />
  }

  return (
    <div className='weather-container'>
      <div className='weather-section weather-styling'>
        <h3>
          {props.name}
        </h3>
        <h1>
          {(Number(props.data.main.temp)-273).toFixed(1)} °C
        </h1>
      </div>
      
      <div className="weather-status">
      {props.data.weather[0].main}
      </div>

      <div className='weather-info weather-styling'>
        <div >
          <p>{(Number(props.data.main.feels_like)-273).toFixed(1)} °C</p>
          <p>Feels Like</p>
        </div>
        <div>
          <p>{props.data.main.humidity} %</p>
          <p>Humidity</p>
        </div>
        <div>
          <p>{props.data.wind.speed} MPH</p>
          <p>Wind Speed </p>
        </div>
      </div>
    </div>
  )
}

export default Weather
