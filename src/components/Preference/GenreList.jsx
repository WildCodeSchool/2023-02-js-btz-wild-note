import React, { useState, useEffect } from 'react';
import GenreCard from './GenreCard';
import NextPage from './NextPage';
import axios from 'axios';

const GenreList = () => {


  const [genres, setGenres] = useState([]);

    useEffect(() => {
        axios.get("https://api.spotify.com/v1/recommendations/available-genre-seeds", {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
            },
          })
        .then((res) => res.data.genres)
        .then((data) => setGenres(data))
    }, [])

    return (
        <div className="cards-container">
          <NextPage />
            {genres &&
                genres.map((genre) =>
                <GenreCard key={genre} genre={genre}/> )
            }
        </div>
    )
}

export default GenreList;