import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Library from './pages/Library';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/library' element={<Library />} />
      </Routes>
    </Router>
  );
}

export default App;
