import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ArtistPage.css';
import Logo from '../assets/logo-sanstexte.png';
import FavoriteButton from '../components/FavoriteButton/FavoriteButton';
import { BsPlayFill } from 'react-icons/bs';
import { IoIosArrowBack } from 'react-icons/io';
import Navbar from '../components/navbar/Navbar';


const ArtistPage = () => {

    const [artist, setArtist] = useState({});
    const [tracks, setTracks] = useState([]);
    const [albums, setAlbums] = useState([]);
    const {id} = useParams();
    const navigate = useNavigate()

    const previousPage = () => {
        navigate(-1);
      }


    useEffect(() => {
        axios
            .get(`https://api.spotify.com/v1/artists/${id}`, {
                headers: {
                    'Authorization': `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
                },
            })
            .then((res) => {
                console.log(res.data);
                setArtist(res.data)});
    }, [])

    useEffect(() => {
        axios
            .get(`https://api.spotify.com/v1/artists/${id}/top-tracks?market=FR`, {
                headers: {
                    'Authorization': `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
                }
            })
            .then((res) => setTracks(res.data.tracks))
    }, [])

    useEffect(() => {
        axios
            .get(`https://api.spotify.com/v1/artists/${id}/albums`, {
                headers: {
                    'Authorization': `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
                }
            })
            .then((res) => setAlbums(res.data.items))
    }, [])


    const duration = (ms) => {
        let min = Math.floor(ms / 60000);
        let sec = ((ms % 60000) / 1000).toFixed(0);
        sec = sec < 10 ? '0' + sec : sec;
        return `${min}:${sec}`
      }

  return (
    <div className='ArtistPage'>
        <div className='page-album-header'>
            <img className='logo-back-home' src={Logo}/>
            <IoIosArrowBack className='back-arrow' onClick={previousPage}/>
        </div>
        <h3>{artist.name}</h3>
        <div className='artist-img'>
            <img src={artist.images && artist.images[0].url} />
        </div>
        <div className='artist-btn-container'>
            <div className='artist-favorite-btn'>
                <FavoriteButton />
            </div>
            <div className='artist-play-btn'>
                <BsPlayFill style={{ height: '3em', width: '3em', fill: "#cbd1F8" }} />
            </div>
        </div>
        <ul className='top-tracks-container'>
            {tracks.map(track => 
                <li key={track.id} className='track'>
                    <div className='favorite-btn-container'>
                    <FavoriteButton style={{width: '1.4em'}}/>
                    </div>
                    <div className='track-infos-container'>
                    <p className='track-name'>{track.name}</p>
                    <p className='duration'>{duration(track.duration_ms)}</p>
                    </div>
                    <div className='btn-play-container'>
                        <div className='play-btn-track'>
                            <BsPlayFill style={{ height: '1.4em', width: '1.4em', fill: "#cbd1F8" }} />
                        </div>
                    </div>
                </li>
            )}
        </ul>
        <h2>DISCOGRAPHY</h2>
        <div className='artist-albums-container'>
            {albums.map((album) => 
                    <Link key={`${album.id}-link`} to={`/albums/${album.id}`}>
                        <div className={'albums-card-container'}>
                            <div className={'albums-img-container'}>{!!(album.images && album.images.length) && <img src={album.images[0].url}/>}</div>
                            <div className='title-container'>
                                <h3>{album.name}</h3>
                            </div>
                        </div>
                    </Link>)}
        </div>
        <Navbar />

    </div>
  )
}

export default ArtistPage