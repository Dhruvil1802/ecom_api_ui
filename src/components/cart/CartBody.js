
import { useEffect, useState } from "react";
import ErrorMessage from '../../error/errorMessage';
import "./CartBody.css";

const local = "http://127.0.0.1:8000";
const host = "https://ecomapi-production-f9d8.up.railway.app";


function CartBody({setProductId, navigate, cart, setCart}) {
    const [cartProducts, setCartProducts] = useState([]);
    const [subTotal, setSubTotal] = useState();
    const [shipping, setShipping] = useState();
    const [tax, setTax] = useState();
    const [total, setTotal] = useState();
    // const [cart, setCart] = useState([]);
    const [isErrorVisible, setIsErrorVisible] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")


useEffect(() => {
  getProductList();
}, []);

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
      setSubTotal(data?.data?.sub_total);
      setShipping(data?.data?.delivery_fees);
      setTax(data?.data?.tax);
      setTotal(data?.data?.total);
      setCart(data?.data);
    }

  } catch (error) {
    setIsErrorVisible(true);
    setErrorMessage("service unavailable");
    setTimeout(() => setIsErrorVisible(false), 5000);
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
      body: JSON.stringify({ product_id, cart }),
    });
    const data = await res.json();
    if (data.status.code === 201) {
      await getProductList(); // wait for fresh cart

    }
  } catch (error) {
    setIsErrorVisible(true);
    setErrorMessage("service unavailable");
    setTimeout(() => setIsErrorVisible(false), 5000);
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
      body: JSON.stringify({ action: "remove", product_id, cart }),
    });
    const data = await res.json();
    if (data.status.code === 201) {
      await getProductList(); 

    }
  } catch (error) {
    setIsErrorVisible(true);
    setErrorMessage("service unavailable");
    setTimeout(() => setIsErrorVisible(false), 5000);
  }
}

  function openProductDetails(product_id){
         setProductId(product_id);
         navigate("/productdetails")
    }
  return (
    <div className="cart-body">

      <div className="Left_Side">
        {/* <button className="back-button"><p>{"<"}</p></button> */}

        <div className="Product_listing">
            {cartProducts.map((product) => (
                <div className="product_cart" key={product.product_id} onClick={()=>{openProductDetails(product.product_id)}}>
                    <div className="product_cart_image_container">
                        <img
                        src={`${host}/Media/${product?.product_image}`}
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
                              getProductList();
                              decreaseQuantity(product?.product_id);
                              

                            }}><p>-</p></button>
                        <h2>{product?.product_quantity}</h2>
                        <button className="add-in-cart-button" onClick={(e) => {
                            e.stopPropagation(); 
                            getProductList();
                            increaseQuantity(product?.product_id);
                            
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
                <td className="payment-details-value">200</td>
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
