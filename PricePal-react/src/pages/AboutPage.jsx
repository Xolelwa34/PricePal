import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="about-page">
    <nav className="navbar">
  <Link to="/" className="nav-link">Home</Link>
  <Link to="/about" className="nav-link">About</Link>
</nav>
      <section className="about-hero">
        <h1>About PricePal</h1>
        <p>Your go-to platform for smarter shopping decisions.</p>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          At PricePal, we aim to empower shoppers by providing transparent, real-time price comparisons to help you save money and time.
        </p>
      </section>

      <section className="story">
        <h2>Our Story</h2>
        <p>
          PricePal was founded with a simple idea: making online shopping stress-free and cost-effective. Our journey started in 2024 with a commitment to simplifying how people shop and compare prices.
        </p>
      </section>

      <section className="benefits">
        <h2>What Makes Us Special?</h2>
        <ul>
          <li>Real-time price updates from multiple platforms.</li>
          <li>Easy-to-use interface designed for everyone.</li>
          <li>Dedicated to helping you save both money and time.</li>
        </ul>
      </section>

      <footer className="footer">
        <p>&copy; 2024 PricePal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;

