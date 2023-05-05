import { useState } from 'react';
import { Link } from 'react-router-dom';
import {IoIosArrowBack, IoIosMore, IoMdShare} from 'react-icons/io'
import { BsFillPencilFill } from 'react-icons/bs'
import Navbar from '../components/navbar/Navbar';
import './FavoriteAlbums.css';

const FavoriteAlbums = () => {
    const [displayOptions, setDisplayOptions] = useState(false);
    const toggleOptions = () => {
        setDisplayOptions(!displayOptions);
      };

    const [favs, setFavs] = useState(() => {
        const saveFavTrack = localStorage.getItem('album');
        console.log(saveFavTrack);
        const parseFavTrack = JSON.parse(saveFavTrack);

        return (parseFavTrack || []).map(keyId => JSON.parse(localStorage.getItem(keyId)));
    });
    console.log(favs);


    return(
        <div className='fav-albums-page'>
            <div className='playlist-icons-option'>
                <Link to="/library"><IoIosArrowBack className='back-arrow'/></Link>
                <IoIosMore className='more-options-btn' onClick={toggleOptions}/>
            </div>
            
            {displayOptions ? <div className='options-container'>
                <BsFillPencilFill className='option-icons'/>
                <IoMdShare className='option-icons'/>
            </div> : <></>}
            <div className='fav-albums-header'>
                <h1>Favorite Albums</h1>
            </div>
            <div className='fav-albums-container'>
                <ul className='albums-list'>
                    {favs.map((album) => 
                        <li key={album.name} className='fav-album-container'>
                            <div className='fav-album-cover'>
                                <img src={album.images && album.images[0].url}/>
                            </div>
                            <div className='fav-album-info'>
                                <h3>{album.name}</h3>
                                <h4>{album.artists && album.artists[0].name}</h4> 
                            </div>
                        </li>
                    )}    
                </ul>
            </div>
            <Navbar />
        </div>
    )
}

export default FavoriteAlbums