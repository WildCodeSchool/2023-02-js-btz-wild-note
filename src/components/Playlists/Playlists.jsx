import React, {useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import { BsFillPencilFill } from 'react-icons/bs'
import {MdDelete} from 'react-icons/md'
import {IoMdShare, IoIosMore} from 'react-icons/io'
import '../Playlists/Playlists.css';


const Playlists = ({displayForm, setDisplayForm, newPlaylist, setNewPlaylist, flipCard, setFlipCard, 
  toggleForm, handleAddPlaylist, handleFlipCard, handleRemovePlaylist}) => {

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
        <Link to={`/playlists/your-favorites`}><div className="playlist-card">
            <div className='card-front'>
              <span></span>
              <h3>Your Favorites</h3>  
              <p>All the tracks you liked!</p>
            </div>
        </div></Link>  
          {newPlaylist.map((playlist, index) => (
            <Link to={`/playlists/${playlist.name}`}><div key={index} className={`playlist-card 
            ${flipCard === -1 ? "" : flipCard === index + 1 ? "flipped" : ""}`} 
            >
              <div className='card-front'>
                  <div className='more-container'>
                    <IoIosMore className='more-btn'onClick={() => handleFlipCard(index +1)}/>
                  </div>
                  <span></span>
                  <h3>{playlist.name}</h3>  
                  <p>{playlist.description}</p>
                </div>
                <div className='card-back'>
                  <IoIosMore className='playlist-icons' onClick={() => handleFlipCard(index +1)}/>
                  <BsFillPencilFill className='playlist-icons'/>
                  <MdDelete className='playlist-icons' onClick={() => handleRemovePlaylist(index)}/>
                  <IoMdShare className='playlist-icons'/>
                </div>
            </div></Link>
        ))} 
      </div>
    </div>
  )
}

export default Playlists