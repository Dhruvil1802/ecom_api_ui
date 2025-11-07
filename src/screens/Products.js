import { useState } from 'react';
import Header from '../components/homepage/Header';
import DisplayProducts from '../components/products/DisplayProducts';
import './Products.css';

function Products({navigate, 
                   token, 
                   search, 
                   setProductId,
                   setSearch, 
                   setSearchedProducts, 
                   searchedProducts, 
                   customerName, 
                   searched, 
                   setSearched, 
                   setCurrentPage, 
                   currentPage, 
                   setCustomerName, 
                   cart, 
                   setCart, 
                   setFeatureId, 
                   featureId, 
                   content, 
                   setContent,
                   setProductDisplayTitle,
                   productDisplayTitle,
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
                }){
    const [isErrorVisible, setIsErrorVisible] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")


    return(<>
            <Header navigate={navigate} 
              token={token}
              customerName={customerName} 
              setSearch={setSearch} 
              search={search}
              setSearched={setSearched}
              setCurrentPage={setCurrentPage}
              setCustomerName={setCustomerName}
              setContent={setContent}
/>
            {/* <SideMenu /> */}
            <DisplayProducts navigate={navigate}
                setSearch={setSearch} 
                search={search}
                searched={searched}
                setSearchedProducts={setSearchedProducts}
                searchedProducts={searchedProducts}
                setProductId={setProductId}
                setSearched={setSearched}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                cart={cart}
                setCart={setCart}
                setFeatureId={setFeatureId}
                featureId={featureId}
                content={content}
                setContent={setContent}
                setProductDisplayTitle={setProductDisplayTitle}
                productDisplayTitle={productDisplayTitle}
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
                errorMessage={errorMessage}
                isErrorVisible={isErrorVisible}
                emptyMessage={emptyMessage}
                setEmptyMessage={setEmptyMessage}
                />

                
            </>)
}

export default Products;