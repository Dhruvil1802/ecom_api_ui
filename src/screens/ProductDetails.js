
import Header from "../components/homepage/Header";
import Details from "../components/ProductDetails/Details";

function ProductDetails({navigate, customerName, setSearch, search, productDetails, setProductDetails, productId,setSearched, token }) {
  return (
    <>
            <Header navigate={navigate}   
              customerName={customerName} 
              setSearch={setSearch} 
              setSearched={setSearched}
              search={search}
              token={token}
              />
            {/* <SideMenu /> */}
            <Details productDetails={productDetails} setProductDetails={setProductDetails} productId={productId} token={token}/>
    </>
  );
}
export default ProductDetails;