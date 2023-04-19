import logoavectexte from '../assets/logo-avectexte.png';
import PreferenceList from '../components/Preference/PreferenceList';
import './PreferencePage.css';

const PreferencePage = () => {
    return(
        <div className="preference-page">
            <div className="logo-container">
                <img src={logoavectexte} alt="logo wildnote" />
            </div>
            <div className='preference-form-container'>
                <p className='choose'>Choose your style!</p>
                <PreferenceList />
            </div>
            
        </div>
        
    )
}

export default PreferencePage