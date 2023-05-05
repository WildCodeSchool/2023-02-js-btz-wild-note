import React from 'react';
import { useContext } from 'react';
import Navbar from '../components/navbar/Navbar';
import Logo from '../assets/logo-avectexte.png';
import Recommendations from '../components/Recommendations/Recommendations';
import YourArtists from '../components/YourArtists/YourArtists';
import './Home.css';
import  { ThemeContext } from '../components/SettingsFeatures/ThemeProvider';


const Home = ({genres, selectedGenres}) => {

  return (
    <>
    <div className='Home'>
        <div  className='logo-home'>
          <img src={Logo} alt='logo'/>
        </div>
        <Recommendations genres={genres} selecteGenres={selectedGenres} />
        <YourArtists />
        <Navbar />
    </div>
    </>
  )
}

export default Home;