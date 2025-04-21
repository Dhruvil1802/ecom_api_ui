import React from 'react';
import Footer from '../components/homepage/Footer';
import Header from '../components/homepage/Header';
import ProductGrid from '../components/homepage/ProductGrid';
import SideMenu from '../components/homepage/SideMenu';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
      <SideMenu />

      <div className="hero">
        <div className="hero-buttons">
          <button className="btn-primary">Buy Now</button>
          <button className="btn-secondary">Shop All</button>
        </div>
      </div>

      <ProductGrid />
      <Footer/>
    </div>
  );
};

export default HomePage;
