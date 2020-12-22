import React from 'react'
import "./SearchBar.css"
export default function SearchBar({ handleClick }) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="search for a name"
        className="input"
        onChange={handleClick}
      />
    </div>
  );
}
