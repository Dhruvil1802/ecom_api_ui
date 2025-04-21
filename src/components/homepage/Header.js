import React from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';

import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="brand">NAME</div>

      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button className="search-button">
          <FiSearch />
        </button>
      </div>

      <div className="user-cart">
      <div className="user">
        <BsPersonCircle className="icon" />
        <span>Hello, </span>
        <button className="signin-btn">Sign in</button>
        
      </div>
      <FiShoppingCart className="cart-icon" />
      </div>
    </header>
  );
};

export default Header;
