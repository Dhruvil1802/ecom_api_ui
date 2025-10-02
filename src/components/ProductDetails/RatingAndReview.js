import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { BsPersonCircle } from 'react-icons/bs';

import ErrorMessage from '../../error/errorMessage';


import './RatingAndReview.css';
const local = "http://127.0.0.1:8000";
const host = "https://ecomapi-production-f9d8.up.railway.app";

function RatingAndReview({details, productDetails, setReload, token}) {
    const [isRateAndReviewOpen, setIsRateAndReviewOpen] = useState(false);
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");

    const [isErrorVisible, setIsErrorVisible] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

  function openRateAndReview(){
    if (!token){
      alert("Please sign in to view your cart")
      return
    }
    setIsRateAndReviewOpen(true);
  }

  async function submitRating(){


      const payload = {"product_id": details?.product_id, 
                        "product_rating": rating, 
                        "product_review": review}

      try {
        const res = await fetch(`${host}/products/rating/`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        const data = await res.json();
        if (data.status.code === 201) {
          setReload("reload")
          setIsRateAndReviewOpen(false);
        }
         if (data?.status?.code === 400 || data?.status?.code === 404)
            {
              
              setIsErrorVisible(true)
              setErrorMessage(data?.status?.message)
              setTimeout(()=>setIsErrorVisible(false), 5000);
            
        }
      }
      catch (err) {
        setIsErrorVisible(true)
                setErrorMessage("service unavailable")
                setTimeout(()=>setIsErrorVisible(false), 5000);}  
  }

  return (
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

                <div className='rate-and-review' onClick={openRateAndReview}>
                    <button >Rate and Review </button>
                    
                </div>
                {isRateAndReviewOpen && (
                <div className="rate-and-review-dialog">
                  <button className="close-modal" onClick={()=>setIsRateAndReviewOpen(false)}>×</button>
                  <h3 className="rate-in-modal">How was the item?</h3>
                  <div className="rate-and-review-header">
                  <div className="rating-star">
                    {[1, 2, 3, 4, 5].map((star, index) => (
                      <span
                        key={index}
                        className="single-star"
                        onClick={() => setRating(index + 1)}
                        style={{ cursor: 'pointer', color: index < rating ? 'gold' : 'white' }}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <div className="rate-and-review-img-container">
                    <img 
                      src={`${host}${details?.product_image}`} 
                      alt={details?.product_name} 
                      className="image"
                    />
                  </div>
                </div>
                  <h3 className="review-in-modal">Write a review</h3>
                  <div className="review-text-container">
                    <textarea className="review_text" placeholder='What should other customer know?' onChange={(e) => setReview(e.target.value)}></textarea>
                  </div>
                  <button className='rateandreview_submit_btn' onClick={()=>submitRating()}>submit</button>
                  <div className="rate-and-review-form">
                  </div>
               </div>
            )}
            </div>



        <div className="reviews-section">
            <h4>Customer's Say</h4>
            {productDetails?.product_ratings.map((review, index) => (
                <div key={index} className="review">
                    <div className="review-header">
                        <span className="reviewer-name">
                          <div className="icon-container"><BsPersonCircle className="user_icon" /></div>
                          <span className="name">{review?.customer_id}</span>
                        </span>
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
                    {isErrorVisible?<ErrorMessage message={errorMessage}/>:""}

      </div>
  );
}
export default RatingAndReview;