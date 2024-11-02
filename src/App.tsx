import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import Note from './pages/Note/Note';
import Header from './components/layout/Header';

function App() {
  return (
    <>
      <Header />
      <Router>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/note">Note</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/note" element={<Note />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
