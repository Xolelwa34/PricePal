// src/App.jsx
import React from 'react';
import './App.css'; // Your custom CSS file
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/compare" element={<Home />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

