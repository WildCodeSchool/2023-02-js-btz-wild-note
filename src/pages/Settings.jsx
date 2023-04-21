import logoavectexte from '../assets/logo-avectexte.png';
import ThemeSwitch from '../components/SettingsFeatures/ThemeSwitch';
import "./Settings.css";

const Settings = () => {
    return(
        <div className="settings-page">
           <div className="logo-container">
                <img src={logoavectexte} alt="logo wildnote" />
            </div>
            <div className='settings-container'>
                <ThemeSwitch />
            </div>
        </div>
        
    )
}

export default Settings