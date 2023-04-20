import axios from 'axios';
import { useState, useEffect } from 'react';
import PreferenceGenreCard from './PreferenceGenreCard';
import './Preference.css';

const PreferenceList = () => {

    const [genre, setGenre] = useState([])

    useEffect(() => {
        axios.get("https://api.deezer.com/genre/")
        .then((res) => res.data)
        .then((data) => setGenre(data))
    }, [])

    return(
        <div className='cards-container'>
            {genre &&
                genre.map((genre) =>
                <PreferenceGenreCard key={genre.id} genre={genre}/> )
            }
        </div>
    )
}

export default PreferenceList