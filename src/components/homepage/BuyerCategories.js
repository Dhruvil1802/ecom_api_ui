import { useRef } from 'react';
import "./BuyerCategories.css";


const local = "http://127.0.0.1:8000";
const host = "https://ecomapi-production-f9d8.up.railway.app"

const BuyerCategories = ({categories}) => {
    const navRef = useRef();
  
    const handleNav = (direction) => {
      if (direction === 'left') {
        navRef.current.scrollLeft -= 420;
      } else if (direction === 'right') {
        navRef.current.scrollLeft += 420;
      }
    };

  // return (<>
        
  //       {categories?.map((category, index) => (
  //           <SectionCard key={index} feature={category} />
  //         ))} 
  //         </>
  // )

return (
  <div className="buyer-categories-container">
      <p className='category-title'>Shop by Category</p>

      <div className="buyer-categories-wrapper">
        {categories?.map((category, index) => (
          <div className='buyer-categories-item'>
            <img src={`${host}/Media/buyer_categories/Men.png`} alt={category.category_title} className="buyer-category-image" />
            <p className="buyer-category-title">{category.category_title}</p>
          </div>
          ))} 
        
      </div>

  </div>
  );

  // return (
  // <div className="buyer-categories-container">
  //     <p className='category-title'>Shop by Category</p>

  //     <div className="buyer-categories-wrapper">

  //       <div className='buyer-categories-item'>

  //         <img src={`${host}/Media/buyer_categories/Men.png`} alt="Men's Fashion" className="buyer-category-image" />
  //         <p className="buyer-category-title">Electronics</p>

  //       </div>

  //       <div className='buyer-categories-item'>

  //         <img src={`${host}/Media/buyer_categories/Women.png`} alt="Women's' Fashion" className="buyer-category-image"/>
  //         <p className="buyer-category-title">Furniture</p>

  //       </div>

  //       <div className='buyer-categories-item'>

  //         <img src={`${host}/Media/buyer_categories/Kids.png`} alt="Kids' Fashion" className="buyer-category-image" />
  //         <p className="buyer-category-title">Fashion</p>
          
  //       </div>

  //       <div className='buyer-categories-item'>

  //         <img src={`${host}/Media/buyer_categories/Men.png`} alt="Men's Fashion" className="buyer-category-image" />
  //         <p className="buyer-category-title">Cosmetics</p>

  //       </div>

  //       <div className='buyer-categories-item'>

  //         <img src={`${host}/Media/buyer_categories/Women.png`} alt="Women's' Fashion" className="buyer-category-image"/>
  //         <p className="buyer-category-title">Grocery</p>

  //       </div>

        
  //     </div>

  // </div>
  // );

  // return(
  //   <>
  //   <p className='category-title'>Featured Finds</p>
  //       <div className="scroll-wrapper-container">
  //     {/* <div className="scroll-btn-container">
  //       <button className="scroll-btn left" onClick={() => handleNav('left')}>&lt;</button>
  //       <button className="scroll-btn right" onClick={() => handleNav('right')}>&gt;</button>
  //     </div> */}

  //     <div className="grid-scroll-wrapper" ref={navRef}>
  //       <div className="grid-container">
  //         {/* {features?.map((feature, index) => (
  //           <SectionCard key={index} feature={feature} />
  //         ))} */}
  //           <div className="section-card">
  //             <h2>Electronics</h2>
  //             <h3> Selected Items</h3>
  //           </div>
  //           <div className="section-card">
  //             <h2>Fashion</h2>
  //             <h3> Check out Now</h3>
  //           </div>
  //           <div className="section-card">
  //             <h2>Furniture</h2>
  //             <h3> up to 50% off</h3>
  //           </div>
  //           <div className="section-card">
  //             <h2>Grocery</h2>
  //             <h3> Top Products</h3>
  //           </div>
  //           <div className="section-card">
  //             <h2>Cosmetics</h2>
  //             <h3> Top Products</h3>
  //           </div>
  //       </div>
  //     </div>

  //     {/* <div className="scroll-dots">
  //       <span className="dot active"></span>
  //       <span className="dot"></span>
  //       <span className="dot"></span>
  //       <span className="dot"></span>
  //     </div> */}
  //   </div>
  //   </>
  // )

};

export default BuyerCategories;