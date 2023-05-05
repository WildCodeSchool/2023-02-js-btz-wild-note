import React from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import Navbar from '../components/navbar/Navbar';
import "./SearchPages.css";
import History from '../components/History/History';
import GenreSorting from '../components/GenreSorting/GenreSorting';


const SearchPages = () => {


return(
  <div className='searchpage'>
    <SearchBar />
    <History />
    <GenreSorting />
    <Navbar />
 </div>
)
}

export default SearchPages

