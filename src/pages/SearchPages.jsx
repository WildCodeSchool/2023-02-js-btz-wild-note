import React, {useState, useEffect} from 'react'
import SearchBar from '../components/SearchBar/SearchBar'
import "./SearchPages.css"
import Historic from '../components/Historic/Historic';
import GenreSorting from '../components/GenreSorting/GenreSorting';
import axios from 'axios';

const SearchPages = () => {


return(
  <div className='searchpage'>
    <SearchBar />
    <Historic />
    <GenreSorting />
 </div>
)
}

export default SearchPages