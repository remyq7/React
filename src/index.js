import React from "react";
import ReactDOM from "react-dom";
import Temperature from "./Temperature.js";
import Forecast from "./Forecast.js";
import Search from "./Search.js";
import "./styles.css";

function App() {
  return (
    <div className="weather-app">
      <Search />
      <h1>New York City </h1>
      <div className="card">
        <h2>Monday, 10:22,</h2>
        <img
          src="https://www.publicdomainpictures.net/pictures/310000/velka/orange-circle.png"
          alt="clear"
          className="icon"
        />

        <Temperature value={19} />
      </div>

      <br />
      <Forecast />
      <h5>
        <a href="https://github.com/remyq7/React" alt="GitHUb page">
          Open-source code by{" "}
        </a>
        Vera Malanyaon
      </h5>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
