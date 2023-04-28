import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {useEffect, useState} from 'react';
import Home from './pages/Home';
import Library from './pages/Library';
import Login from './pages/Login';
import PreferencePage from './pages/PreferencePage';
import Settings from './pages/Settings';
import Profile from './pages/Profile';

import Player from './pages/Player';
import SearchPages from './pages/SearchPages'
import PlayerBtnMini from './components/Player-components/PlayerBtnMini';
import SearchResults from './pages/SearchResults';
import PageAlbum from './pages/PageAlbum';

const accessToken = process.env.REACT_APP_ACCESS_TOKEN;

function App() {
  const [genres, setGenres] = useState([])
  const [selectedGenres, setSelectedGenres] = useState([])
  useEffect(() => {
    axios.get("https://api.spotify.com/v1/recommendations/available-genre-seeds", {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
        },
      })
    .then((res) => res.data.genres)
    .then((data) => setGenres(data))
  }, [])

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home genres={genres} selectedGenres={selectedGenres} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/preference' element={<PreferencePage genres={genres} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} />} />
        <Route path='/library' element={<Library />} />
        <Route path='/player' element={<Player />} />
        <Route path='/playermini' element={<PlayerBtnMini />} />
        <Route path='/settings' element={<Settings />}/>
        <Route path='/settings/profile' element={<Profile />}/>
        <Route path='/search' element={<SearchPages />} />
        <Route path='/search/:result' element={<SearchResults />} />
        <Route path='/album' element={<PageAlbum/>}/>
        <Route path='/Player' element={<Player />} />
      </Routes>
    </Router>
  );
}
export default App;
