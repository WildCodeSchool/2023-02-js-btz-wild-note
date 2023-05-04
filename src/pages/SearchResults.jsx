import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './SearchResults.css';
import axios from 'axios';
import Navbar from '../components/navbar/Navbar';

const SearchResults = () => {


  const [results, setResults] = useState({})

  const {research} = useParams();


  useEffect(() => {
    axios
    .get(`https://api.spotify.com/v1/search?q=${research}&type=artist,track,album`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`
      },
    })
    .then((res) => {
      setResults(res.data);
      console.log(res.data)
    })
  }, []);



  const objKeys = Object.keys(results) // ['album', 'artist']

  return (
    <div className='search-results'>
      { objKeys.map((objKey) => (
        <div key={`${objKey}-container`} className={`${objKey}-container`}>
            <h2 style={{textTransform: 'uppercase'}}>{objKey}</h2>
            <div className={`${objKey}-search-container`}>
              {
                results[objKey].items.map(elem => elem.type !== 'track' ?
                  <Link key={`${elem.id}-link`} to={`/${objKey}/${elem.id}`}><div className={`${objKey}-card-container`}>
                    <div className={`${objKey}-img-container`}>{!!(elem.images && elem.images.length) && <img src={elem.images[0].url}/>}</div>
                    <div className='title-container'><h3>{elem.name}</h3></div>
                  </div></Link>
                  : <p key={`${elem.id}-track`}>{elem.name}</p>
                )
              }
            </div>
        </div>
      ))
      }
      <Navbar />
    </div>
  )
}

export default SearchResults