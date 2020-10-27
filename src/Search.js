import React from "react";
import "./Search.css";
export default function Search() {
  return (
    <div className="Search">
      <form className="Search">
        <input type="Search" />
        <div className="button">
          <input type="submit" value="Search" />
        </div>
      </form>
    </div>
  );
}
