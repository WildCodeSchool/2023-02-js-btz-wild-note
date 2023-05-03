import { React, useState} from 'react';
import { IoIosSearch } from "react-icons/io";
import "./SearchBar.css";
import { Link } from 'react-router-dom';
import { FaPaperPlane, FaSearch } from 'react-icons/fa';




const SearchBar = () => {

  const [search, setSearch] = useState('');
  console.log(search);



  return (
    <div className='SearchBar'>
      <div className='logo-search'><FaSearch style={{ fill: "#bebebe", border: "none", height: '1.2em', width: '1.2em'}} /></div>
      <input
        className="SearchText"
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value)

        }}
        placeholder="Search by title ..."

      />
      <Link to={`/search/${search}`}><FaPaperPlane className='btn-send'/></Link>

    </div>
  )
}

export default SearchBar;