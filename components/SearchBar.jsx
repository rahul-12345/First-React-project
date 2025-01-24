import React from "react";

export const SearchBar = ({setQuery}) => {
  return (
    <div className="search-container">
      <i className="fa-solid fa-magnifying-glass" />
      <input type="text" onChange={(event)=>setQuery(event.target.value.toLowerCase())} placeholder="Search for a country... "  />
    </div>
  );
};
export default SearchBar
