import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Library from './pages/Library';
import Login from './pages/Login';
import PreferencePage from './pages/PreferencePage';
import Navbar from './components/navbar/Navbar';
import SearchBar from './components/SearchBar/SearchBar';
import SearchPages from './pages/SearchPages'
import SearchResults from './pages/SearchResults';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/preference' element={<PreferencePage />} />
        <Route path='/library' element={<Library />} />
        <Route path='/search' element={<SearchPages/>}/>
        <Route path='/search/:result' element={<SearchResults />} />
      </Routes>
    </Router>
  );
}
export default App;
