import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Library from './pages/Library';
<<<<<<< HEAD:src/App.js
import Login from './pages/Login';

=======
import SearchBar from './components/SearchBar/SearchBar';
>>>>>>> dev:src/App.jsx

function App() {
  return (
    <Router>
      <SearchBar/>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/library' element={<Library />} />

      </Routes>
    </Router>
  );
}

export default App;
