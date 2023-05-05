import { Link } from 'react-router-dom';
import logoavectexte from '../assets/logo-avectexte.png';
import Navbar from '../components/navbar/Navbar';
// import ThemeSwitchDisco from '../components/SettingsFeatures/ThemeSwitchDisco';
import "./Settings.css";
import ThemeSwitchDisco from '../components/SettingsFeatures/ThemeSwitchDisco';
import ThemeSwitch from '../components/SettingsFeatures/ThemeSwitch';

const Settings = ({...props}) => {
    return(
        <div className="settings-page">
            <div className="logo-container">
                <img src={logoavectexte} alt="logo wildnote" />
            </div>
            <div className='settings-container'>
                <ThemeSwitch {...props} />
            </div>
            <div className='profile-options-container'>
                <Link to="/settings/profile"><h2>My profile</h2></Link>
            </div>
            <div className='deconnect-container'>
                <Link to="/login"><h2>Deconnect</h2></Link>
            </div>
            <Navbar />
        </div>
        
    )
}

export default Settings