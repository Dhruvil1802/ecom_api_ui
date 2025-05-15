import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import './Details.css';

const local = "http://127.0.0.1:8000";
const host = "https://ecomapi-production-f9d8.up.railway.app";

function Details({ productId, setProductDetails, productDetails }) {
  useEffect(() => {
    async function getProductDetails() {
      try {
        const res = await fetch(
          `${host}/products/details/?product_id=${productId}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.json();
        if (data.status.code === 200) {
          setProductDetails(data.data);
        } else {
          console.log("Something went wrong");
        }
      } catch (error) {
        console.error("Error while fetching details");
      }
    }
    getProductDetails();
  }, []);

  const details = productDetails?.product_details;

  return (
    <div className="product-details-page">
      <div className="upper-part">
        <div className='product-details-image'>
          <img 
            src={`${host}${details?.product_image}`} 
            alt={details?.product_name} 
            className="image"
          />
        </div>

        <div className="product-all-details">
          <h2 className="product-name">{details?.product_name}</h2>
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
        </div>
      </div>

      <div className="lower-part">
            <div className="rating-section">
                <h4>Rating & Reviews</h4>

                <div className="average-rating">
                    <span className="avg-number">{details?.product_rating}</span>
                    <span className='big-star'>★</span>
                    <h6>Rated by {productDetails?.number_of_ratings} customers</h6>
                </div>

                {[1,2,3,4,5].map((star) => (
                    <div key={star} className="rating-row">
                    <span>{star}</span>
                    <span className='small-star'>★</span>
                    <div className="bar-container">
                        <div
                        className="bar-fill"
                        style={{
                            width: `${
                            productDetails?.number_of_ratings
                                ? (productDetails?.rating_stats[star] || 0) / productDetails?.number_of_ratings * 100
                                : 0
                            }%`,
                        }}
                        ></div>
                    </div>
                    </div>
                ))}

                <div className='rate-and-review'>
                    <button>Rate and Review</button>
                    <div className="next-symbol">{">"}</div>
                </div>
            </div>



        <div className="reviews-section">
            <h4>Customer Says</h4>
            {productDetails?.product_ratings.map((review, index) => (
                <div key={index} className="review">
                    <div className="review-header">
                        <span className="reviewer-name">{review?.customer_id}</span>
                        <span className="review-rating small-star">{'★ '.repeat(review?.product_rating)}</span>
                        <span className="review-date">Reviewed on {review?.updated_at}</span>
                    </div>
                    <p className="review-text">{review?.product_review}</p>
                        <button className="like-button">
                            <div className="like-icon-container">
                            <FontAwesomeIcon icon={faThumbsUp} className="like-icon" />
                            </div>
                            <span className="like-text">LIKE</span>
                            
                        </button>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Details;
