import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useEffect, useState } from "react";
import './RightSideProductDisplay.css';


const local = "http://127.0.0.1:8000";
const host = "https://ecomapi-production-f9d8.up.railway.app";

function DisplayProductRightSide({searchedProducts, totalPages, setCurrentPage, currentPage, setTotalPages, navigate, setProductId, openLeft}){
    
    const [cartProducts, setCartProducts] = useState([]);
    
    const paginate = (pageNumber) => {
        console.log("current page", pageNumber); 

        if (pageNumber >= 1 && pageNumber <= totalPages) {
            localStorage.setItem('current_page', pageNumber);
            setCurrentPage(pageNumber);
        }
    };

    function handleViewProductDetails(product_id){
         setProductId(product_id);
         localStorage.setItem('product_id', product_id);
         navigate("/productdetails")
    }

    useEffect(()=>{
        getProductList();
    },[])

    async function getProductList() {

        try {
            const res = await fetch(`${host}/cart/management/`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
            },
            });
            const data = await res.json();
            if (data.status.code === 200) {
            setCartProducts(data?.data?.products);
            //   setSubTotal(data?.data?.sub_total);
            //   setShipping(data?.data?.delivery_fees);
            //   setTax(data?.data?.tax);
            //   setTotal(data?.data?.total);
            }
        } catch (error) {
            // setIsErrorVisible(true);
            // setErrorMessage("service unavailable");
            // setTimeout(() => setIsErrorVisible(false), 5000);
        }
        }
    async function increaseQuantity(product_id) {

        try {
            const res = await fetch(`${host}/cart/management/`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ product_id }),
            });
            const data = await res.json();
            if (data.status.code === 201) {
            await getProductList(); 
            }
        } catch (error) {
            // setIsErrorVisible(true);
            // setErrorMessage("service unavailable");
            // setTimeout(() => setIsErrorVisible(false), 5000);
        }
        }
    async function decreaseQuantity(product_id) {
        try {
            const res = await fetch(`${host}/cart/management/`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ action: "remove", product_id }),
            });
            const data = await res.json();

            if (data.status.code === 201) {
            await getProductList(); 

            }
        } catch (error) {
            // setIsErrorVisible(true);
            // setErrorMessage("service unavailable");
            // setTimeout(() => setIsErrorVisible(false), 5000);
        }
    }
    return(
        <div className="right_side">

            {/* <div className="special-offer-card">
                <div className="offer-image-section">
                    <img src={`${host}/Media/features/special_product.png`} alt="Special Offer Headphones" />
                </div>
                <div className="offer-details" onClick={()=>handleViewProductDetails(searchedProducts[0].product_id)}>
                    <div className="offer-badge">Special Offer</div>
                    <img src={`${host}${searchedProducts[0]?.product_image}`} alt="Headphones" className="offer-product-img" />
                    <h2 className="offer-price">{searchedProducts[0]?.product_price}</h2>
                    <p className="offer-old-price">Was: <span>$3300</span></p>
                    
                    <div className="aligned-buttons">
                        <button className="add-to-cart-button">
                            <div className="icon-container">
                                <div className="circular-div"> 
                                <ShoppingCartIcon className="cart-icon" />
                                </div>
                            </div>
                            <span className="button-text">Add To Cart</span>
                        </button>
                        <button className="add-to-favourite-button">
                                <FavoriteIcon  className="heart-icon" />
                        </button>
                    </div>
                    

                </div>
            </div> */}
            <h1 className='results'>Results</h1>
            <div className='products_listing'   style={{
                gridTemplateColumns: `${openLeft ? "repeat(4, 1fr)" : "repeat(5, 1fr)"}`,
                gap: `${openLeft ? "3rem" : "2.5rem"}`
            }}>
                
                {searchedProducts?.map((product, index) => (
                    <div className="product-card" key={index} onClick={()=>handleViewProductDetails(product.product_id)}>
                        <div className="product-image-container">
                           <img src={`${host}${product.product_image}`} alt={product.product_name} className="product-image" />
                        </div>
                        <div className="products-other-details">
                            <h3 className="searched-product-name">{product.product_name}</h3>
                            
                            <div className="price-rating-wrapper">
                                <div className="product-rating">
                                {"★".repeat(product.product_rating)}
                                {"☆".repeat(5 - product.product_rating)}
                                </div>
                                <p className="product-price">${product.product_price}</p>
                            </div>
                        </div>

                        <div className="aligned-buttons button-spacing">
                            {/* {cartProducts.map((cartProduct) => cartProduct.product_id).includes(product.product_id)
                            ? (<div className="product_cart_quantity">
                                <button className="sub-in-cart-button" onClick={(e) => {
                                    e.stopPropagation(); 
                                    decreaseQuantity(product?.product_id);
                                    }}><p>-</p></button>
                                <h2>{cartProducts[index]?.product_quantity}</h2>
                                {console.log("qqqqqqqqqq",cartProducts[index]?.product_quantity)}
                                <button className="add-in-cart-button" onClick={(e) => {
                                    e.stopPropagation(); 
                                    increaseQuantity(product?.product_id);
                                }}><p>+</p></button>
                            </div> )
                            :(<button className="add-to-cart-button" onClick={(e) => {
                                e.stopPropagation(); 
                                increaseQuantity(product?.product_id);
                            }}>
                                <div className="icon-container">
                                    <div className="circular-div">
                                    <ShoppingCartIcon className="cart-icon" />
                                    </div>
                                </div>
                                <span className="button-text">Add To Cart</span>
                            </button>)} */}
                            
                            <button className="add-to-cart-button" onClick={(e) => {
                                e.stopPropagation(); 
                                increaseQuantity(product?.product_id);
                            }}>
                                
                                <div className="icon-container">
                                    <div className="circular-div">
                                    <ShoppingCartIcon className="cart-icon" />
                                    </div>
                                </div>
                                <span className="button-text">Add To Cart</span>
                            </button>
                             
                            <button className="add-to-favourite-button">
                                    <FavoriteIcon  className="heart-icon" />
                            </button>
                        </div>
                    </div>
                    ))}
              

            </div>
            <div className="pagination-container">
                <button
                    className="pagination-arrow"
                    onClick={() => paginate(Number(currentPage) - 1)}
                    disabled={currentPage === 1}
                >
                    ⟨ Previous
                </button>

                {Array.from({ length: totalPages > 3 ? 3 : totalPages}).map((_, index) => {
                    const page = index + 1;
                    return (
                        <button
                        key={page}
                        className={`pagination-button ${Number(currentPage) === page ? 'active' : ''}`}
                        onClick={() => paginate(page)}
                        >
                        {page}
                        {                 
}
                        </button>
                    );
                })}
                
            {totalPages>=3?<span className="pagination-ellipsis">..........</span>:""}

                <button
                    className={`pagination-button ${currentPage === totalPages ? 'active' : ''}`}
                    onClick={() => paginate(totalPages)}
                >
                    {totalPages}
                </button>

                <button
                    className="pagination-arrow"
                    onClick={() => paginate(Number(currentPage) + 1)}
                    disabled={currentPage === totalPages}
                >
                  Next ⟩
                </button>   
                </div>

            </div>
    )
}

export default DisplayProductRightSide;