
import Header from "../components/homepage/Header";
import Details from "../components/ProductDetails/Details";

function ProductDetails({
  navigate,
  customerName,
  details,
  cart,
  setCart,
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
  product,
  setProductId,
  setIsErrorVisible,
  setErrorMessage,
  emptyMessage,
  setEmptyMessage,
  setSearch,
  search,
  productId,
  setSearched,
  token,
  setCustomerName,
  setCurrentPage,
  setContent
}) {

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
           <Details
                productId={productId}
                token={token}
                setProductId={setProductId}
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
                product={product}
                emptyMessage={emptyMessage}
                setEmptyMessage={setEmptyMessage}
                />

    </>
  );
}
export default ProductDetails;