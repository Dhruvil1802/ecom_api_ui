import CartBody from "../components/cart/CartBody";
import Header from "../components/homepage/Header";

function Cart({navigate, customerName, setSearch, search, setSearched}) {
  return (
    <>
      <Header navigate={navigate} 
              customerName={customerName} 
              setSearch={setSearch} 
              search={search}
              setSearched={setSearched}
      />
      <CartBody/>
    </>
  );
}
export default Cart;