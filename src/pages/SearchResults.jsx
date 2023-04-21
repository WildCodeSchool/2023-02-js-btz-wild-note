import React, { useEffect, useState } from 'react';
import './SearchResults.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SearchResults = () => {

  const [result, setResult] = useState([]);
  const params = useParams();
console.log(params)

  useEffect(() => {
    axios
    .get(`https://wild-note.free.beeceptor.com/musics/${params}`)
    .then((res) => setResult(res.data.musics))
  }, [params]);

  return (
    <div>
      {
      result &&
      result.map((music) => <p key={music.id}>{music.titre}</p>)}
    </div>
  )
}

export default SearchResults