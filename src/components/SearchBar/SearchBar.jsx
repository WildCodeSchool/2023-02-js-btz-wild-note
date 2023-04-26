import { React, useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import "./SearchBar.css";
import { Link } from 'react-router-dom';



const SearchBar = () => {

  const [search, setSearch] = useState('');
  console.log(search);


  return (
    <div className='SearchBar'>
      <div className='logo-search'><IoIosSearch style={{ fill: "#bebebe", border: "none" }} /></div>
      <input
        className="SearchText"
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value)

        }}
        placeholder="Search by title ..."

      />
      <Link to={`/search/${search}`}><button type='submit' className='btn-submit'>Submit</button></Link>

    </div>
  )
}

export default SearchBar