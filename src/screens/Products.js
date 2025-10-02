import Header from '../components/homepage/Header';
import DisplayProducts from '../components/products/DisplayProducts';
import './Products.css';

function Products({navigate, token, search, setProductId, setSearch, setSearchedProducts, searchedProducts, customerName, searched, setSearched, setCurrentPage, currentPage, setCustomerName}){

    

    return(<>
            <Header navigate={navigate} 
              token={token}
              customerName={customerName} 
              setSearch={setSearch} 
              search={search}
              setSearched={setSearched}
              setCurrentPage={setCurrentPage}
              setCustomerName={setCustomerName}

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
                
                />

                
            </>)
}

export default Products;