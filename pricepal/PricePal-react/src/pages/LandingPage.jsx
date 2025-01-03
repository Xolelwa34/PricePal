import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Navbar */}
      <nav className="navbar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Welcome to PricePal</h1>
          <p className="hero-subtitle">Compare prices, save smarter, and shop with confidence!</p>
          <Link to="/compare" className="cta-button">
            Start Comparing
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2 className="features-title">Why Choose PricePal?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Compare Prices</h3>
            <p>Find the best deals from multiple stores in one place.</p>
          </div>
          <div className="feature-card">
            <h3>Save Money</h3>
            <p>Make informed shopping decisions and save more.</p>
          </div>
          <div className="feature-card">
            <h3>Shop Smarter</h3>
            <p>Discover products that match your budget and preferences.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <ol>
          <li>Search for a product.</li>
          <li>Compare prices across stores.</li>
          <li>Save money and shop smarter!</li>
        </ol>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 PricePal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;

