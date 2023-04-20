import { React, useState } from 'react'
import { IoIosSearch } from "react-icons/io"
import "./SearchBar.css"



const SearchBar = ({handleClickSearch}) => {

  const [search, setSearch] = useState('')

  return (
    <div className='SearchBar'>
      <div className='logo-search'><IoIosSearch style={{ fill: "#bebebe", border: "none" }} /></div>
      <input
        className="SearchText"
        type="text"
        onChange={(e) => {
          setSearch(e.target.value)

        }}
        placeholder="Search by title ..."

      />
      <button type='submit' className='btn-submit' onClick={handleClickSearch}>Submit</button>

    </div>
  )
}

export default SearchBar