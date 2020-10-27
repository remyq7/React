import React from "react";
import ReactDOM from "react-dom";
import Temperature from "./Temperature.js";
import Humidity from "./Humidity.js";
import Forecast from "./Forecast.js";
import Search from "./Search.js";
import Wind from "./Wind.js";
import "./styles.css";

function App() {
  return (
    <div className="weather-app">
      <Search />
      <h1>New York City </h1>
      <h2>Monday, 10:22,</h2>

      <Temperature value={19} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
