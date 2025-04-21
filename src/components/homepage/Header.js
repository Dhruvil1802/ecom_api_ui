import React from 'react';
import { FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="brand">NAME</div>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <FiSearch className="search-icon" />
      </div>
      <div className="user-cart">
        <FiUser />
        <span>Hello, Sign in</span>
        <FiShoppingCart />
      </div>
    </header>
  );
};

export default Header;
