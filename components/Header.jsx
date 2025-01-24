import React, { useContext, useState } from 'react'
import { ThemeContext } from '../contexts/ThemeContexts';

const Header = () => {
  const [isDark,setDark] = useContext(ThemeContext)
   if(isDark){
    document.body.classList.add('dark');
   }
   else{
    document.body.classList.remove('dark');
   }
  
  return (
    <header className="header-container">
    <div className="header-content">
      <h2 className="title">
        <a href="/">Where in the world?</a>
      </h2>
      <p className="theme-changer" onClick={()=>{
        localStorage.setItem('isDarkMode',!isDark)
        setDark(!isDark);
      }}>
      <i className={`fa-solid fa-${isDark ? 'sun': 'moon'}`}></i>
        &nbsp;&nbsp;{isDark ? 'Dark' : 'Light'} Mode
      </p>
    </div>
  </header>
  
  )
}

export default Header