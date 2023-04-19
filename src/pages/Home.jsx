import React, { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import Logo from '../assets/logo-avectexte.png';
import Recommendations from '../components/Recommendations/Recommendations';
import YourArtists from '../components/YourArtists/YourArtists';
import './Home.css';


const Home = () => {

    const [isFavorite, setIsFavorite] = useState(false);

    const addFavorite = () => {
        setIsFavorite(!isFavorite);
    }

  return (
    <div className='Home'>
        <img src={Logo} className='logo-home' alt='logo'/>
        <Recommendations isFavorite={isFavorite} addFavorite={addFavorite}/>
        <YourArtists isFavorite={isFavorite} addFavorite={addFavorite}/>
        <Navbar />
    </div>
  )
}

export default Home;