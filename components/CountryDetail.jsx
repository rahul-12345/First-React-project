import React, { useEffect, useState } from 'react'
import './CountryDetail.css'
import { Link, useLocation, useParams } from 'react-router-dom'

export const CountryDetail = () => {
  const[countryData,setCountryData] = useState(null);
  const[notFound,setCountryNotFound] = useState(false)
  const params = useParams()
  const countryName = params.country;
  const {state} = useLocation();

  function updateData(country){
    setCountryData({
      name:country.name.common,
      nativeName: Object.values(country.name.nativeName)[0].common,
      population : country.population,
      region:country.region,
      capital: country.capital.join(","),
      subregion:country.subregion,
      flag: country.flags.svg,
      tdl:country.tld,
      language:Object.values(country.languages).join(''),
      currencies: Object.values(country.currencies)[0].name,
      borders:['india']
     });
  }
  useEffect(()=>{
    if(state){
      updateData(state);
      return;
     }
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then((res) => res.json())
    .then(([country])=>{
      updateData(country)
    })
    .catch((error)=>{
      setCountryNotFound(true);
    })
    
  },[countryName])
  if(notFound){
    return <div>country not found</div>
  }
  return countryData ===null ? 'Loading..' : (
    <div className="country-details-container">
    <span className="back-button" onClick={()=>history.back()}>
      <i className="fa-solid fa-arrow-left" />
      &nbsp; Back
    </span>
    <div className="country-details">
      <img src={countryData.flag} alt="" />
      <div className="details-text-container">
        <h1>{countryData.name}</h1>
        <div className="details-text">
          <p>
            <b>Native Name: </b>
            <span className="native-name">{countryData.nativeName}</span>
          </p>
          <p>
            <b>Population: </b>
            <span className="population">{countryData.population}</span>
          </p>
          <p>
            <b>Region: </b>
            <span className="region">{countryData.region}</span>
          </p>
          <p>
            <b>Sub Region: {countryData.subregion}</b>
            <span className="sub-region" />
          </p>
          <p>
            <b>Capital: </b>
            <span className="capital">{countryData.capital}</span>
          </p>
          <p>
            <b>Top Level Domain: </b>
            <span className="top-level-domain">{countryData.tdl}</span>
          </p>
          <p>
            <b>Currencies: </b>
            <span className="currencies">{countryData.currencies}</span>
          </p>
          <p>
            <b>Languages: </b>
            <span className="languages">{countryData.language}</span>
          </p>
        </div>
        {  countryData.borders.length!==0 && 
          (<div className="border-countries">
          <b>Border Countries: </b>&nbsp;
          {
            countryData.borders.map((border)=><Link to = {`/${border}`}>{countryData.borders}</Link>)
          }
        </div>)
        }
      </div>
    </div>
  </div>
  )
}

export default CountryDetail