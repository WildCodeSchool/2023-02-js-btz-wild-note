import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Library from './pages/Library';
import Login from './pages/Login';


import SearchPages from './pages/SearchPages';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/library' element={<Library />} />
        <Route path='/search' element={<SearchPages/>}/>
      </Routes>
    </Router>
  );
}

export default App;
