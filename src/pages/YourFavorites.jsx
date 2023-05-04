import { Link } from 'react-router-dom';
import { useState } from 'react';
import {IoIosArrowBack, IoIosShuffle, IoIosMore, IoMdShare} from 'react-icons/io'
import { BsFillPencilFill } from 'react-icons/bs'
import Navbar from '../components/navbar/Navbar';
import PlayBtn from '../components/Player-components/PlayBtn';
import PlayerShuffle from '../components/Player-components/PlayerShuffle';
import './YourFavorites.css';

const YourFavorites = () => {
    const [displayOptions, setDisplayOptions] = useState(false);

    const toggleOptions = () => {
        setDisplayOptions(!displayOptions);
      };

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
                <h1>Your Favorites</h1>
                <PlayBtn />
            </div>
            

            <Navbar /> 
        </div>
        
    )
}

export default YourFavorites;