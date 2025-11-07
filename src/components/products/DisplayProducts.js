import { useEffect, useState } from 'react';
import { inuse_url } from '../../App.js';
import ErrorMessage from '../../error/errorMessage';
import './DisplayProducts.css';
import LeftSideDisplayProducts from './LeftSideProductDisplay';
import DisplayProductRightSide from './RightSideProductDisplay';
// const local = "http://127.0.0.1:8000";
// const host = "https://ecomapi-production-f9d8.up.railway.app";

function DisplayProducts({
                          navigate,
                          search,
                          setSearch,
                          searched,
                          setSearched,
                          setSearchedProducts,
                          searchedProducts,
                          setProductId,
                          setCurrentPage,
                          currentPage,
                          cart,
                          setCart,
                          setFeatureId,
                          featureId,
                          setContent,
                          content,
                          setProductDisplayTitle,
                          productDisplayTitle,
                          cartProducts,
                          setCartProducts,
                          subTotal,
                          setSubTotal,
                          setShipping,
                          tax,
                          setTax,
                          total,
                          setTotal,
                          emptyMessage,
                          setEmptyMessage
                          
                          
                          })
 {
    
    const stored_priceRange = localStorage.getItem('priceRange')
    ? JSON.parse(localStorage.getItem("priceRange"))
    : [0,8000];
    const [priceRange, setPriceRange] = useState(stored_priceRange);


    const [totalPages, setTotalPages] = useState();   
    const [isErrorVisible, setIsErrorVisible] = useState(false)
    const [errorMessage, setErrorMessage] = useState()

    const stored_filterrating = localStorage.getItem('filterRating')
    ? localStorage.getItem('filterRating')
    : 0;
    const [filterRating, setFilterRating] = useState(stored_filterrating)

    const stored_sorttype = localStorage.getItem("sortType")
    ? localStorage.getItem("sortType")
    : "top_rated";
    const [sortType, setSortType] = useState(stored_sorttype);

    const stored_category = localStorage.getItem("category")
    ? localStorage.getItem("category")
    : "";
    const [category, setCategory] = useState(stored_category);

    const [openLeft, setOpenLeft] = useState(false);



useEffect(() => { 

  if (!searched) {
    const storedSearched = localStorage.getItem('searched') || "";
    setSearched(storedSearched);  
  }

  if (!currentPage) {
    const storedCurrentPage = localStorage.getItem('current_page') || 1;
    setCurrentPage(storedCurrentPage);
  }
  }, []); 
    

    useEffect(()=>{
        async function fetchProducts(){
          try{  
            let url = "";
            if (content === "search") {
              url = `${inuse_url}/products/sortandfilter/?search=${searched?searched:""}&page_no=${currentPage}&sort_type=${sortType}&price_range=${JSON.stringify(priceRange)}&page_size=${openLeft?8:10}`;
            } else if (content === "feature") {
              url = `${inuse_url}/products/featuredsorting/?feature_id=${featureId || ""}&page_size=${openLeft ? 8 : 10}&page_no=${currentPage}&sort_type=${sortType}&price_range=${JSON.stringify(priceRange)}&page_size=${openLeft?8:10}`;
            } else {
              return; 
            }
            const res = await fetch(url, {
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
      },[ sortType, priceRange, filterRating, currentPage, openLeft, content, searched, featureId]);



      return (
        <div className="product_page">
            <button className='toogle_left_button' onClick = {() => setOpenLeft(!openLeft)}>⇅</button>
            {openLeft?<div className="left_side_display">
            <LeftSideDisplayProducts priceRange={priceRange} 
                                     setPriceRange={setPriceRange} 
                                     setSortType={setSortType} 
                                     sortType={sortType}
                                     setFilterRating={setFilterRating} 
                                     filterRating={filterRating}
                                     setCategory={setCategory}
                                     category={category}/>
            </div>:""}
            
           
            <DisplayProductRightSide searchedProducts={searchedProducts} 
                                    totalPages={totalPages} 
                                    setCurrentPage={setCurrentPage} 
                                    currentPage={currentPage}
                                    navigate={navigate}
                                    setProductId={setProductId}
                                    openLeft={openLeft}
                                    cart={cart}
                                    setCart={setCart}
                                    setProductDisplayTitle={setProductDisplayTitle}
                                    productDisplayTitle={productDisplayTitle}
                                    cartProducts={cartProducts}
                                    setCartProducts={setCartProducts}
                                    subTotal={subTotal}
                                    setSubTotal={setSubTotal}
                                    setShipping={setShipping}
                                    tax={tax}
                                    setTax={setTax}
                                    total={total}
                                    setTotal={setTotal}
                                    setIsErrorVisible={setIsErrorVisible}
                                    setErrorMessage={setErrorMessage}
                                    emptyMessage={emptyMessage}
                                    setEmptyMessage={setEmptyMessage}
                                    />
            
            {isErrorVisible?<ErrorMessage message={errorMessage}/>:""}
        </div>
    );
}

export default DisplayProducts;



