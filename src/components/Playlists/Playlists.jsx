import React, {useState} from 'react'
import { BsFillPencilFill } from 'react-icons/bs'
import {MdDelete} from 'react-icons/md'
import {IoMdShare} from 'react-icons/io'
import '../Playlists/Playlists.css';


const Playlists = () => {

  const [displayForm, setDisplayForm] = useState(false)
  const [newPlaylist, setNewPlaylist] = useState([])
  const [flipCard, setFlipCard] = useState(-1)

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

  const handleFlipCard = (index) => {
    setFlipCard(index === flipCard ? -1 : index)
  }

  const handleRemovePlaylist = (index) => {
    setNewPlaylist(newPlaylist.filter((playlist, i) => i !== index));
  }

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
        <div className="playlist-card" onClick={handleFlipCard}>
            <div className='card-front'>
              <span></span>
              <h3>Your Favorites</h3>  
              <p>All the tracks you liked!</p>
            </div>
            <div className='card-back'>
              <BsFillPencilFill className='playlist-icons'/>
              <IoMdShare className='playlist-icons'/>
            </div>
        </div>  
          {newPlaylist.map((playlist, index) => (
            <div key={index} className={`playlist-card 
            ${flipCard === -1 ? "" : flipCard === index + 1 ? "flipped" : ""}`} 
            onClick={() => handleFlipCard(index +1)}>
              <div className='card-front'>
                  <span></span>
                  <h3>{playlist.name}</h3>  
                  <p>{playlist.description}</p>
                </div>
                <div className='card-back'>
                  <BsFillPencilFill className='playlist-icons'/>
                  <MdDelete className='playlist-icons' onClick={() => handleRemovePlaylist(index)}/>
                  <IoMdShare className='playlist-icons'/>
                </div>
            </div>
        ))} 
      </div>
    </div>
  )
}

export default Playlists