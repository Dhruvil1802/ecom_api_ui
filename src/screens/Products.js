import Header from '../components/homepage/Header';
import SideMenu from '../components/homepage/SideMenu';
import DisplayProducts from '../components/products/DisplayProducts';



function Products({navigate, search, setSearchPageNumber, searchPageNumber, setSearch, setSearchedProducts, searchedProducts, customerName, setProductId, isSearch}){



    return(<>
            <Header navigate={navigate} 
              customerName={customerName} 
              setSearchPageNumber={setSearchPageNumber} 
              setSearch={setSearch} 
              search={search}
              setSearchedProducts={setSearchedProducts} 
              searchPageNumber={searchPageNumber}/>
            <SideMenu />
            <DisplayProducts navigate={navigate}
                setSearchPageNumber={setSearchPageNumber} 
                searchPageNumber={searchPageNumber}
                setSearch={setSearch} 
                search={search}
                isSearch={isSearch}
                setSearchedProducts={setSearchedProducts}
                searchedProducts={searchedProducts}
                setProductId={setProductId}
                /> 
            </>)
}

export default Products;