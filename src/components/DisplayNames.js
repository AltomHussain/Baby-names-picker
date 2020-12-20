import React from "react";
import "./DisplayNames.css";
export default function DisplayNames({ babyNames }) {
  return (
    <div className="names-container">
      {babyNames.map((name, index) => {
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
  );
}
