import React from 'react';
import './ProductGrid.css';
import SectionCard from './SectionCard';

const ProductGrid = () => {
  const sections = ['NEW ARRIVALS', 'SPRING BEAUTY', 'DAILY ESSENTIALS'];

  return (
    <div className="grid-container">
      {sections.map((section, index) => (
        <SectionCard key={index} title={section} />
      ))}
    </div>
  );
};

export default ProductGrid;