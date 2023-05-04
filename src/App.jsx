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
import SignUpPage from './pages/SignUp';
import YourFavorites from './pages/YourFavorites';
import FavoriteArtists from './pages/FavoriteArtists';
import FavoriteAlbums from './pages/FavoriteAlbums';



const accessToken = process.env.REACT_APP_ACCESS_TOKEN;

function App() {
  const [genres, setGenres] = useState([])
  const [selectedGenres, setSelectedGenres] = useState([])
  const [isDark, setIsDark] = useState(true)
  const [isDiscoModeActive, setIsDiscoModeActive] = useState(false);
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
   
      <div className={isDark ?null: "dark-theme"}>
        <div className={isDiscoModeActive ? 'discotheme' : null}>
        
    <Router>
      <Routes>
        <Route path='/' element={<Home genres={genres} selectedGenres={selectedGenres} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/preference' element={<PreferencePage genres={genres} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} />} />
        <Route path='/library' element={<Library />} />
        <Route path='/player' element={<Player />} />
        <Route path='/playermini' element={<PlayerBtnMini />} />
        <Route path='/settings' element={<Settings setIsDark={setIsDark} isDark={isDark} setIsDiscoModeActive={setIsDiscoModeActive} isDiscoModeActive={isDiscoModeActive} />}/>
        <Route path='/settings/profile' element={<Profile />}/>
        <Route path='/search' element={<SearchPages />} />
        <Route path='/search/:research' element={<SearchResults />} />
        <Route path='/album/:id' element={<PageAlbum/>}/>
        <Route path='/Player' element={<Player />} />
        <Route path='/library/:playlistName' element={<Library />} />
        <Route path='/library/your-favorites' element={<YourFavorites />} />
        <Route path='/library/favorite-artists' element={<FavoriteArtists />} />
        <Route path='/library/favorite-albums' element={<FavoriteAlbums />} />
      </Routes>
    </Router>
    </div>
    </div>
  
  );
}
export default App;
