import React from "react";
import "./styles.css";
export default function Search() {
  return (
    <div className="Search">
      <form className="Search">
        <input type="Search" placeholder="Type city here" />
        <div className="button">
          <input
            type="submit"
            value="Search"
            className="btn btn-primary w-10"
          />
        </div>
      </form>
    </div>
  );
}
