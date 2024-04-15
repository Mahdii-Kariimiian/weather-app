// App.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import Weather from "./Weather";
import "./app.css";

function App() {
    const [searchedCity, setSearchedCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${searchedCity}&limit=5&appid=142bace15bea5d3947656e43ec60ee75`);
            const { lat, lon, name } = response.data[0];
            const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=142bace15bea5d3947656e43ec60ee75`);
            setWeatherData({ name, data: weatherResponse.data });
        } catch (error) {
            alert("City not found. Please try again");
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="input-section">
                <input
                    onChange={(e) => setSearchedCity(e.target.value)}
                    className="input"
                    type="text"
                    placeholder="Enter City Name"
                    value={searchedCity}
                />
                <button className="submit-btn">Search City</button>
            </form>
            {weatherData ? (
                <div>
                    <Weather data={weatherData.data} name={weatherData.name} />
                </div>
            ) : (
                <h2 className="insert-city"> Please Insert a city </h2>
            )}
        </>
    );
}

export default App;
