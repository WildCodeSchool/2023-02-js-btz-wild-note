import { React, useState, useEffect } from 'react'
import axios from 'axios'
import './PageAlbum.css'
import Logo from '../assets/logo-sanstexte.png';
import Navbar from '../components/navbar/Navbar';
import { useParams, Link, useNavigate} from 'react-router-dom';
import FavoriteButton from '../components/FavoriteButton/FavoriteButton';
import { BsPlayFill } from 'react-icons/bs';
import { IoIosArrowBack } from 'react-icons/io';
import PlayBtn from '../components/Player-components/PlayBtn';

const PageAlbum = ({favoriteTrack, setFavoriteTrack, handlePlay, handlePrev, handleNext, isPlaying}) => {

const [album, setAlbum] = useState({})
const {id} = useParams();
const navigate = useNavigate()

useEffect(() => {
  axios
    .get(`https://api.spotify.com/v1/albums/${id}`, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
      },
    })
    .then((res) => {setAlbum(res.data)
      console.log(res.data)
    });
  }, [])

  const duration = (ms) => {
    let min = Math.floor(ms / 60000);
    let sec = ((ms % 60000) / 1000).toFixed(0);
    sec = sec < 10 ? '0' + sec : sec;
    return `${min}:${sec}`
  }

  const previousPage = () => {
    navigate(-1);
  }

return (
  <div className='PageAlbum'>
    <div className='page-album-header'>
      <img className='logo-back-home' src={Logo} alt='logo'/>
      <IoIosArrowBack className='back-arrow' onClick={previousPage}/>
    </div>
    <h3>{album.artists && album.artists[0].name}</h3>
    <div className='album-cover'>
      <img src={album.images && album.images[0].url}/>
    </div>
    <div className='album-title'>
      <div className='album-favorite-btn'>
        <FavoriteButton />
      </div>
      <h4>- {album.name} -</h4>
      <PlayBtn id={album.id} handlePlay={handlePlay} isPlaying={isPlaying}/>
    </div>
    <ul className='track-list'>
      {album.tracks && album.tracks.items.map((track)=> 
        <li key={track.id} className='track'>
          <div className='favorite-btn-container'>
            <FavoriteButton style={{width: '1.4em'}} favoriteTrack={favoriteTrack} setFavoriteTrack={setFavoriteTrack} track={track}/>
          </div>
          <div className='track-infos-container'>
            <p className='track-name'>{track.name}</p>
            <p className='duration'>{duration(track.duration_ms)}</p>
          </div>
          <PlayBtn id={track.id} handlePlay={handlePlay} isPlaying={isPlaying}/>
        </li>
      )}
    </ul>
    <Navbar />
  </div>
)
}

export default PageAlbum
