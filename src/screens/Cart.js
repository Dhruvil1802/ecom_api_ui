import CartBody from "../components/cart/CartBody";
import Header from "../components/homepage/Header";

function Cart({navigate, customerName, setSearch, search, setSearched, setCurrentPage, setCustomerName, setProductId}) {
  return (
    <>
      <Header navigate={navigate} 
              customerName={customerName} 
              setCustomerName={setCustomerName}
              setSearch={setSearch} 
              search={search}
              setSearched={setSearched}
              setCurrentPage={setCurrentPage}

      />
      <CartBody setProductId={setProductId} navigate={navigate}/>
    </>
  );
}
export default Cart;