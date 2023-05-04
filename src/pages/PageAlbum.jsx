import { React, useState, useEffect } from 'react'
import axios from 'axios'
import '../pages/PageAlbum.css'
import Logo from '../assets/logo-sanstexte.png';
import Navbar from '../components/navbar/Navbar';
import { useParams} from 'react-router-dom';
import FavoriteButton from '../components/FavoriteButton/FavoriteButton';
import { BsPlayFill } from 'react-icons/bs';


const PageAlbum = () => {

  const [album, setAlbum] = useState({})
  const {id} = useParams();


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

  return (
    <div className='PageAlbum'>
      <img className='logo-back-home' src={Logo}/>
      <h3>{album.artists && album.artists[0].name}</h3>
      <div className='album-cover'>
        <img src={album.images && album.images[0].url}/>
      </div>
      <div className='album-title'>
        <FavoriteButton />
        <h4>- {album.name} -</h4>
        <div className='play-btn-mini'>
          <BsPlayFill style={{ height: '3em', width: '3em', fill: "#cbd1F8" }} />
        </div>
      </div>
      <ul className='track-list'>
        {album.tracks && album.tracks.items.map((track)=> 
          <li key={track.id} className='track'>
            <div className='favorite-btn-container'>
              <FavoriteButton style={{width: '1.4em'}}/>
            </div>
            <div className='track-infos-container'>
              <p className='track-name'>{track.name}</p>
              <p className='duration'>{duration(track.duration_ms)}</p>
            </div>
            <div className='btn-play-container'>
              <div className='play-btn-mini'>
                <BsPlayFill style={{ height: '1.4em', width: '1.4em', fill: "#cbd1F8" }} />
              </div>
            </div>
          </li>
        )}
      </ul>


      {/* {covers.length > 0 && <img src={covers[0]} alt='cover' key={covers[0]} className='album-cover'/>}
     
      <h2>Titre album </h2>
      
      <div className='track-list'>
        {titleLists.map((trackName) => <p key={trackName} className='track'>{trackName}</p>)}
      </div> */}
      <Navbar />
    </div>
  )
}

export default PageAlbum
