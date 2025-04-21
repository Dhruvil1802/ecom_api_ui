import React from 'react';
import './SectionCard.css';

const sectionImages = {
  'NEW ARRIVALS': [
    { label: 'Electronics', src: '/images/hairdryer.png' },
    { label: 'Fitness', src: '/images/dumbbell.png' },
    { label: 'Electronics', src: '/images/cap.png' },
    { label: 'Furniture', src: '/images/jacket.png' }
  ],
  'SPRING BEAUTY': [
    { label: 'Electronics', src: '/images/hairdryer.png' },
    { label: 'Fitness', src: '/images/dumbbell.png' },
    { label: 'Electronics', src: '/images/cap.png' },
    { label: 'Furniture', src: '/images/jacket.png' }
  ],
  'DAILY ESSENTIALS': [
    { label: 'Electronics', src: '/images/hairdryer.png' },
    { label: 'Fitness', src: '/images/dumbbell.png' },
    { label: 'Electronics', src: '/images/cap.png' },
    { label: 'Furniture', src: '/images/jacket.png' }
  ],
  'DAILY ESSENTIALS1': [
    { label: 'Electronics', src: '/images/hairdryer.png' },
    { label: 'Fitness', src: '/images/dumbbell.png' },
    { label: 'Electronics', src: '/images/cap.png' },
    { label: 'Furniture', src: '/images/jacket.png' }
  ],
  'DAILY ESSENTIALS2': [
    { label: 'Electronics', src: '/images/hairdryer.png' },
    { label: 'Fitness', src: '/images/dumbbell.png' },
    { label: 'Electronics', src: '/images/cap.png' },
    { label: 'Furniture', src: '/images/jacket.png' }
  ],
  'DAILY ESSENTIALS3': [
    { label: 'Electronics', src: '/images/hairdryer.png' },
    { label: 'Fitness', src: '/images/dumbbell.png' },
    { label: 'Electronics', src: '/images/cap.png' },
    { label: 'Furniture', src: '/images/jacket.png' }
  ],
  'DAILY ESSENTIALS4': [
    { label: 'Electronics', src: '/images/hairdryer.png' },
    { label: 'Fitness', src: '/images/dumbbell.png' },
    { label: 'Electronics', src: '/images/cap.png' },
    { label: 'Furniture', src: '/images/jacket.png' }
  ],
  'DAILY ESSENTIALS5': [
    { label: 'Electronics', src: '/images/hairdryer.png' },
    { label: 'Fitness', src: '/images/dumbbell.png' },
    { label: 'Electronics', src: '/images/cap.png' },
    { label: 'Furniture', src: '/images/jacket.png' }
  ],  
  'DAILY ESSENTIALS6': [
    { label: 'Electronics', src: '/images/hairdryer.png' },
    { label: 'Fitness', src: '/images/dumbbell.png' },
    { label: 'Electronics', src: '/images/cap.png' },
    { label: 'Furniture', src: '/images/jacket.png' }
  ],
  'DAILY ESSENTIALS7': [
    { label: 'Electronics', src: '/images/hairdryer.png' },
    { label: 'Fitness', src: '/images/dumbbell.png' },
    { label: 'Electronics', src: '/images/cap.png' },
    { label: 'Furniture', src: '/images/jacket.png' }
  ]
};

const SectionCard = ({ title }) => {
  const images = sectionImages[title] || [];

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