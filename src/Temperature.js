import React from "react";
import Humidity from "./Humidity.js";
import Wind from "./Wind.js";

export default function Temperature(props) {
  return (
    <div className="Temperature">
      <h2> {props.value}°C | °F</h2>
      <Humidity value={props.humidity} />
      <Wind value={props.wind} />
    </div>
  );
}
