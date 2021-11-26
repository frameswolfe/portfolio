import React from 'react';
import logo from './logo.png';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Projects from './components/Projects.js';
import Home from './components/Home.js';
import Music from './components/Music.js';
import About from './components/About.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <div className="navigation">
          <Link to="/" className="item"><img src={logo} className="logo-image" alt="Wolfe" /></Link>
          <div className="navigation-sub">

            <Link to="/about" className="item">About</Link>
            <Link to="/projects" className="item">Projects</Link>
            <Link to="/music" className="item">Music</Link>

          </div>
          <div className="logo-image-mirror"></div>
        </div>
        <div className="sidebar-container">
        <div className="sidebar sidebar-left"></div>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/music" element={<Music/>} />
        </Routes>
        <div className="sidebar sidebar-right"></div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
