import React from "react";
import ReactDOM from "react-dom";
import Temperature from "./Temperature.js";
import Humidity from "./Humidity.js";
import Forecast from "./Forecast.js";
import Search from "./Search.js";
import "./styles.css";

function App() {
  return (
    <div className="weather-app">
      <h1>Weather App </h1>
      <Search />
      <Temperature value={19} city="Tokyo" humidity={80} />
      <Temperature value={25} city="Paris" humidity={20} />
      <Temperature value={5} city="Moscow" humidity={0} />

      <form></form>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
