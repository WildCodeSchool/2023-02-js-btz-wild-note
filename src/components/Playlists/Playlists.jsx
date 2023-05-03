import React, {useState} from 'react'
import {IoIosClose} from 'react-icons/io'
import '../Playlists/Playlists.css';


const Playlists = () => {

  const [displayForm, setDisplayForm] = useState(false)
  const [newPlaylist, setNewPlaylist] = useState([])

  const toggleForm = () => {
    setDisplayForm(!displayForm);
  };

  const handleAddPlaylist = (e) => {
    e.preventDefault();
    const name = e.target.elements['playlist-name'].value;
    const description = e.target.elements['description'].value;
    const playlist = { name, description };
    setNewPlaylist([...newPlaylist, playlist]);
    e.target.reset();
  };

  return (
    <div className='playlists-container'>
      <div className='header-container'>
        <h2>MY PLAYLISTS</h2>
        <h2 className='add-playlist-btn' onClick={toggleForm}>+</h2>
      </div>  
        {displayForm ? <div className='new-playlist-form'>
          <form onSubmit={handleAddPlaylist}>
              <label htmlFor='playlist-name'>Playlist name</label>
              <input type="text" name="playlist-name" id="playlist-name" placeholder="Playlist name" />
              <label htmlFor='description'>Playlist description</label>
              <textarea name="description" id="description" placeholder="Describe your playlist..." />
              <button className='add-playlist'>Add</button>
          </form>
        </div> : <></>}
      
      <div className='playlist-cards'>
        {newPlaylist.map((playlist, index) => (
          <div key={index} className='playlist-card'>
            <div className='close-btn'>
              <IoIosClose />
            </div>
            <span></span>
            <h3>{playlist.name}</h3>  
            <p>{playlist.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Playlists