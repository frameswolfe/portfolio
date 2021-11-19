import React from 'react';
import logo from './logo.png';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Projects from './components/Projects.js';
import Articles from './components/Articles.js';
import About from './components/About.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Routes>
          <Route exact path="/" element={<Projects/>} />
          <Route path="/articles" element={<Articles/>} />
          <Route path="/about" element={<About/>} />
        </Routes>

        <div className="navigation">
          <img src={logo} className="logo-image" alt="Wolfe" />
          <div className="navigation-sub">

            <Link to="/" className="item">Projects</Link>
            <Link to="/articles" className="item">Articles</Link>
            <Link to="/about" className="item">About</Link>

          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
