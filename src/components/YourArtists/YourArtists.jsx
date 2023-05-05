import React, {useState} from 'react';
import './YourArtists.css';

const YourArtists = () => {
  const [favs, setFavs] = useState(() => {
        const saveFavTrack = localStorage.getItem('artist');
        console.log(saveFavTrack);
        const parseFavTrack = JSON.parse(saveFavTrack);

        
        
        return (parseFavTrack || []).map(keyId => JSON.parse(localStorage.getItem(keyId)));
    });
    console.log(favs);
  return (
    <div className='artists-container'>
        <h2>YOUR ARTISTS</h2>
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
    </div>
  )
}

export default YourArtists