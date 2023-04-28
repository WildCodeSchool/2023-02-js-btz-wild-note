import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Logo from '../assets/logo-avectexte.png';
import Recommendations from '../components/Recommendations/Recommendations';
import YourArtists from '../components/YourArtists/YourArtists';
import './Home.css';


const Home = () => {

  return (
    <div className='Home'>
        <div  className='logo-home'>
          <img src={Logo} alt='logo'/>
        </div>
        <Recommendations />
        <YourArtists />
        <Navbar />
    </div>
  )
}

export default Home;