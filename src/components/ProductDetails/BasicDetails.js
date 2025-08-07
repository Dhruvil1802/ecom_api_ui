import { useState } from 'react';

import './BasicDetails.css';
const local = "http://127.0.0.1:8000";
const host = "https://ecomapi-production-f9d8.up.railway.app";

function BasicDetails({ details }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const toggleModal = () => {
  setIsModalOpen(!isModalOpen); 
  };

  return (
    <div className="upper-part">
        <div className='product-details-image'>
          <img 
            src={`${host}${details?.product_image}`} 
            alt={details?.product_name} 
            className="image"
          />
        </div>

        <div className="product-all-details">
          <h1 className="product-name">{details?.product_name}</h1>
          <h3 className="product-price">${details?.product_price}</h3>
          <button className="add-to-cart-btn">ADD TO CART</button>

          <div className="description-box">
            <h4>Description</h4>
            <p>{details?.product_description}</p>
          </div>

          <div className="product-specs">
            <div>
                <h4>Product Dimensions</h4>
                <table className="product-table">
                    <tbody>
                    <tr>
                        <td><strong>Brand</strong></td>
                        <td>{details?.product_brand}</td>
                    </tr>
                    <tr>
                        <td><strong>Colour</strong></td>
                        <td>{details?.product_color}</td>
                   </tr>
                    <tr>
                        <td><strong>Weight</strong></td>
                        <td>{details?.product_weight}</td>
                    </tr>
                    <tr>
                        <td><strong>Dimensions</strong></td>
                        <td>{details?.product_dimension}</td>
                    </tr>
                    </tbody>
                </table>
            </div>

            {details?<div>
                <h4>Additional Specification</h4>

                <table className="product-table">
                    <tbody>
                    <tr>
                        <td><strong>{Object.keys(details?.additional_specification[0])[0]}</strong></td>
                        <td>{details?.additional_specification[0][Object.keys(details?.additional_specification[0])[0]]}</td>
                    </tr>
                    <tr>
                        <td><strong>{Object.keys(details?.additional_specification[1])[0]}</strong></td>
                        <td>{details?.additional_specification[1][Object.keys(details?.additional_specification[1])[0]]}</td>
                   </tr>
                    <tr>
                        <td><strong>{Object.keys(details?.additional_specification[2])[0]}</strong></td>
                        <td>{details?.additional_specification[2][Object.keys(details?.additional_specification[2])[0]]}</td>
                    </tr>
                    <tr>
                        <td><strong>{Object.keys(details?.additional_specification[3])[0]}</strong></td>
                        <td>{details?.additional_specification[3][Object.keys(details?.additional_specification[3])[0]]}</td>
                    </tr>
                    </tbody>
                </table>
            </div>:""}
          </div>
          <div>
            
            <button className="additional-specification-btn" onClick={()=>toggleModal()}>
            Additional Specification  
          </button>
            
          </div>
        </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>All Specifications</h2>
            <button className="close-modal" onClick={toggleModal}>×</button>
            <div className="specs-description-box">
              <h4>Description</h4>
              <p>{details?.product_description}</p>
            </div>
            <h4>Product Dimensions</h4>
              <table className="specs-product-table">
                  <tbody>
                  <tr>
                      <td><strong>Brand</strong></td>
                      <td>{details?.product_brand}</td>
                  </tr>
                  <tr>
                      <td><strong>Colour</strong></td>
                      <td>{details?.product_color}</td>
                  </tr>
                  <tr>
                      <td><strong>Weight</strong></td>
                      <td>{details?.product_weight}</td>
                  </tr>
                  <tr>
                      <td><strong>Dimensions</strong></td>
                      <td>{details?.product_dimension}</td>
                  </tr>
                  </tbody>
              </table>
            <h4>All Specifications</h4>
            <table className="specs-product-table">
              <tbody>
                {details?.additional_specification.map((spec, index) => (
                  <tr key={index}>
                    <td><strong>{Object.keys(spec)[0]}</strong></td>
                    <td>{spec[Object.keys(spec)[0]]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      
      </div>
  );
}
export default BasicDetails;