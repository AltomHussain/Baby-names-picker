import React, { useState } from "react";
import "./DisplayNames.css";
import SearchBar from "./SearchBar";
export default function DisplayNames({ babyNames }) {
  const [searchTerm, setSearchTerm] = useState([]);

  function handleClick(e) {
    console.log(e.target.value);
    setSearchTerm(e.target.value.toLowerCase());
  }
  //filter the search value and this way is really good if you want to get the data back while you removing what you typed
  let filtered = babyNames.filter(
    (p) => p.name.toLowerCase().indexOf(searchTerm) !== -1
  );

  return (
    <div className="big-container">
      <SearchBar handleClick={handleClick} />
      <hr></hr>
      <div className="names-container">
        {filtered.map((name, index) => {
          if (name.sex === "f") {
            return (
              <h3
                className="names"
                key={index}
                style={{ background: "lightgreen" }}
              >
                {name.name}
              </h3>
            );
          } else {
            return (
              <h3 className="names" key={index} style={{ background: "cyan" }}>
                {name.name}
              </h3>
            );
          }
        })}
      </div>
    </div>
  );
}
