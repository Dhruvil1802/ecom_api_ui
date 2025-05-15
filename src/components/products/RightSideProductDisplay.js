import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './RightSideProductDisplay.css';

const local = "http://127.0.0.1:8000";
const host = "https://ecomapi-production-f9d8.up.railway.app";

function DisplayProductRightSide({searchedProducts, totalPages, setCurrentPage, currentPage, setSearchPageNumber, setTotalPages, navigate, setProductId}){
    const paginate = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);  
            setSearchPageNumber(pageNumber);  
        }
    };
    function handleViewProductDetails(product_id){
         setProductId(product_id);
         navigate("/productdetails")
    }
    return(
        <div className="right_side">

            <div className="special-offer-card">
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
            </div>
            <h1 className='results'>Results</h1>
                <div className='products_listing'>
                
                {searchedProducts?.map((product, index) => (
                    <div className="product-card" key={index} onClick={()=>handleViewProductDetails(product.product_id)}>
                    
                        <img src={`${host}${product.product_image}`} alt={product.product_name} className="product-image" />
                        
                        <div className="product-rating">{"★".repeat(product.product_rating)}{"☆".repeat(5 - product.product_rating)}</div>
                        <h3 className="product-name">{product.product_name}</h3>
                        <p className="product-price">${product.product_price}</p>
                        
                        <div className="aligned-buttons button-spacing">
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

            {totalPages>=10?<span className="pagination-ellipsis">..........</span>:""}

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
    )
}

export default DisplayProductRightSide;