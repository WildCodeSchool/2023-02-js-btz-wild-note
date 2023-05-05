import React, {useState} from 'react';
import Favorites from '../components/Favorites/Favorites';
import Playlists from '../components/Playlists/Playlists';
import './Library.css'
import Navbar from '../components/navbar/Navbar';
import SearchBar from '../components/SearchBar/SearchBar';

const Library = () => {
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
    toggleForm()
  };

  const handleFlipCard = (index) => {
    setFlipCard(index === flipCard ? -1 : index)
  }

  const handleRemovePlaylist = (index) => {
    setNewPlaylist(newPlaylist.filter((playlist, i) => i !== index));
  }

  return (
    <div className='library'>
        <SearchBar/>
        <Favorites />
        <Playlists displayForm={displayForm} setDisplayForm={setDisplayForm} newPlaylist={newPlaylist} setNewPlaylist={setNewPlaylist} flipCard={flipCard} 
        setFlipCard={setFlipCard} toggleForm={toggleForm} handleAddPlaylist={handleAddPlaylist} handleFlipCard={handleFlipCard} handleRemovePlaylist={handleRemovePlaylist}/>
        <Navbar />
    </div>
  )
}

export default Library