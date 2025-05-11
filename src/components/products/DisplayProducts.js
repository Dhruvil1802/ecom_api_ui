import { useEffect, useState } from 'react';
import './DisplayProducts.css';
import LeftSideDisplayProducts from './LeftSideProductDisplay';
import DisplayProductRightSide from './RightSideProductDisplay';

const local = "http://127.0.0.1:8000";
const host = "https://ecomapi-production-f9d8.up.railway.app";

function DisplayProducts({navigate, search, setSearchPageNumber, searchPageNumber, setSearch, setSearchedProducts, searchedProducts}){

    const [priceRange, setPriceRange] = useState([0, 8000]);
    const [currentPage, setCurrentPage] = useState(1);  
    const [totalPages, setTotalPages] = useState(4);   

    useEffect(()=>{
        async function fetchProducts(){

          try{
            const res = await fetch(
              `${host}/products/search/?search=${search}&page_size=3&page_no=${searchPageNumber}`,
              { 
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            const data = await res.json();

            if (data.status.code === 200) {
            
              setSearchedProducts(data.data);
            }
          }
          catch(error) {
          }
          }
          fetchProducts();
      },[search, searchPageNumber])



      return (
        <div className="product_page">
            <LeftSideDisplayProducts priceRange={priceRange} setPriceRange={setPriceRange}/>
           
            <DisplayProductRightSide searchedProducts={searchedProducts} 
                                    totalPages={totalPages} 
                                    setCurrentPage={setCurrentPage} 
                                    currentPage={currentPage}
                                    setSearchPageNumber={setSearchPageNumber}
                                    setTotalPages={setTotalPages}/>
            
            
        </div>
    );
}

export default DisplayProducts;



