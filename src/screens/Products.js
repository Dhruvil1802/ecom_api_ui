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
                   cart, setCart, 
                   setFeatureId, 
                   featureId, 
                   content, 
                   setContent,
                   setProductDisplayTitle,
                   productDisplayTitle
                }){


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
                />

                
            </>)
}

export default Products;