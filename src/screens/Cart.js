import CartBody from "../components/cart/CartBody";
import Header from "../components/homepage/Header";

function Cart({navigate, customerName, setSearch, search, setSearched,setCurrentPage}) {
  return (
    <>
      <Header navigate={navigate} 
              customerName={customerName} 
              setSearch={setSearch} 
              search={search}
              setSearched={setSearched}
              setCurrentPage={setCurrentPage}

      />
      <CartBody/>
    </>
  );
}
export default Cart;