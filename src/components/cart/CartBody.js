
import { useEffect } from "react";
import { inuse_url } from "../../App.js";
import ErrorMessage from '../../error/errorMessage';
import "./CartBody.css";
import GetCart from "./GetCart.js";
import ManageQuantity from "./ManageQuantity.js";
// const local = "http://127.0.0.1:8000";
// const host = "https://ecomapi-production-f9d8.up.railway.app";


function CartBody({setProductId, 
                  navigate, 
                  cart, 
                  setCart,
                  cartProducts,
                  setCartProducts,
                  subTotal,
                  setSubTotal,
                  shipping,
                  setShipping,
                  tax,
                  setTax,
                  total,
                  setTotal,
                  setIsErrorVisible,
                  isErrorVisible,
                  errorMessage,
                  setErrorMessage,
                  emptyMessage,
                  setEmptyMessage
                }) {



useEffect(() => {
GetCart(
  setCartProducts,
  setCart,
  setSubTotal,
  setShipping,
  setTax,
  setTotal,
  setIsErrorVisible,
  setErrorMessage
);
}, []);

useEffect(() => {
  if (cartProducts.length === 0) {
        setEmptyMessage("Your cart is empty");
      } else {
        setEmptyMessage("");
        }
}, [cartProducts]);



function openProductDetails(product_id){
         setProductId(product_id);
         navigate("/productdetails")
    }
  return (
    <div className="cart-body">

      <div className="Left_Side">
        <h1>{emptyMessage}</h1>
        <div className="Product_listing">
            {cartProducts?.map((product) => (
                <div className="product_cart" key={product?.product_id} onClick={()=>{openProductDetails(product?.product_id)}}>
                    <div className="product_cart_image_container">
                        <img
                        src={`${inuse_url}${product?.product_image}`}
                        alt={product?.product_name}
                        className="product-image"
                        />
                    </div>
                    <div className="product_cart_price_name">                    
                        <h3 >{product?.product_name}</h3>
                        <h2>${product?.product_price}</h2>
                    </div>
                    <div className="product_cart_quantity">
                        <button className="sub-in-cart-button" onClick={(e) => {
                            e.stopPropagation(); 
                            ManageQuantity(
                            product,
                            "decrease",
                            cartProducts,
                            setCartProducts,
                            subTotal,
                            setSubTotal,
                            setShipping,
                            tax,
                            setTax,
                            total,
                            setTotal,
                            cart,
                            setCart,
                            setIsErrorVisible,
                            setErrorMessage,
                            emptyMessage,
                            setEmptyMessage
                          );                           
                            }}><p>-</p></button>
                        <h2 className="quantity-figure">{product?.product_quantity}</h2>
                        <button className="add-in-cart-button" onClick={(e) => {
                            e.stopPropagation(); 
                            ManageQuantity(
                            product,
                            "increase",
                            cartProducts,
                            setCartProducts,
                            subTotal,
                            setSubTotal,
                            setShipping,
                            tax,
                            setTax,
                            total,
                            setTotal,
                            cart,
                            setCart,
                            setIsErrorVisible,
                            setErrorMessage,
                            emptyMessage,
                            setEmptyMessage
                          );
                          }}><p>+</p></button>
                    </div>
                    <div className="product_total">
                      <h2>${product?.product_quantity * product?.product_price}</h2>
                    </div>


                </div>
            ))}
        </div>
      </div>
      <div className="Right_Side">

        <div className="payment-details">
            <h1>Order Summary</h1>
            <div className="promotion">
              <input type="text"
                    placeholder="Enter Coupon Code"
                    className="promotion-input"
              />  
              <button className="apply-promotion-button">Apply</button>
            </div>
            <table className="payment-details-table">
            <tbody>
              <tr>
                <td>Sub Total</td>
                <td className="payment-details-value">{subTotal}</td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td className="payment-details-value">{shipping}</td>
              </tr>
              <tr>
                <td>Tax</td>
                <td className="payment-details-value">{tax}</td>
              </tr>
              <tr>
                <td>Discount</td>
                <td className="payment-details-value">0.00</td>
              </tr>
            </tbody>
          </table>

          <table className="payment-details-total">
            <tbody>
              <tr>
                <td>Total</td>
                <td className="payment-details-value">{total}</td>
              </tr>
            </tbody>
          </table>

            <button className="checkout-button">CHECKOUT</button>
        </div>
      </div>

      {isErrorVisible?<ErrorMessage message={errorMessage}/>:""}

    </div>
  );
}
export default CartBody;
