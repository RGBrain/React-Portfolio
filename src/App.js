import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <div>
      <Hero />
      <Router>
        <Navbar />
          <Routes>
              <Route path="React-Portfolio/" element={<Home />} />
              <Route path="React-Portfolio/projects" element={<Projects />} />
              <Route path="React-Portfolio/contact" element={<Contact />} />
          </Routes>
        <Footer />
      </Router>

    </div>


  );
}

export default App;
