
import { useEffect, useState } from "react";
import ErrorMessage from '../../error/errorMessage';
import "./CartBody.css";

const local = "http://127.0.0.1:8000";
const host = "https://ecomapi-production-f9d8.up.railway.app";


function CartBody() {
    const [cartProducts, setCartProducts] = useState([]);
    const [subTotal, setSubTotal] = useState();
    const [shipping, setShipping] = useState();
    const [tax, setTax] = useState();
    const [total, setTotal] = useState();

    const [isErrorVisible, setIsErrorVisible] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        async function getProductList() {
          try {
            const res = await fetch(
              `${host}/cart/management/`,
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
              setCartProducts(data?.data?.products);
              setSubTotal(data?.data?.sub_total);
              setShipping(data?.data?.delivery_fees);
              setTax(data?.data?.tax);
              setTotal(data?.data?.total);
              
            }         
            if (data?.status?.code === 400 || data?.status?.code === 404)
            {
              
              setIsErrorVisible(true)
              setErrorMessage(data?.status?.message)
              setTimeout(()=>setIsErrorVisible(false), 5000);
            
        }
          } catch (error) {
                setIsErrorVisible(true)
                setErrorMessage("service unavailable")
                setTimeout(()=>setIsErrorVisible(false), 5000);           }
        }
        getProductList();
      }, []);
  return (
    <div className="cart-body">

      <div className="Left_Side">
        <button className="back-button"><p>{"<"}</p></button>

        <div className="Product_listing">
            {cartProducts.map((product, index) => (
                <div className="product_cart" key={index}>
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
                        <button className="sub-in-cart-button"><p>-</p></button>
                        <h1>{product?.product_quantity}</h1>
                        <button className="add-in-cart-button">+</button>
                    </div>

                </div>
            ))}
        </div>
      </div>
      <div className="Right_Side">

        <div className="payment-details">
            <h1>Payment Details</h1>
            <table className="payment-details-table">
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
            </table>
            <table className="payment-details-total">
                <tr>
                    <td>Total</td>
                    <td className="payment-details-value">{total}</td>
                </tr>
            </table>
            <button className="checkout-button">CHECKOUT</button>
        </div>
      </div>

      {isErrorVisible?<ErrorMessage message={errorMessage}/>:""}

    </div>
  );
}
export default CartBody;
