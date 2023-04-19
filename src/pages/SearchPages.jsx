import {React, useState} from 'react'
import CardGender from '../components/Card/CardGender'
import SearchBar from '../components/SearchBar/SearchBar'
import "./SearchPages.css"
import axios from 'axios'
import { useEffect } from 'react'

const SearchPages = () => {
  const [genders,setGender]=useState([])

    useEffect(()=>{
      axios
      .get('https://wild-note.free.beeceptor.com/musics')
      .then((res)=>res.data)
      .then((data)=>setGender(data))
    },[])

  return (
    <div className='Searchpage'>
        <SearchBar/>
        <div className='historic-container'>
            <h2>HISTORIQUE</h2>
            <div className='historic-card'>

            </div>
        </div>
        <div className='classbygender'>
            <h2>PAR GENRE</h2>
            <div className='cardgender'>
              {genders&&
              genders.map((gender)=>(<CardGender key={gender.id} genre={gender.genre}/>))}
            </div>
        </div>

    </div>
  )
}

export default SearchPages