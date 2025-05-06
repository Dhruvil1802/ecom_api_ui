import React from 'react';
import Header from '../components/homepage/Header';
import SideMenu from '../components/homepage/SideMenu';
import DisplayProducts from '../components/products/DisplayProducts';



function Products({navigate, search, setSearchPageNumber, searchPageNumber, setSearch, setSearchedProducts, searchedProducts}){



    return(<>
            <Header navigate={navigate} />
            <SideMenu />
            <DisplayProducts navigate={navigate}
        setSearchPageNumber={setSearchPageNumber} 
        searchPageNumber={searchPageNumber}
        setSearch={setSearch} 
        search={search}
        setSearchedProducts={setSearchedProducts}
        searchedProducts={searchedProducts}/> 
    </>)
}

export default Products;