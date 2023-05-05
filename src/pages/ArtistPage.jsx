import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ArtistPage.css';
import Logo from '../assets/logo-sanstexte.png';
import FavoriteButton from '../components/FavoriteButton/FavoriteButton';
import PlayBtn from '../components/Player-components/PlayBtn';

import { IoIosArrowBack } from 'react-icons/io';

import Navbar from '../components/navbar/Navbar';


const ArtistPage = ({handlePlay, handlePrev, handleNext, isPlaying}) => {

    const [artist, setArtist] = useState({});
    const [tracks, setTracks] = useState([]);
    const [albums, setAlbums] = useState([]);
    const {id} = useParams();
    const navigate = useNavigate()



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

    const previousPage = () => {
        navigate(-1);
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
                <FavoriteButton type={"artist"} id={artist.id}/>
            </div>
            <PlayBtn id={artist.id} handlePlay={handlePlay} isPlaying={isPlaying}/>
        </div>
        <ul className='top-tracks-container'>
            {tracks.map(track => 
                <li key={track.id} className='track'>
                    <div className='favorite-btn-container'>
                    <FavoriteButton style={{width: '1.4em'}} type={"track"} id={track.id} />
                    </div>
                    <div className='track-infos-container'>
                    <p className='track-name'>{track.name}</p>
                    <p className='duration'>{duration(track.duration_ms)}</p>
                    </div>
                    <div className='btn-play-container'>
                        <PlayBtn id={track.id} handlePlay={handlePlay} isPlaying={isPlaying}/>
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