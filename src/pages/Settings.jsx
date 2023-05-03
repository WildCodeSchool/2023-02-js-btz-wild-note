import { Link } from 'react-router-dom';
import logoavectexte from '../assets/logo-avectexte.png';
import Navbar from '../components/navbar/Navbar';
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
            <div className='options-container'>
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