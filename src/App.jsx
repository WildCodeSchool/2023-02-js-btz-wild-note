import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Library from './pages/Library';
import Login from './pages/Login';
import PreferencePage from './pages/PreferencePage';
import Navbar from './components/navbar/Navbar';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/preference' element={<PreferencePage />} />
        <Route path='/library' element={<Library />} />
      </Routes>
      <Navbar />
    </Router>
  );
}
export default App;
