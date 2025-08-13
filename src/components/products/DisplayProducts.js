import { useEffect, useState } from 'react';
import ErrorMessage from '../../error/errorMessage';
import './DisplayProducts.css';
import LeftSideDisplayProducts from './LeftSideProductDisplay';
import DisplayProductRightSide from './RightSideProductDisplay';

const local = "http://127.0.0.1:8000";
const host = "https://ecomapi-production-f9d8.up.railway.app";

function DisplayProducts({navigate, search, currentPage, setCurrentPage, searched, setSearchedProducts, searchedProducts, setProductId}){

    const [priceRange, setPriceRange] = useState([0, 8000]);
    const [totalPages, setTotalPages] = useState();   
    const [isErrorVisible, setIsErrorVisible] = useState(false)
    const [errorMessage, setErrorMessage] = useState()
    const [filterRating, setFilterRating] = useState()
    const [sortType, setSortType] = useState()
    const [category, setCategory] = useState();
    const [openLeft, setOpenLeft] = useState(true);



     useEffect(()=>{
        async function fetchProducts(){

          try{
            const res = await fetch(
              `${host}/products/search/?search=${search}&page_size=${openLeft?8:10}&page_no=${currentPage}`,
              { 
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            const data = await res.json();
            if (data.status.code === 200) {
              setSearchedProducts(data.data.product_list);
              setTotalPages(data.data.total_pages);
              
              
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
      },[ searched, currentPage, openLeft]);


    useEffect(()=>{
        async function fetchProducts(){

          try{  
            const res = await fetch(
              `${host}/products/sortandfilter/?search=${search}&page_no=${currentPage}&sort_type=${sortType}&price_range=${JSON.stringify(priceRange)}&page_size=${openLeft?8:10}`,
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
      },[ sortType, priceRange, filterRating, currentPage, openLeft]);



      return (
        <div className="product_page">
            <button className='toogle_left_button' onClick={() => setOpenLeft(!openLeft)}>⇅</button>
            {openLeft?<div className="left_side_display">
            <LeftSideDisplayProducts priceRange={priceRange} setPriceRange={setPriceRange} setSortType={setSortType} setFilterRating={setFilterRating} setCategory={setCategory}/>
            </div>:""}
            
           
            <DisplayProductRightSide searchedProducts={searchedProducts} 
                                    totalPages={totalPages} 
                                    setCurrentPage={setCurrentPage} 
                                    currentPage={currentPage}
                                    navigate={navigate}
                                    setProductId={setProductId}
                                    openLeft={openLeft}
                                    />
            
            {isErrorVisible?<ErrorMessage message={errorMessage}/>:""}
        </div>
    );
}

export default DisplayProducts;



