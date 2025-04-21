import React from 'react';
import './SectionCard.css';

const SectionCard = ({ title }) => {
  const images = [
    { label: 'Furniture', src: '/images/furniture.png' },
    { label: 'Electronics', src: '/images/electronics.png' },
    { label: 'Winter', src: '/images/winter.png' },
  ];

  return (
    <div className="section-card">
      <h2>{title}</h2>
      <div className="product-list">
        {images.map((item, index) => (
          <div key={index} className="product-item">
            <img src={item.src} alt={item.label} />
            <p>{item.label}</p>
          </div>
        ))}
      </div>
      <button className="shop-btn">Shop All</button>
    </div>
  );
};

export default SectionCard;
