import React from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import Navbar from '../components/navbar/Navbar';
import "./SearchPages.css";
import Historic from '../components/Historic/Historic';
import GenreSorting from '../components/GenreSorting/GenreSorting';


const SearchPages = () => {


return(
  <div className='searchpage'>
    <SearchBar />
    <Historic />
    <GenreSorting />
    <Navbar />
 </div>
)
}

export default SearchPages

