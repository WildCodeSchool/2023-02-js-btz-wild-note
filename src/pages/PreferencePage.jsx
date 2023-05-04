import logoavectexte from '../assets/logo-avectexte.png';
import GenreList from '../components/Preference/GenreList';
import './PreferencePage.css';

const PreferencePage = ({genres, selectedGenres, setSelectedGenres}) => {
    return(
        <div className="preference-page">
            <div className="logo-container">
                <img src={logoavectexte} alt="logo wildnote" />
            </div>
            <div className='preference-form-container'>
                <p className='choose'>Choose your style!</p>
                
            </div>
            <GenreList genres={genres} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres}/>
        </div>
        
    )
}

export default PreferencePage