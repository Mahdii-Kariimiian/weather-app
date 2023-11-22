import React , {useEffect, useState} from "react"
import axios from "axios"
import Weather from "./Weather"
import "./app.css"

function App() {
  //Set url and fetch coordinates
  const [url , setUrl] = useState(`http://api.openweathermap.org/geo/1.0/direct?q=turin&limit=5&appid=142bace15bea5d3947656e43ec60ee75`)
  // render Weather component
  const [weatherComponent , setWeatherComponent] = useState(null)
  // fetching data
  useEffect(() => {
    //fetch coordinates based on city name
    const fetchCityData = ()=> {
      axios.get(url)
        .then(res => {
          const name = res.data[0].name
          const latitude = res.data[0].lat
          const longitude = res.data[0].lon
          fetchCoordinateData (latitude , longitude , name)
         
      }).catch(err => console.log("err"))
    }
    // fetch weather data based on city name
    const fetchCoordinateData = (latitude , longitude , name) => {
      const url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=142bace15bea5d3947656e43ec60ee75`
      axios.get(url2)
        .then (res=> {
          setWeatherComponent(<Weather data={res.data} name={name} />)
        }).catch(err => console.log(err))
    }
    fetchCityData()
    fetchCoordinateData()
  } , [url])
  // modify Url based on entered city
  const chooseCity = (e)=> {
    let city = e.target.value
    setUrl(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=142bace15bea5d3947656e43ec60ee75`)
  }
  
  return (
    <>
    <div className="input-section">
      <input className="input"
        onChange={(e)=>{chooseCity(e)}}
        type="text" 
        placeholder="Enter City Name"
      />
    </div>
      {weatherComponent}
    </>
  )
}

export default App
