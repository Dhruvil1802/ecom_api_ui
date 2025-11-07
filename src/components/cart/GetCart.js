import { inuse_url } from "../../App";

async function GetCart(setCartProducts, 
                       setCart, 
                       setSubTotal, 
                       setShipping, 
                       setTax, 
                       setTotal, 
                       setIsErrorVisible, 
                       setErrorMessage, 
                        ) {

  try {
    const res = await fetch(`${inuse_url}/cart/management/`, {
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

export default  GetCart;

