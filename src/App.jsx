import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Library from './pages/Library';
import Login from './pages/Login';
import PreferencePage from './pages/PreferencePage';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import Navbar from './components/navbar/Navbar';
import SearchBar from './components/SearchBar/SearchBar';
import Player from './pages/Player';
import SearchPages from './pages/SearchPages'
import PlayerBtnMini from './components/Player-components/PlayerBtnMini';
import SearchResults from './pages/SearchResults';
import PageAlbum from './pages/PageAlbum';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/preference' element={<PreferencePage />} />
        <Route path='/library' element={<Library />} />

        <Route path='/player' element={<Player />} />
        <Route path='/playermini' element={<PlayerBtnMini />} />
       

       
        <Route path='/settings' element={<Settings />}/>
        <Route path='/settings/profile' element={<Profile />}/>

        <Route path='/search/:result' element={<SearchResults />} />
        <Route path='/album' element={<PageAlbum/>}/>
        <Route path='/Player' element={<Player />} />
      </Routes>
    </Router>
  );
}
export default App;
