import { useState } from "react";
import CartBody from "../components/cart/CartBody";
import Header from "../components/homepage/Header";

function Cart({navigate, 
              customerName, 
              setSearch, 
              search, 
              setSearched, 
              setCurrentPage, 
              setCustomerName, 
              setProductId, 
              cart, 
              setCart, 
              setContent,
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
            emptyMessage,
            setEmptyMessage
}) {
        const [isErrorVisible, setIsErrorVisible] = useState(false)
        const [errorMessage, setErrorMessage] = useState("")
  return (
    <>
      <Header navigate={navigate} 
              customerName={customerName} 
              setCustomerName={setCustomerName}
              setSearch={setSearch} 
              search={search}
              setSearched={setSearched}
              setCurrentPage={setCurrentPage}
              setContent={setContent}
              

      />
      <CartBody setProductId={setProductId} 
          navigate={navigate} 
          cart={cart} 
          setCart={setCart} 
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
          subTotal={subTotal}
          setSubTotal={setSubTotal}
          shipping={shipping}
          setShipping={setShipping}
          tax={tax}
          setTax={setTax}
          total={total}
          setTotal={setTotal}
          setIsErrorVisible={setIsErrorVisible}
          setErrorMessage={setErrorMessage}
          isErrorVisible={isErrorVisible}
          errorMessage={errorMessage}
          emptyMessage={emptyMessage}
          setEmptyMessage={setEmptyMessage}
          />
    </>
  );
}
export default Cart;