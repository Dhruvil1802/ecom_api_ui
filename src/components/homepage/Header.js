import { BsPersonCircle } from 'react-icons/bs';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';

import './Header.css';



const Header = ({navigate, customerName, setSearch, search, setIsSearch}) => {



  function OpenSignIn(){
    navigate("/login")
  }
  function OpenProducts(){
    setIsSearch(true)
    navigate("/products") 
  }
  
  
  return (
    <header className="header">
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
        {console.log("customer name",customerName)}
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
