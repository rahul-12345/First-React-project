import React, { useContext } from "react";
import React, { useState } from 'react'
import SearchBar from './SearchBar';
import '../App.css'
import SelectMenu from './SelectMenu';
import CountriesList from './CountriesList';
import { ThemeContext } from "../contexts/ThemeContexts";
const Home = () => {
  const [data] = useContext(ThemeContext)
    const [query, setQuery] = useState("")
  return (
    <>
      <main>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery}></SearchBar>
          <SelectMenu setQuery={setQuery}></SelectMenu>
        </div>
        <CountriesList query={query}></CountriesList>
      </main>
    </>
  );
};

export default Home;
