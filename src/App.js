import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// TODO: ADD README-Generator screenshot

function App() {
  return (
    <div>
      <Hero />
      <Router>
        {/* Need to change the layout so that the Hero is within the other components */}
        <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
          </Routes>
        <Footer />
      </Router>

    </div>


  );
}

export default App;
