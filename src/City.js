import React from "react";
import Temperature from "./Temperature.js";

export default function City(props) {
  return (
    <div className="City">
      {" "}
      The weather in {props.city} is {props.temperature}°C and 42 °F
    </div>
  );
}
