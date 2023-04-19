import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Library from './pages/Library';
import Navbar from './components/navbar/Navbar';
import Login from './pages/Login';
import SearchBar from './components/SearchBar/SearchBar';
import Player from './pages/Player';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/library' element={<Library />} />
        <Route path='/Player' element={<Player />} />
      </Routes>
    </Router>
  );
}

export default App;
