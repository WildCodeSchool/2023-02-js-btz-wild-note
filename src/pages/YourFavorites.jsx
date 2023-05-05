import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {IoIosArrowBack, IoIosMore, IoMdShare} from 'react-icons/io'
import { BsFillPencilFill } from 'react-icons/bs'
import Navbar from '../components/navbar/Navbar';
import PlayBtn from '../components/Player-components/PlayBtn';
import PlayerShuffle from '../components/Player-components/PlayerShuffle';
import './YourFavorites.css';

const YourFavorites = ({handlePlay, handlePrev, handleNext, isPlaying, type, id, name, ...rest}) => {
    const [displayOptions, setDisplayOptions] = useState(false);

    const toggleOptions = () => {
        setDisplayOptions(!displayOptions);
      };

    
    const [favs, setFavs] = useState(() => {
        const saveFavTrack = localStorage.getItem('track');
        console.log(saveFavTrack);
        const parseFavTrack = JSON.parse(saveFavTrack);

        
        
        return (parseFavTrack || []).map(keyId => JSON.parse(localStorage.getItem(keyId)));
    });
    console.log(favs);

    

    return(
        <div className='your-favorites-page'>
            <div className='playlist-icons-option'>
                <Link to="/library"><IoIosArrowBack className='back-arrow'/></Link>
                <IoIosMore className='more-options-btn' onClick={toggleOptions}/>
            </div>
            
            {displayOptions ? <div className='options-container'>
                <BsFillPencilFill className='option-icons'/>
                <IoMdShare className='option-icons'/>
            </div> : <></>}

            <span></span>
            <div className='playlist-header'>
                <PlayerShuffle />
                <h1>My Favorites</h1>
                <PlayBtn id={0} handlePlay={handlePlay} isPlaying={isPlaying}/>
            </div>
            <div className='favorite-tracks-container'>
                {favs.map((track) =>   
                <div key={`fav-${track.id}`} className='track-container'>
                    <div className='track-info-container'>
                        <h3 className='track-name'>{track.name}</h3>
                        <p>{track.artists[0].name}</p>
                    </div>
                        <PlayBtn id={track.id} handlePlay={handlePlay} isPlaying={isPlaying}/> 
                </div>

                    
)}
            </div>

            <Navbar /> 
        </div>
        
    )
}

export default YourFavorites;