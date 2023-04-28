import { React, useState, useEffect } from 'react'
import axios from 'axios'
import '../pages/PageAlbum.css'
import Logo from '../assets/logo-avectexte.png';
import SearchBar from '../components/SearchBar/SearchBar';
import Navbar from '../components/navbar/Navbar';

const PageAlbum = () => {
  const [titleLists, setTitleLists] = useState([])
  const [onloadGenre, setOnloadGenre] = useState(true)
  const [covers, setCovers]=useState([])


  useEffect(() => {
    axios
      .get(`https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks`, {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
        },
      })
      .then((res) => res.data.items.map((item) => item.name))
      .then((data) => setTitleLists(data))
      .catch(console.log)
      setOnloadGenre(false)
    }, [])
    
    useEffect(()=>{
      axios
      .get('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy', {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,

      },
    })
    .then((res)=>[res.data.images[0].url])
    .then((data)=> setCovers(data))
    .catch(console.log)
    setOnloadGenre(false)
  },[])

  return (
    <div className='PageAlbum'>
      <img src={Logo} className='logo-home' alt='logo' />
      <SearchBar />
      {covers.length > 0 && <img src={covers[0]} alt='cover' key={covers[0]} className='album-cover'/>}
     
      <h2>Titre album </h2>
      
      <div className='track-list'>
        {titleLists.map((trackName) => <p key={trackName} className='track'>{trackName}</p>)}
      </div>
      <Navbar />
    </div>
  )
}

export default PageAlbum
