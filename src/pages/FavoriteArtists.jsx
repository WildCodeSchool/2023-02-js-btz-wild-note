import { useState } from 'react';
import { Link } from 'react-router-dom';
import {IoIosArrowBack, IoIosShuffle, IoIosMore, IoMdShare} from 'react-icons/io'
import { BsFillPencilFill } from 'react-icons/bs'
import Navbar from '../components/navbar/Navbar';
import './FavoriteArtists.css';

const FavoriteArtists = () => {
    const [displayOptions, setDisplayOptions] = useState(false);
    const toggleOptions = () => {
        setDisplayOptions(!displayOptions);
      };

    const [favs, setFavs] = useState(() => {
        const saveFavTrack = localStorage.getItem('artist');
        console.log(saveFavTrack);
        const parseFavTrack = JSON.parse(saveFavTrack);

        return (parseFavTrack || []).map(keyId => JSON.parse(localStorage.getItem(keyId)));
    });
    console.log(favs);
    return(
        <div className='fav-artists-page'>
            <div className='playlist-icons-option'>
                <Link to="/library"><IoIosArrowBack className='back-arrow'/></Link>
                <IoIosMore className='more-options-btn' onClick={toggleOptions}/>
            </div>
            
            {displayOptions ? <div className='options-container'>
                <BsFillPencilFill className='option-icons'/>
                <IoMdShare className='option-icons'/>
            </div> : <></>}
            <div className='fav-artists-header'>
                <h1>Favorite Artists</h1>
            </div>
            <div className='fav-artists-container'>
                <ul className='artists-list'>
                    {favs.map((artist) => 
                        <li key={artist.name} className='fav-artist-container'>
                            <div className='fav-artist-cover'>
                                <img src={artist.images && artist.images[0].url}/>
                            </div>
                            <div className='fav-artist-info'>
                                <h3>{artist.name}</h3>
                            </div>
                        </li>
                    )} 
                </ul>
            </div>
            <Navbar />
        </div>
    )
}

export default FavoriteArtists