import { useEffect, useState } from 'react';
import './DisplayProducts.css';
import LeftSideDisplayProducts from './LeftSideProductDisplay';
import DisplayProductRightSide from './RightSideProductDisplay';

const local = "http://127.0.0.1:8000";
const host = "https://ecomapi-production-f9d8.up.railway.app";

function DisplayProducts({navigate, search, setSearchPageNumber, searchPageNumber, searched, setSearchedProducts, searchedProducts, setProductId}){

    const [priceRange, setPriceRange] = useState([0, 8000]);
    const [currentPage, setCurrentPage] = useState(1);  
    const [totalPages, setTotalPages] = useState(4);   
    const [isErrorVisible, setIsErrorVisible] = useState(false)
    const [errorMessage, setErrorMessage] = useState()
    const [filterRating, setFilterRating] = useState()
    const [sortType, setSortType] = useState()


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
            if (data?.status?.code === 400 || data?.status?.code === 404)
            {
              
              setIsErrorVisible(true)
              setErrorMessage(data?.status?.message)
              setTimeout(()=>setIsErrorVisible(false), 5000);
            }

          }
          catch(error) {
            setIsErrorVisible(true)
                setErrorMessage("service unavailable")
                setTimeout(()=>setIsErrorVisible(false), 5000);
          }
          }
          fetchProducts();
      },[ searched]);


    useEffect(()=>{
        async function fetchProducts(){

          try{  
            console.log("search",search, "searchPageNumber",searchPageNumber,"sortType",sortType, "priceRange",priceRange, "filterRating",filterRating)
            console.log("ffffffffff",sortType)
            const res = await fetch(
              `${host}/products/sortandfilter/?search=${search}&page_no=${searchPageNumber}&sort_type=${sortType}&price_range=${JSON.stringify(priceRange)}&page_size=9`,
              { 
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            const data = await res.json();
            console.log(data.data)

            if (data.status.code === 200) {
            
              setSearchedProducts(data.data);
              console.log(data.data)
              
            }
            if (data?.status?.code === 400 || data?.status?.code === 404)
            {
              
              setIsErrorVisible(true)
              setErrorMessage(data?.status?.message)
              setTimeout(()=>setIsErrorVisible(false), 5000);
            }

          }
          catch(error) {
            setIsErrorVisible(true)
                setErrorMessage("service unavailable")
                setTimeout(()=>setIsErrorVisible(false), 5000);
          }
          }
          fetchProducts();
      },[searchPageNumber, sortType, priceRange, filterRating]);



      return (
        <div className="product_page">
            <LeftSideDisplayProducts priceRange={priceRange} setPriceRange={setPriceRange} setSortType={setSortType} setFilterRating={setFilterRating}/>
           
            <DisplayProductRightSide searchedProducts={searchedProducts} 
                                    totalPages={totalPages} 
                                    setCurrentPage={setCurrentPage} 
                                    currentPage={currentPage}
                                    setSearchPageNumber={setSearchPageNumber}
                                    setTotalPages={setTotalPages}
                                    navigate={navigate}
                                    setProductId={setProductId}
                                    />
            
            {isErrorVisible?<ErrorMessage message={errorMessage}/>:""}
        </div>
    );
}

export default DisplayProducts;



