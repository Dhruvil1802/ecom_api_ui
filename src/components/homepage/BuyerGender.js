import "./BuyerGender.css";

const local = "http://127.0.0.1:8000";
const host = "https://ecomapi-production-f9d8.up.railway.app"

const BuyerGender = ({  }) => {


  return (
  <div className="buyer-gender-container">
      <p className='gender-title'>For Everyone</p>

      <div className="buyer-gender-wrapper">

        <div className='buyer-gender-item'>

          <img src={`${host}/Media/buyer_categories/Men.png`} alt="Men's Fashion" className="buyer-gender-image" />
          <p className="buyer-gender-title">Male</p>

        </div>

        <div className='buyer-gender-item'>

          <img src={`${host}/Media/buyer_categories/Women.png`} alt="Women's' Fashion" className="buyer-gender-image"/>
          <p className="buyer-gender-title">Female</p>

        </div>

        <div className='buyer-gender-item'>

          <img src={`${host}/Media/buyer_categories/Kids.png`} alt="Kids' Fashion" className="buyer-gender-image" />
          <p className="buyer-gender-title">Kids</p>
          
        </div>
      </div>

  </div>
  );
};

export default BuyerGender;