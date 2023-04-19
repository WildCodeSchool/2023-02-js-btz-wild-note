import {React, useState, useEffect} from 'react'
import CardGender from '../components/Card/CardGender'
import CardAlbum from '../components/Card/CardAlbum'
import SearchBar from '../components/SearchBar/SearchBar'
import "./SearchPages.css"
import axios from 'axios'



const SearchPages = () => {
  const[albums,setAlbums]=useState([])
  const [genders,setGender]=useState([])


    useEffect(()=>{
      axios
      .get('https://wild-note.free.beeceptor.com/musics')
      .then((res)=>res.data)
      .then((data)=>setAlbums(data))

    },[])  

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
              
              {albums&&
              albums.map((album)=>(<CardAlbum key={album.id} album={album}/>))} 

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