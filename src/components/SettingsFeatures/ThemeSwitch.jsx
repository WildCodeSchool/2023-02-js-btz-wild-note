import { useState } from 'react'

import "./ThemeSwitch.css";
import ThemeSwitchDisco from './ThemeSwitchDisco';
// import Switch from "react-switch";

const ThemeSwitch = () => {
    const [isLight, setIsLight] = useState(false)

    const toggleTheme = () => {
        setIsLight(!isLight)
    }

    return(
        <div className="btn-mode-container disco-button">
            <ThemeSwitchDisco />
        <div className={isLight ? "light-theme" : "dark-theme"} onClick={toggleTheme}>
            <div>{isLight ? "Dark Mode" : "Light Mode"}</div>
        </div>
        </div>
    )
}

export default ThemeSwitch