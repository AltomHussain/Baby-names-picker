import React, { useState } from "react";
import "./DisplayNames.css";
import SearchBar from "./SearchBar";
export default function DisplayNames({ babyNames }) {
  const [searchTerm, setSearchTerm] = useState([]);
  const [displayNames, setDisplayNames] = useState(babyNames);
  const [addFavourite, setAddFavourite] = useState([]);
  const [backToMain, setBackToMain] = useState([])
  function handleClick(e) {
    setSearchTerm(e.target.value.toLowerCase());
  }
  //filter the search value and this way is really good if you want to get the data back while you removing what you typed
  let filtered = displayNames.filter(
    (p) => p.name.toLowerCase().indexOf(searchTerm) !== -1
  );
let loopThroughSplicedList;
  function handleFavourite(id) {
    let splicedFavourite = displayNames.splice(id, 1);
     loopThroughSplicedList = splicedFavourite.map((favouriteList) => (
      <p className={favouriteList.sex}>{favouriteList.name}</p>
    ));
    setAddFavourite([...loopThroughSplicedList, ...addFavourite]);
  }
  function handleBackFav(id){

    let splicedBack = displayNames.splice(id, 1)
    setDisplayNames([...displayNames  ,...splicedBack])
console.log(splicedBack);
  }

  return (
    <div className="big-container">
      {addFavourite.map((name, index) => (
        <p onClick={()=>handleBackFav(index)}>{name}</p>
      ))}
      <SearchBar handleClick={handleClick} />
      <hr></hr>
      <div className="names-container">
        {filtered.map((name, index) => {
          return (
            <h3 className={name.sex} onClick={() => handleFavourite(index)}>
              {name.name}
            </h3>
          );
        })}
      </div>
    </div>
  );
}
