import React, { useState } from "react";
export default function Search() {
  let [city, setCity] = useState(" ");
  let [result, setResult] = useState(" ");

  function handleSubmit(event) {
    event.preventDefault();
    setResult(`It is 19°C ${city}`);
  }
  function newCity(event) {
    setCity(event.target.value);
  }
  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input type="Search" placeholder="Type city here" onChange={newCity} />
        <div className="button">
          <input type="submit" value="Search" />
        </div>
      </form>
      <p>{result}</p>
    </div>
  );
}
