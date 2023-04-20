import { useState, useEffect } from 'react'
import axios from 'axios'
import logoavectexte from '../assets/logo-avectexte.png';
import CardGenre from '../components/Card/CardGenre';

import './PreferencePage.css';

const PreferencePage = () => {
    const [genres, setGenres]=useState([])

    useEffect(()=>{
        axios
        .get('https://run.mocky.io/v3/5bac33a7-3cd6-491e-8310-64175716f913')
        .then((res)=>setGenres(res.data.musique))
      },[])
  
    return(
        <div className="preference-page">
            <div className="logo-container">
                <img src={logoavectexte} alt="logo wildnote" />
            </div>
            <div className='preference-form-container'>
                <p className='choose'>Choose your style!</p>
                <div className='classbygenre'>
                    <div className='cardgenre'>
                        {genres &&
                        genres.map((genres)=>(<CardGenre key={genres.id} genres={genres}/>))}
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}

export default PreferencePage