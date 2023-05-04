import React, { useState, useEffect } from 'react';
import GenreCard from './GenreCard';
import NextPage from './NextPage';
import axios from 'axios';

const GenreList = ({genres, selectedGenres, setSelectedGenres}) => {

    return (
        <div className="cards-container">
          <NextPage />
            {genres &&
                genres.map((genre) =>
                <GenreCard key={genre} genre={genre} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} /> )
            }
        </div>
    )
}

export default GenreList;