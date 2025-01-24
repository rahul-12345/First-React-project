
import { Outlet } from 'react-router';
import Header from './components/Header';
import { ThemeContext } from './contexts/ThemeContexts';
import { useState } from 'react';

export const App = () => {
    const [isDark,setDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')))
    return (
        <ThemeContext value={[isDark,setDark]}>
            <Header></Header>
            <Outlet></Outlet>
        </ThemeContext>
    )
}

export default App;