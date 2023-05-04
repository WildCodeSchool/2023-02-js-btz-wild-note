import { useState } from 'react';
import { Link } from 'react-router-dom';
import {IoIosArrowBack, IoIosShuffle, IoIosMore, IoMdShare} from 'react-icons/io'
import { BsFillPencilFill } from 'react-icons/bs'
import Navbar from '../components/navbar/Navbar';
import './FavoriteAlbums.css';

const FavoriteAlbums = () => {
    const [displayOptions, setDisplayOptions] = useState(false);

    const toggleOptions = () => {
        setDisplayOptions(!displayOptions);
      };

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
                    <li className='album-container'>
                        <span></span>
                        <h3>Album Title</h3>
                        <h4>Artist</h4>
                    </li>
                    <li className='album-container'>
                        <span></span>
                        <h3>Album Title</h3>
                        <h4>Artist</h4>
                    </li>
                    <li className='album-container'>
                        <span></span>
                        <h3>Album Title</h3>
                        <h4>Artist</h4>
                    </li>
                    <li className='album-container'>
                        <span></span>
                        <h3>Album Title</h3>
                        <h4>Artist</h4>
                    </li>
                </ul>
            </div>
            <Navbar />
        </div>
    )
}

export default FavoriteAlbums