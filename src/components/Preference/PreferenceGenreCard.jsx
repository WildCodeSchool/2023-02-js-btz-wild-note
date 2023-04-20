import './Preference.css';

const PreferenceGenreCard = ({genre}) => {
    return(
        <div className='preference-cards'>
            <div className="genre-img">
               <img src={genre.picture_small} alt={genre.name} /> 
            </div>
            <h2> {genre.name} </h2>
        </div>
    )
}

export default PreferenceGenreCard