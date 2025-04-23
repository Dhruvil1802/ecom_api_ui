import React, { useRef } from 'react';
import './ProductGrid.css';
import SectionCard from './SectionCard';


const ProductGrid = ({features}) => {
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
        
        {features?.map((feature, index) => (
        <SectionCard key={index} feature={feature} />
        ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
