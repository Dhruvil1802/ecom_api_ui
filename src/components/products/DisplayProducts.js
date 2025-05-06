import { Slider, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './DisplayProducts.css';

const local = "http://127.0.0.1:8000";
const host = "https://ecomapi-production-f9d8.up.railway.app";

function DisplayProducts({navigate, search, setSearchPageNumber, searchPageNumber, setSearch, setSearchedProducts, searchedProducts}){

    const [priceRange, setPriceRange] = useState([0, 8000]);
    const [currentPage, setCurrentPage] = useState(1);  
    const [totalPages, setTotalPages] = useState(4);   

    useEffect(()=>{
        async function fetchProducts(){

          try{
    
            const res = await fetch(
              `${host}/products/search/?search=${search}&page_size=3&page_no=${searchPageNumber}`,
              { 
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            const data = await res.json();

            if (data.status.code === 200) {
            
              setSearchedProducts(data.data);
            }
          }
          catch(error) {
          }
          }
          fetchProducts();
      },[search, searchPageNumber])

      const paginate = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);  
            setSearchPageNumber(pageNumber);  
        }
    };

      return (
        <div className="product_page">
            <div className="left_side">

                <div className="price_range">
                    <Typography variant="h5"><strong>Price</strong></Typography>
                        <Typography variant="h5"><strong>${priceRange[0]} - ${priceRange[1]}</strong></Typography>
                        <Slider
                        value={priceRange}
                        onChange={(e, newValue) => setPriceRange(newValue)}
                        valueLabelDisplay="auto"
                        min={0}
                        max={8000}
                        disableSwap
                        className="custom-slider" 
                    />            
                </div>

                <div className="sorting">
                    <h1><b>SORT BY</b></h1>
                    <div className="sorting_options">
                        <label>
                                <input
                                    type="radio"
                                    value="Top rated"
                                    name="sorting"
                                />
                                Top rated
                        </label>
                        <label>
                                <input
                                    type="radio"
                                    value="price (max - min)"
                                    name="sorting"
                                />
                                Price (max - min)
                        </label>
                        <label>
                                <input
                                    type="radio"
                                    value="price (min - max)"
                                    name="sorting"
                                />
                                Price (min - max)
                        </label>
                        <label>
                                <input
                                    type="radio"
                                    value="Popularity"
                                    name="sorting"
                                />
                                Popularity
                        </label>
                        <label>
                                <input
                                    type="radio"
                                    value="Discount"
                                    name="sorting"
                                />
                                Discount
                        </label>
                    </div>
                </div>

                <div className="star-filter">
                    <h1><b>FILTER</b></h1>
                    <label className="star-option">
                        <input type="checkbox" />
                        <span className="stars">★★★★★</span>
                    </label>
                    <label className="star-option">
                        <input type="checkbox" />
                        <span className="stars">★★★★</span>
                    </label>
                    <label className="star-option">
                        <input type="checkbox" />
                        <span className="stars">★★★</span>
                    </label>
                    <label className="star-option">
                        <input type="checkbox" />
                        <span className="stars">★★</span>
                    </label>
                    <label className="star-option">
                        <input type="checkbox" />
                        <span className="stars">★</span>
                    </label>
                    </div>

            </div>
            <div className="right_side">

            <div className="special-offer-card">
                <div className="offer-image-section">
                    <img src={`${host}/Media/features/special_product.png`} alt="Special Offer Headphones" />
                </div>
                <div className="offer-details">
                    <div className="offer-badge">Special Offer</div>
                    <img src={`${host}${searchedProducts[0]?.product_image}`} alt="Headphones" className="offer-product-img" />
                    <h2 className="offer-price">{searchedProducts[0]?.product_price}</h2>
                    <p className="offer-old-price">Was: <span>$3300</span></p>
                    <button className="offer-add-btn">Add To Cart</button>
                </div>
            </div>
            <h1 className='results'>Results</h1>
                <div className='products_listing'>
                
                {searchedProducts?.map((product, index) => (
                    <div className="product-card" key={index}>
                    
                        <img src={`${host}${product.product_image}`} alt={product.product_name} className="product-image" />
                        
                        <div className="product-rating">{"★".repeat(product.product_rating)}{"☆".repeat(5 - product.product_rating)}</div>
                        <h3 className="product-name">{product.product_name}</h3>
                        <p className="product-price">${product.product_price}</p>
                        
                        <button className="shop-btn">Add to Cart</button>
                    </div>
                    ))}
              

                </div>
                <div className="pagination-container">
                <button
                    className="pagination-arrow"
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    ⟨ Previous
                </button>

                {[1, 2, 3].map((page) => (
                    <button
                    key={page}
                    className={`pagination-button ${currentPage === page ? 'active' : ''}`}
                    onClick={() => paginate(page)}
                    >
                    {page}
                    </button>
                ))}

            {totalPages>=10?<span clasName="pagination-ellipsis">..........</span>:""}

                <button
                    className={`pagination-button ${currentPage === totalPages ? 'active' : ''}`}
                    onClick={() => paginate(totalPages)}
                >
                    {totalPages}
                </button>

                <button
                    className="pagination-arrow"
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next ⟩
                </button>   
                </div>



            </div>

            
        </div>
    );
}

export default DisplayProducts;



