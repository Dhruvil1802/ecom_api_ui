import { useEffect, useRef } from 'react';
import './ProductGrid.css';
const ProductGrid = ({ features, setFeatureId, navigate, setContent, setProductDisplayTitle }) => {
  const navRef = useRef();

  const handleNav = (direction) => {
    if (direction === 'left') {
      navRef.current.scrollLeft -= 420;
    } else if (direction === 'right') {
      navRef.current.scrollLeft += 420;
    }
  };

  const openFeature = (feature) => {
    setFeatureId(feature.feature_id);
    localStorage.setItem("feature_id", feature.feature_id);
    localStorage.setItem("productDisplayTitle", feature.feature_title);
    localStorage.setItem("content", "feature");
    setProductDisplayTitle(feature.feature_title);
    setContent("feature")
    navigate(`/products`);
  };

  useEffect(() => {
    const container = navRef.current;

    const updateDots = () => {
      const scrollLeft = container.scrollLeft;
      const totalWidth = container.scrollWidth - container.clientWidth;
      const totalDots = 4; 
      const activeIndex = Math.round((scrollLeft / totalWidth) * (totalDots - 1));

      const dots = document.querySelectorAll('.scroll-dots .dot');
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === activeIndex);
      });
    };

    if (container) {
      container.addEventListener('scroll', updateDots);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', updateDots);
      }
    };
  }, []);

  return (
    <>
    {/* <p className='category-title'>Shop by Category</p> */}
    <p className='category-title'>Featured Finds</p>

    <div className="scroll-wrapper-container">
      {/* <div className="scroll-btn-container">
        <button className="scroll-btn left" onClick={() => handleNav('left')}>&lt;</button>
        <button className="scroll-btn right" onClick={() => handleNav('right')}>&gt;</button>
      </div> */}

      <div className="grid-scroll-wrapper" ref={navRef}>
        <div className="grid-container">
          {features?.map((feature, index) => (
            <div className="section-card" onClick={() => openFeature(feature)}>
              <h2>{feature.feature_title}</h2>
              <h3> Selected Items</h3>
            </div>
          ))}
            {/* <div className="section-card">
              <h2>30% off</h2>
              <h3> Selected Items</h3>
            </div>
            <div className="section-card">
              <h2>New Arrivals</h2>
              <h3> Check out Now</h3>
            </div>
            <div className="section-card">
              <h2>Summer sale</h2>
              <h3> up to 50% off</h3>
            </div>
            <div className="section-card">
              <h2>Best sellers</h2>
              <h3> Top Products</h3>
            </div> */}
        </div>
      </div>

      {/* <div className="scroll-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div> */}
    </div>
  </>
  );
};

export default ProductGrid;