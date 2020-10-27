import React from "react";
import Humidity from "./Humidity.js";
import Wind from "./Wind.js";
import Description from "./Description.js";

export default function Temperature(props) {
  return (
    <div className="Temperature">
      <h2> {props.value}°C | °F</h2>
      <Description value={props.description} />
      <Humidity value={props.humidity} />
      <Wind value={props.wind} />
    </div>
  );
}
