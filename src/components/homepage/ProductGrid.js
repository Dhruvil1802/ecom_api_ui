import React from 'react';
import './ProductGrid.css';
import SectionCard from './SectionCard';

const ProductGrid = () => {
  const sections = ['BEST SELLER', 'SEASONAL', 'CLEARANCE'];

  return (
    <div className="grid-container">
      {sections.map((section, index) => (
        <SectionCard key={index} title={section} />
      ))}
    </div>
  );
};

export default ProductGrid;
