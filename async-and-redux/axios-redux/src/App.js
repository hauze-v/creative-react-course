import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [weather, setWeather] = useState(null);
  const [input, setInput] = useState("");

  useEffect(() => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=80025`
      )
      .then((data) => {
        setWeather(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // Event
  const weatherInput = (event) => {
    setInput(event.target.value);
  };
  const searchWeather = () => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${input}`
      )
      .then((data) => {
        setWeather(data.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      {weather && (
        <div>
          <div className="search">
            <input onChange={weatherInput} type="text" name="" id="" />
            <button onClick={searchWeather}>Submit</button>
          </div>
          <div className="weather-info">
            <h1>{weather.location.name}</h1>
            <h2>{weather.location.region}</h2>
            <div className="condition">
              <h3>{weather.current.condition.text}</h3>
              <img src={weather.current.condition.icon} alt="weather icon" />
              <h3>{weather.current.temp_f} Faranheight</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
