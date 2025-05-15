import Header from '../components/homepage/Header';
import DisplayProducts from '../components/products/DisplayProducts';



function Products({navigate, search, setSearchPageNumber, searchPageNumber, setProductId, setSearch, setSearchedProducts, searchedProducts, customerName, searched,setSearched}){



    return(<>
            <Header navigate={navigate} 
              customerName={customerName} 
              setSearchPageNumber={setSearchPageNumber} 
              setSearch={setSearch} 
              search={search}
              setSearchedProducts={setSearchedProducts} 
              searchPageNumber={searchPageNumber}
              setSearched={setSearched}
/>
            {/* <SideMenu /> */}
            <DisplayProducts navigate={navigate}
                setSearchPageNumber={setSearchPageNumber} 
                searchPageNumber={searchPageNumber}
                setSearch={setSearch} 
                search={search}
                searched={searched}
                setSearchedProducts={setSearchedProducts}
                searchedProducts={searchedProducts}
                setProductId={setProductId}/> 
                
            </>)
}

export default Products;