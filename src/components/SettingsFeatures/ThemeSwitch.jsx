

import "./ThemeSwitch.css";
import ThemeSwitchDisco from './ThemeSwitchDisco';


const ThemeSwitch = ({isDark,setIsDark, ...props}) => {
    

    const toggleTheme = () => {
        setIsDark(!isDark)
    }

    return(
        <div className="btn-mode-container disco-button">
            <ThemeSwitchDisco {...props}/>
        <div className={isDark ? "light-theme" : "dark-theme"} onClick={toggleTheme}>
            <div>{isDark ? "Light Mode" : "Dark Mode"}</div>
        </div>
        </div>
    )
}

export default ThemeSwitch