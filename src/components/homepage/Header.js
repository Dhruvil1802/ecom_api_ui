import { useState } from 'react';
import { BsFilterLeft, BsPersonCircle } from 'react-icons/bs';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';


import './Header.css';



const Header = ({navigate, token, customerName, setCurrentPage, setSearch, search, setSearched}) => {

  const [isOpen, setIsOpen] = useState(false);


  function OpenSignIn(){
    navigate("/login")
  }
  function OpenProducts(){

    setSearched(search)
    setCurrentPage(1) 
    navigate("/products") 
  }
  function openHomePage(){
    navigate("/homepage")
  }
  function openCart(){
    if (!token){
      alert("Please sign in to view your cart")
      return
    }
    navigate("/cart")
  }
  
  return (
    <header className="header">
      <div className="side_menu_bar">
              <button className="filter-icon" onClick={() => setIsOpen(!isOpen)}>
                <BsFilterLeft size={28} color="black" />
              </button>
      </div>
      {/* Slide-out Side Menu (optional content) */}
      {isOpen && (
        <div className="side-menu-panel">
          <div className="side-header">
            <BsPersonCircle className="side_nav_bar_icon" />
            <span className="sign-text">
              Hello,{' '}
              <button className="side_nav_bar_signin_btn" onClick={customerName ? () => {} : OpenSignIn}>
                {customerName ? customerName : 'Sign in'}
              </button>
            </span>
          </div>

          <div className="side-section">
            <h3 className="side-heading">Trending 🔥</h3>
            <div className="side-item">New Arrivals <span className="arrow">▶</span></div>
            <div className="side-item">Best Sellers <span className="arrow">▶</span></div>
          </div>

          <div className="side-section">
            <h3 className="side-heading">Your Account</h3>
            <div className="side-item">Profile <span className="arrow">▶</span></div>
            <div className="side-item">Orders <span className="arrow">▶</span></div>
            <div className="side-item">Help <span className="arrow">▶</span></div>
            <div className="side-item">About us <span className="arrow">▶</span></div>
          </div>

          <div className="signout-container">
            <button className="signout-btn">Sign out</button>
          </div>
        </div>
      )}

      <div className="brand" onClick={()=>openHomePage()}>NAME</div>

      <div className="search-bar">
        <input type="text" placeholder="Search Products...."   onChange={(e) => setSearch(e.target.value)}
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
      <FiShoppingCart className="header-cart-icon" onClick={()=>openCart()}/>
      </div>
    </header>
  );
};

export default Header;
