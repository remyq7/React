import React from "react";
import Humidity from "./Humidity.js";
import Forecast from "./Forecast.js";
import Wind from "./Wind.js";

export default function Temperature(props) {
  return (
    <div className="Temperature">
      <h2>The temperature is {props.value}°C</h2>
      <Humidity value={props.humidity} />
      <Wind value={props.wind} />
      <Forecast />
    </div>
  );
}
