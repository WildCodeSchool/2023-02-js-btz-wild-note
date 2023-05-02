import { React, useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import "./SearchBar.css";
import { Link } from 'react-router-dom';
import { FaPaperPlane } from 'react-icons/fa';
import mini_logo from '../../assets/logo-sanstexte.png';


const SearchBar = () => {

  const [search, setSearch] = useState('');
  console.log(search);


  return (
    <div className='search-components'>
      <div className='mini-logo'><img src={mini_logo} alt="wildnote-logo"/></div>
      <div className='SearchBar'>
        <div className='logo-search'><IoIosSearch style={{ fill: "#bebebe", border: "none", height: '1.5em', width: '1.5em'}} /></div>
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
    </div>
  )
}

export default SearchBar;