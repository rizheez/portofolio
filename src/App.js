import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import AOS from 'aos';
import React from 'react';
import Navbar from './components/Navbar';
import 'aos/dist/aos.css';


function App() {
  AOS.init();

  return (
    <Router>
      <div className="font-opensans">
        <Navbar />

        <Routes>
          <Route path="/portofolio/about" element={ <About /> } />
          <Route path="/portofolio/project" element={ <Project /> } />
          <Route path="/portofolio/contact" element={ <Contact /> } />
          <Route path="/portofolio" element={ <Home /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
