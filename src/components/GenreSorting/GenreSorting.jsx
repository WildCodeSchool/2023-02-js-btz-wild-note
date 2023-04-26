import React, { useState, useEffect } from 'react';
import './GenreSorting.css';
import CardGenre from '../Card/CardGenre';
import axios from 'axios';


const GenreSorting = () => {


  const [genres, setGenre] = useState([]);

    useEffect(() => {
        axios.get("https://api.spotify.com/v1/recommendations/available-genre-seeds", {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
            },
          })
        .then((res) => res.data.genres)
        .then((data) => setGenre(data))
    }, [])

    return (
        <div className="cards-container">
          <h2>GENRE</h2>
            {genres &&
                genres.map((genre) =>
                <CardGenre key={genre} genre={genre}/> )
            }
        </div>
    )
}

export default GenreSorting;