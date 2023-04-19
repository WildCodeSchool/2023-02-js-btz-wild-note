import {React, useState} from 'react'
import SearchBar from '../components/SearchBar/SearchBar'
import DefaultSearchPage from '../components/DefaultSearchPage/DefaultSearchPage';
import "./SearchPages.css"
import SearchResults from '../components/SearchResults/SearchResults'

const SearchPages = () => {

  const [searchResults, setSearchResults] = useState(false);

  const handleClickSearch = () => {
    setSearchResults(!searchResults);
  }

return(
  <div>
    { searchResults ? <SearchResults /> : <DefaultSearchPage handleClickSearch={handleClickSearch}/> }
 </div>
)


}

export default SearchPages