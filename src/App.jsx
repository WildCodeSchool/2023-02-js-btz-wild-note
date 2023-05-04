import './App.css';
import { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import ThemeProvider from './components/SettingsFeatures/ThemeProvider';



const accessToken = process.env.REACT_APP_ACCESS_TOKEN;

function App() {
  const [isLight, setIsLight] = useState(false);

  const toggleTheme = () => {
    setIsLight(!isLight);
  };
  

  return (
   
      
        
     <ThemeProvider  value={{ isLight, toggleTheme }}> 
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
        <Route path='/search' element={<SearchPages />} />
        <Route path='/search/:result' element={<SearchResults />} />
        <Route path='/album' element={<PageAlbum/>}/>
        <Route path='/Player' element={<Player />} />
      </Routes>
      
    </Router>
    </ThemeProvider>
  );
}
export default App;
