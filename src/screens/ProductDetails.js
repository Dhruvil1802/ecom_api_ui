
import Header from "../components/homepage/Header";
import SideMenu from "../components/homepage/SideMenu";
import Details from "../components/ProductDetails/Details";

function ProductDetails({navigate, customerName, setSearch, search, productDetails, setProductDetails, productId }) {
  return (
    <>
            <Header navigate={navigate} 
              customerName={customerName} 
              setSearch={setSearch} 
              search={search}
              />
            <SideMenu />
            <Details productDetails={productDetails} setProductDetails={setProductDetails} productId={productId}/>
    </>
  );
}
export default ProductDetails;