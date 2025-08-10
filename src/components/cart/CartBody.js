
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

    // useEffect(() => {
    //                   getProductList();
    //                 }, []);
  
    // async function getProductList() {
    //       try {
    //         const res = await fetch(
    //           `${local}/cart/management/`,
    //           {
    //             method: "GET",
    //             headers: {
    //               Authorization: `Bearer ${localStorage.getItem("token")}`,
    //               "Content-Type": "application/json",
    //             },
    //           }
    //         );
    //         const data = await res.json();
    //         if (data.status.code === 200) {
    //           setCartProducts(data?.data?.products);
    //           setSubTotal(data?.data?.sub_total);
    //           setShipping(data?.data?.delivery_fees);
    //           setTax(data?.data?.tax);
    //           setTotal(data?.data?.total);
              
    //         }         
    //         if (data?.status?.code === 400 || data?.status?.code === 404)
    //         {
              
    //           setIsErrorVisible(true)
    //           setErrorMessage(data?.status?.message)
    //           setTimeout(()=>setIsErrorVisible(false), 5000);
            
    //     }
    //       } catch (error) {
    //             setIsErrorVisible(true)
    //             setErrorMessage("service unavailable")
    //             setTimeout(()=>setIsErrorVisible(false), 5000);           }
    //     }

      
      
    //   function increaseQuantity(product_id) {
    //     async function increaseQuantityHandler() {
    //               console.log("increaseQuantity called with product_id:", product_id);

    //       try {
    //         const res = await fetch(
    //         `${local}/cart/management/`,
    //           {
    //             method: "POST",
    //             headers: {
    //               Authorization: `Bearer ${localStorage.getItem("token")}`,
    //               "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({product_id:product_id}),

    //           }
    //         );
    //         const data = await res.json();
    //         console.log("data",data);

    //         if (data.status.code === 200) {
    //           getProductList()
    //         }
    //       } catch (error) {
    //         setIsErrorVisible(true)
    //         setErrorMessage("service unavailable")
    //         setTimeout(()=>setIsErrorVisible(false), 5000);
    //       }
    //     }
    //     increaseQuantityHandler();

    //   }
    //   function decreaseQuantity(product_id) {
    //     async function decreaseQuantityHandler() {
    //               console.log("decreaseQuantity called with product_id:", product_id);

    //       try {
    //         const res = await fetch(
    //           `${local}/cart/management/`,
    //           {
    //             method: "POST",
    //             headers: {
    //               Authorization: `Bearer ${localStorage.getItem("token")}`,
    //               "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({action:"remove", product_id:product_id}),

    //           }
    //         );
    //         const data = await res.json();
    //         if (data.status.code === 200) {
    //            getProductList()
    //         }
    //       } catch (error) {
    //         setIsErrorVisible(true)
    //         setErrorMessage("service unavailable")
    //         setTimeout(()=>setIsErrorVisible(false), 5000);
    //       }
    //     }
    //     decreaseQuantityHandler();
    //   }

    useEffect(() => {
  getProductList();
}, []);

async function getProductList() {
    console.log("fetch data")

  try {
    const res = await fetch(`${local}/cart/management/`, {
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
    }
  } catch (error) {
    setIsErrorVisible(true);
    setErrorMessage("service unavailable");
    setTimeout(() => setIsErrorVisible(false), 5000);
  }
}
async function increaseQuantity(product_id) {
    console.log("increase quantity")

  try {
    const res = await fetch(`${local}/cart/management/`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ product_id }),
    });
    const data = await res.json();
    console.log("I", data)
    if (data.status.code === 201) {
      console.log("before increase")
      await getProductList(); // wait for fresh cart
            console.log("after increase")

    }
  } catch (error) {
    setIsErrorVisible(true);
    setErrorMessage("service unavailable");
    setTimeout(() => setIsErrorVisible(false), 5000);
  }
}

async function decreaseQuantity(product_id) {
  console.log("decrease quantity")
  try {
    const res = await fetch(`${local}/cart/management/`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ action: "remove", product_id }),
    });
    const data = await res.json();
        // console.log("D", data)

    if (data.status.code === 201) {
      console.log("before decrease")
      await getProductList(); // wait for fresh cart
      console.log("after decrease")

    }
  } catch (error) {
    setIsErrorVisible(true);
    setErrorMessage("service unavailable");
    setTimeout(() => setIsErrorVisible(false), 5000);
  }
}

  return (
    <div className="cart-body">

      <div className="Left_Side">
        {/* <button className="back-button"><p>{"<"}</p></button> */}

        <div className="Product_listing">
            {cartProducts.map((product) => (
                <div className="product_cart" key={product.product_id}>
                    <div className="product_cart_image_container">
                        <img
                        src={`${local}/Media/${product?.product_image}`}
                        alt={product?.product_name}
                        className="product-image"
                        />
                    </div>
                    <div className="product_cart_price_name">                    
                        <h3 >{product?.product_name}</h3>
                        <h2>${product?.product_price}</h2>
                    </div>
                    <div className="product_cart_quantity">
                        <button className="sub-in-cart-button" onClick={()=>decreaseQuantity(product?.product_id)}><p>-</p></button>
                        <h2>{product?.product_quantity}</h2>
                        <button className="add-in-cart-button" onClick={()=>increaseQuantity(product?.product_id)}><p>+</p></button>
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
