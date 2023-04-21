import {React,useState,useEffect} from 'react'
import axios from 'axios'
import '../pages/PageAlbum.css'
import Logo from '../assets/logo-avectexte.png';
import SearchBar from '../components/SearchBar/SearchBar';
import Navbar from '../components/navbar/Navbar';

const PageAlbum = () => {
    const [titleLists, setTitleLists]=useState([])

    useEffect(()=>{
        axios
        .get('https://run.mocky.io/v3/5bac33a7-3cd6-491e-8310-64175716f913')
        .then((res)=> res.data)
        .then((data)=>setTitleLists(data.musique))
        
    },[])

    

  return (
    <div className='PageAlbum'>
         <img src={Logo} className='logo-home' alt='logo'/>
         <SearchBar/>
        <h2>Titre album </h2>

         <div>{
            titleLists &&
            titleLists.map((album)=><p>{album.album}</p>)
            }</div>

        <Navbar/> 
        
    </div>
  )
}

export default PageAlbum