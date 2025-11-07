
import { inuse_url } from '../../App.js';
import GetCart from '../cart/GetCart.js';

async function ManageQuantity(product, 
                              action, 
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
                              setEmptyMessage) {

let updatedProducts = cartProducts.map(p =>
  p.product_id === product?.product_id
    ? {
        ...p,
        product_quantity:
          action === "increase"
            ? p.product_quantity + 1
            : action === "decrease" ? p.product_quantity - 1 : p.product_quantity,
      }
    : p
);

if (action === "add" && !updatedProducts.find(p => p.product_id === product?.product_id)) {
  updatedProducts.push({ product_id : product?.product_id, product_quantity: 1, product_price: product?.product_price, product_name: product?.product_name, product_image: product?.product_image });
}

updatedProducts = updatedProducts.filter(p => p.product_quantity > 0);

const currentProduct = action === "add"?product:cartProducts.find(p => p.product_id === product?.product_id);
const price = Number(currentProduct?.product_price) || 0;
const adjustedPrice = action === "decrease" ? -Number(price) : action === "increase" ? +Number(price) : action === "add" ? +Number(price) : 0;
const newSubTotal = +(Number(subTotal || 0) + adjustedPrice).toFixed(2);
const newShipping =
  newSubTotal > 500
    ? 25.0
    : +(Number(newSubTotal || 0) * 0.05).toFixed(2);
const newTax = +(Number(tax || 0) + adjustedPrice * 0.13).toFixed(2);
const newTotal = +(newSubTotal + newShipping + newTax).toFixed(2);


  const newCart = {
    ...cart,
    products: updatedProducts,
    sub_total: newSubTotal,
    delivery_fees: newShipping,
    tax: newTax,
    total: newTotal,
    };  

    setCartProducts(updatedProducts)
    setSubTotal(newSubTotal)
    setShipping(newShipping)
    setTax(newTax)
    setTotal(newTotal)
    setCart(newCart)  


  try {
    const res = await fetch(`${inuse_url}/cart/management/`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cart: newCart }),
    });
    const data = await res.json();
    if (data.status.code === 201) {

        GetCart(emptyMessage,
          setEmptyMessage,
          setCartProducts,
          setSubTotal,
          setShipping,
          setTax,
          setTotal,
          setCart,
          setIsErrorVisible,
          setErrorMessage);

    }
  } catch (error) {
    setIsErrorVisible(true);
    setErrorMessage("service unavailable");
    setTimeout(() => setIsErrorVisible(false), 5000);
  }
}
export default ManageQuantity;

