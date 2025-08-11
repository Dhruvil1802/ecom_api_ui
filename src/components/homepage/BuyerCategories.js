import "./BuyerCategories.css";

const local = "http://127.0.0.1:8000";
const host = "https://ecomapi-production-f9d8.up.railway.app"

const BuyerCategories = ({  }) => {


  return (
  <div className="buyer-categories-container">
      <p className='category-title'>Shop by Category</p>

      <div className="buyer-categories-wrapper">

        <div className='buyer-categories-item'>

          <img src={`${host}/Media/buyer_categories/Men.png`} alt="Men's Fashion" className="buyer-category-image" />
          <p className="buyer-category-title">Men</p>

        </div>

        <div className='buyer-categories-item'>

          <img src={`${host}/Media/buyer_categories/Women.png`} alt="Women's' Fashion" className="buyer-category-image"/>
          <p className="buyer-category-title">Women</p>

        </div>

        <div className='buyer-categories-item'>

          <img src={`${host}/Media/buyer_categories/Kids.png`} alt="Kids' Fashion" className="buyer-category-image" />
          <p className="buyer-category-title">Kids</p>
          
        </div>
      </div>

  </div>
  );
};

export default BuyerCategories;