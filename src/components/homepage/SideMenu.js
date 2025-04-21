import React, { useState } from 'react';
import { BsFilterLeft } from 'react-icons/bs';
import './SideMenu.css';

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Brown Bar with Filter Icon */}
      <div className="filter-bar">
        <button className="filter-icon" onClick={() => setIsOpen(!isOpen)}>
          <BsFilterLeft size={28} color="white" />
        </button>
      </div>

      {/* Slide-out Side Menu (optional content) */}
      {/* {isOpen && (
        <div className="side-menu-panel">
          <ul>
            <li>Category 1</li>
            <li>Category 2</li>
            <li>Category 3</li>
          </ul>
        </div>
      )} */}
    </>
  );
};

export default SideMenu;
