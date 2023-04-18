import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Library from './pages/Library';
import PlayerReplayBtn from './components/Player-components/PlayerReplayBtn';
import Player from './pages/Player';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/library' element={<Library />} />
        <Route path='/Player' element={<Player />} />
      </Routes>
    </Router>
  );
}

export default App;
