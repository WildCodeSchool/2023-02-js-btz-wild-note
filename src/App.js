import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Library from './pages/Library';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/library' element={<Library />} />
      </Routes>
      <Navbar />
    </Router>
  );
}

export default App;
