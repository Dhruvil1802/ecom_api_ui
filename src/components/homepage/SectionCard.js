import './SectionCard.css';

const local = "http://127.0.0.1:8000";
const host = "http://ecomapi-production-f9d8.up.railway.app"

const SectionCard = ({ feature }) => {

  return (
    <div className="section-card">
      <h2>{feature.feature_title}</h2>
      <div className="product-list">

          <div className="product-item">
            <img src={`${local}${feature.feature_image1}`} alt={feature.feature_title} />
            <p>{decodeURIComponent(feature.feature_image1.split('/').pop().split('.')[0])}</p>
          </div>

          <div className="product-item">
            <img src={`${local}${feature.feature_image2}`} alt={feature.feature_title} />
            <p>{decodeURIComponent(feature.feature_image2.split('/').pop().split('.')[0])}</p>
          </div>

          <div className="product-item">
            <img src={`${local}${feature.feature_image4}`} alt={feature.feature_title} />
            <p>{decodeURIComponent(feature.feature_image3.split('/').pop().split('.')[0])}</p>
          </div>
          
          <div className="product-item">
            <img src={`${local}${feature.feature_image3}`} alt={feature.feature_title} />
            <p>{decodeURIComponent(feature.feature_image4.split('/').pop().split('.')[0])}</p>
          </div>
        
      </div>
      <button className="home-page-shop-btn">Shop All</button>
    </div>
  );
};

export default SectionCard;