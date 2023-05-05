import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
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
import ArtistPage from './pages/ArtistPage';



const accessToken = process.env.REACT_APP_ACCESS_TOKEN;

function App() {
  const [genres, setGenres] = useState([])
  const [selectedGenres, setSelectedGenres] = useState([])
  const favoriteAlbums = localStorage.getItem("album");
  const favoriteArtists = localStorage.getItem("artist");
  const favoriteTracks = localStorage.getItem("track");
  const [isDark, setIsDark] = useState(true)
  const [isDiscoModeActive, setIsDiscoModeActive] = useState(false);
  const [favoriteTrack, setFavoriteTrack] = useState([])
  const { id } = useParams(); // récupère l'id de l'album à partir de l'URL
  const [tracks, setTracks] = useState([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState("");

  useEffect(() => {
    axios
      .get(`https://api.spotify.com/v1/albums/${id}/tracks`, {
          headers: {
              Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
          },
      })
          .then((response) => response.json())
          .then((data) => {
              const tracksData = data.items.map((item) => ({
                  name: item.name,
                  url: item.preview_url,
                  duration: item.duration_ms,
              }));
              setTracks(tracksData);
          });
  }, [id]);


  const handlePlay = ({id}) => {

      const audioDom = document.createElement('audio');
      const audioSrcDom = document.createElement('source');
      audioDom.id = id;

      audioSrcDom.src = "https://p.scdn.co/mp3-preview/788a028fa3a33141c817b1064e3159006edeaa8d?cid=3123a573de044583b8cdbb3f1de35a70";
      audioDom.appendChild(audioSrcDom);

    const rootDom = document.getElementById('root');

    rootDom.appendChild(audioDom)

      const audioPlayer = document.getElementById(id);
      if (!isPlaying) {
          audioPlayer.play();
          setIsPlaying(id);
      } else {
          audioPlayer.pause();
          setIsPlaying("");
      }
  };

  const handleNext = () => {
      if (currentTrackIndex === tracks.length - 1) {
          setCurrentTrackIndex(0);
      } else {
          setCurrentTrackIndex(currentTrackIndex + 1);
      }
  };

  const handlePrev = () => {
      if (currentTrackIndex === 0) {
          setCurrentTrackIndex(tracks.length - 1);
      } else {
          setCurrentTrackIndex(currentTrackIndex - 1);
      }
  };

  const handleEnded = () => {
      if (currentTrackIndex === tracks.length - 1) {
          setCurrentTrackIndex(0);
      } else {
          setCurrentTrackIndex(currentTrackIndex + 1);
      }
  };


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
   
      <div className={isDark ? 'light-theme': "dark-theme"}>
        <div className={isDiscoModeActive ? 'discotheme' : 'light-theme'}>
        
    <Router>
      <Routes>
        <Route path='/' element={<Home genres={genres} selectedGenres={selectedGenres} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/preference' element={<PreferencePage genres={genres} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} />} />
        <Route path='/library' element={<Library />} />
        <Route path='/player' element={<Player handlePlay={handlePlay} handlePrev={handlePrev} handleNext={handleNext} isPlaying={isPlaying} />} />
        <Route path='/playermini' element={<PlayerBtnMini />} />
        <Route path='/settings' element={<Settings setIsDark={setIsDark} isDark={isDark} setIsDiscoModeActive={setIsDiscoModeActive} isDiscoModeActive={isDiscoModeActive} />}/>
        <Route path='/settings/profile' element={<Profile />}/>
        <Route path='/search' element={<SearchPages />} />
        <Route path='/search/:research' element={<SearchResults />} />
        <Route path='/albums/:id' element={<PageAlbum handlePlay={handlePlay} handlePrev={handlePrev} handleNext={handleNext} isPlaying={isPlaying} favoriteTrack={favoriteTrack} setFavoriteTrack={setFavoriteTrack} />}/>
        <Route path='/artists/:id' element={<ArtistPage handlePlay={handlePlay} handlePrev={handlePrev} handleNext={handleNext} isPlaying={isPlaying} />} />
        <Route path='/library/:playlistName' element={<Library />} />
        <Route path='/library/your-favorites' element={<YourFavorites handlePlay={handlePlay} handlePrev={handlePrev} handleNext={handleNext} isPlaying={isPlaying} favoriteTrack={favoriteTrack} setFavoriteTrack={setFavoriteTrack}/>} />
        <Route path='/library/favorite-artists' element={<FavoriteArtists handlePlay={handlePlay} handlePrev={handlePrev} handleNext={handleNext} isPlaying={isPlaying} />} />
        <Route path='/library/favorite-albums' element={<FavoriteAlbums handlePlay={handlePlay} handlePrev={handlePrev} handleNext={handleNext} isPlaying={isPlaying} />} />
      </Routes>
    </Router>
    </div>
    </div>
  
  );
}
export default App;
