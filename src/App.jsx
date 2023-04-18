import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Library from './pages/Library';
import Navbar from './components/navbar/Navbar';
import Login from './pages/Login';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <Router>
      <SearchBar/>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/library' element={<Library />} />

      </Routes>
      <Navbar />
    </Router>
  );
}

export default App;
