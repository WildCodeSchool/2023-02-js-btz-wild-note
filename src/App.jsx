import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Library from './pages/Library';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <Router>
      <SearchBar/>
      <Routes>
        <Route path='/library' element={<Library />} />
      </Routes>
    </Router>
  );
}

export default App;
