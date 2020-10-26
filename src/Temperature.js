import React from "react";
import Humidity from "./Humidity.js";
import Forecast from "./Forecast.js";

export default function Temperature(props) {
  return (
    <div className="Temperature">
      <h2>
        The temperature in {props.city} is {props.value}°C
      </h2>
      <Humidity value={props.humidity} />
      <Forecast />
    </div>
  );
}
