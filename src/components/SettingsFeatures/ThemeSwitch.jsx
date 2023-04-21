import { useState } from 'react'
import logoavectexte from '../../assets/logo-avectexte.png';
import "./ThemeSwitch.css";

const ThemeSwitch = () => {
    const [isLight, setIsLight] = useState(true)

    const toggleTheme = () => {
        setIsLight(!isLight)
    }

    return(
        <div className={isLight ? "light-theme" : "dark-theme"}>
            <button className={isLight ? "light-btn" : "dark-btn"} onClick={toggleTheme}>{isLight ? "Light Mode" : "Dark Mode"}</button>
        </div>
        
    )
}

export default ThemeSwitch