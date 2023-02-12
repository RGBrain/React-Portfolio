import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Hero from './Components/Hero'
import About from './Components/About'
import Projects from './Components/Projects';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Hero />
      <Router>
        {/* Need to change the layout so that the Hero is within the other components */}
        <Navbar />
          <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              {/* <Route path="/contact" element={<Search/>} /> */}
          </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
