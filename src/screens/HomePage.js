import React from 'react';
import Header from '../components/homepage/Header';
import ProductGrid from '../components/homepage/ProductGrid';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
      <div className="hero">
        
          <div className="hero-buttons">
            <button className="btn-primary">Buy Now</button>
            <button className="btn-secondary">Shop All</button>
          </div>
        
      </div>
      <ProductGrid />
    </div>
  );
};

export default HomePage;
