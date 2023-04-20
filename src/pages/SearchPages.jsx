import {React, useState, useEffect} from 'react'
import SearchBar from '../components/SearchBar/SearchBar'
import "./SearchPages.css"
import Historic from '../components/Historic/Historic';
import GenreSorting from '../components/GenreSorting/GenreSorting';
import axios from 'axios';

const SearchPages = () => {

  const [music, setMusic]=useState([])

  useEffect(()=>{
    axios
    .get('https://run.mocky.io/v3/5bac33a7-3cd6-491e-8310-64175716f913')
    .then((res)=>setMusic(res.data.musique))
  },[])

return(
  <div className='searchpage'>
    <SearchBar />
    <Historic />
    <GenreSorting music={music} />
 </div>
)
}

export default SearchPages