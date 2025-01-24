import React from 'react'
import './CountriesListShimmer.css'
const CountriesListShimmer = () => {
    const arr = Array.from({length:10}).map((val,i)=>{
        return <div key = {i} className="country-card shimmer-card"></div>
    })
  return (
    <>
    <div className="countries-container">
        {arr}
    </div>
    </>
  )
}

export default CountriesListShimmer