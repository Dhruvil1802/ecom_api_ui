import CartBody from "../components/cart/CartBody";
import Header from "../components/homepage/Header";

function Cart({navigate, customerName, setSearch, search, setSearched, setCurrentPage, setCustomerName, setProductId, cart, setCart, setContent }) {
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
      <CartBody setProductId={setProductId} navigate={navigate} cart={cart} setCart={setCart} />
    </>
  );
}
export default Cart;