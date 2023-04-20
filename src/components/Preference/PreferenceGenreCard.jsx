import './Preference.css';

const PreferenceGenreCard = ({genre}) => {
    return(
        <div className='preference-cards'>
            <span className="genre-img"></span>
            <h2> {genre.genre} </h2>
        </div>
    )
}

export default PreferenceGenreCard