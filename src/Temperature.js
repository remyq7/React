import React from "react";
import Humidity from "./Humidity.js";
import Wind from "./Wind.js";
import Description from "./Description.js";
import City from "./City.js";

export default function Temperature(props) {
  let fahrenheitTemperature = (props.value * 9) / 5 + 32;
  return (
    <div className="Temperature">
      <h2>
        {" "}
        {props.value}
        <a href="#" className="celsius">
          °C{" "}
        </a>
        |{" "}
        <a href="#" className="fahrenheit">
          °F
        </a>
      </h2>
      <Description value={props.description} />
      <Humidity value={props.humidity} />
      <Wind value={props.wind} />
    </div>
  );
}
