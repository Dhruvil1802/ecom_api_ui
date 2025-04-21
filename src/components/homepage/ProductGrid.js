import React, { useRef } from 'react';
import './ProductGrid.css';
import SectionCard from './SectionCard';

const ProductGrid = () => {
  const sections = ['NEW ARRIVALS', 'SPRING BEAUTY', 'DAILY ESSENTIALS', 'DAILY ESSENTIALS1', 'DAILY ESSENTIALS2','DAILY ESSENTIALS3', 'DAILY ESSENTIALS4', 'DAILY ESSENTIALS5', 'DAILY ESSENTIALS6', 'DAILY ESSENTIALS7'];
  const navRef  = useRef();

  const handleNav = (direction) => {
    if (direction === 'left') {
      navRef.current.scrollLeft -= 420;
    } else if (direction === 'right') {
      navRef.current.scrollLeft += 420;
    }
  }; 

  return (
    <div className="scroll-wrapper-container">
      <div className="scroll-btn-container">
        <button className="scroll-btn left" onClick={() => handleNav('left')}>&lt;</button>
        <button className="scroll-btn right" onClick={() => handleNav('right')}>&gt;</button>
      </div>

      <div className="grid-scroll-wrapper" ref={navRef}>
        <div className="grid-container">
          {sections.map((section, index) => (
            <SectionCard key={index} title={section} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
