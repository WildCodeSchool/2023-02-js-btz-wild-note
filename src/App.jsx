import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Library from './pages/Library';
import Login from './pages/Login';
import PreferencePage from './pages/PreferencePage';
import SearchPages from './pages/SearchPages'
import PageAlbum from './pages/PageAlbum';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/preference' element={<PreferencePage />} />
        <Route path='/library' element={<Library />} />
        <Route path='/search' element={<SearchPages/>}/>
        <Route path='/album' element={<PageAlbum/>}/>
      </Routes>
    </Router>
  );
}
export default App;
