
import Header from "../components/homepage/Header";
import Details from "../components/ProductDetails/Details";

function ProductDetails({navigate, customerName, setSearch, search, productId, setProductId, setSearched, token, setCustomerName, setCurrentPage, setContent }) {
  return (
    < >
            <Header navigate={navigate}   
              customerName={customerName} 
              setCustomerName={setCustomerName}
              setSearch={setSearch} 
              setSearched={setSearched}
              search={search}
              token={token}
              setCurrentPage={setCurrentPage}
              setContent={setContent}
              />
            {/* <SideMenu /> */}
            <Details  productId={productId} token={token} setProductId={setProductId}/>
    </>
  );
}
export default ProductDetails;