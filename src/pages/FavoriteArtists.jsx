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
                    <li className='artist-container'>
                        <span></span>
                        <h3>Artist</h3>
                    </li>
                    <li className='artist-container'>
                        <span></span>
                        <h3>Artist</h3>
                    </li>
                    <li className='artist-container'>
                        <span></span>
                        <h3>Artist</h3>
                    </li>
                    <li className='artist-container'>
                        <span></span>
                        <h3>Artist</h3>
                    </li>
                </ul>
            </div>
            <Navbar />
        </div>
    )
}

export default FavoriteArtists