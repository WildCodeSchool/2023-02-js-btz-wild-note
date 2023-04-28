import { useState } from 'react'
import logoavectexte from '../../assets/logo-avectexte.png';
import "./ThemeSwitch.css";
import ThemeSwitchDisco from './ThemeSwitchDisco';
// import Switch from "react-switch";

const ThemeSwitch = () => {
    const [isLight, setIsLight] = useState(true)

    const toggleTheme = () => {
        setIsLight(!isLight)
    }

    return(
        <div className={isLight ? "light-theme" : "dark-theme"}>
            <div className={isLight ? "light-btn" : "dark-btn"} onClick={toggleTheme}>{isLight ? "Dark Mode" : "Light Mode"}</div>
            {/* <ReactSwitch/> */}
            <div className={isLight ? "light-btn" : "disco-btn"} onClick={toggleTheme}>{isLight ? "Disco Mode" : "Light Mode"}</div>
        </div>
    )
}

export default ThemeSwitch