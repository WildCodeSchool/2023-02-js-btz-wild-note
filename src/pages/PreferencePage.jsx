import logoavectexte from '../assets/logo-avectexte.png';
import GenreSorting from '../components/GenreSorting/GenreSorting';
import './PreferencePage.css';

const PreferencePage = () => {
    return(
        <div className="preference-page">
            <div className="logo-container">
                <img src={logoavectexte} alt="logo wildnote" />
            </div>
            <div className='preference-form-container'>
                <p className='choose'>Choose your style!</p>
                
            </div>
            <GenreSorting />
        </div>
        
    )
}

export default PreferencePage