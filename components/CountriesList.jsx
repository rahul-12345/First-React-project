import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard.jsx";
import CountriesListShimmer from "./CountriesListShimmer.jsx";
// import countriesData from "../CountriesData.js";


const CountriesList = ({ query }) => {
  const [countriesData,setCountriesData] =  useState([]);
  useEffect(()=>{
    fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {
      setCountriesData(data)
    });
  },[])
 

  const filterdCountries = countriesData.filter((country) =>
    country.name.common.toLowerCase().includes(query) ||  country.region.toLowerCase().includes(query)
  );
  return (
    <>
    {
       filterdCountries.length === 0 ? <CountriesListShimmer></CountriesListShimmer> : <div className="countries-container">
       { filterdCountries.map((country) => {
         return (
           <CountryCard
             key={country.name.common}
             name={country.name.common}
             population={country.population.toLocaleString("en-In")}
             region={country.region}
             capital={country.capital?.[0]}
             flags={country.flags.svg}
             data = {country}
           ></CountryCard>
         );
       })}
     </div>
    }
      
    </>
  );
};

export default CountriesList;
