import React, { useEffect } from 'react';
import logo from './logo-white-cropped.png';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Projects from './components/Projects.js';
import Home from './components/Home.js';
import Contact from './components/Contact.js';
import About from './components/About.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <BrowserRouter>
      <div className="App">
        <div className="background">
            <div className="navigation">
                <Link to="/" className="item"><img src={logo} className="logo-image" alt="Wolfe" /></Link>
              <div className="navigation-sub">
                <Link to="/about" className="item">About</Link>
                <Link to="/projects" className="item">Projects</Link>
                <Link to="/contact" className="item">Contact</Link>
              </div>
            </div>
          <div className="content">
            <div className="container">
              <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/projects" element={<Projects/>} />
                <Route path="/contact" element={<Contact/>} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
