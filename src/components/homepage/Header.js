import { useState } from 'react';
import { BsFilterLeft, BsPersonCircle } from 'react-icons/bs';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';


import './Header.css';



const Header = ({navigate, customerName, setSearch, search, setSearched}) => {

  const [isOpen, setIsOpen] = useState(false);


  function OpenSignIn(){
    navigate("/login")
  }
  function OpenProducts(){
    setSearched(search)
    navigate("/products") 
  }
  
  
  return (
    <header className="header">
      <div className="filter-bar">
              <button className="filter-icon" onClick={() => setIsOpen(!isOpen)}>
                <BsFilterLeft size={28} color="black" />
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
      <div className="brand">NAME</div>

      <div className="search-bar">
        <input type="text" placeholder="Search"   onChange={(e) => setSearch(e.target.value)}
        />
        <button className="search-button" onClick={()=>search!==""?OpenProducts():{}}>
          <FiSearch />
        </button>
      </div>

      <div className="user-cart">
      <div className="user">
        <BsPersonCircle className="icon" />
        <span>Hello, </span>
          <button className="signin-btn" onClick={customerName ? () => {} : OpenSignIn}>
            {customerName ? `${customerName}` : 'Sign in'}
          </button>        
      </div>
      <FiShoppingCart className="header-cart-icon" />
      </div>
    </header>
  );
};

export default Header;
