
import { useEffect, useState } from 'react';
import ErrorMessage from '../../error/errorMessage';
import BasicDetails from './BasicDetails';
import './Details.css';
import RatingAndReview from './RatingAndReview';

const local = "http://127.0.0.1:8000";
const host = "https://ecomapi-production-f9d8.up.railway.app";

function Details({ productId, token, setProductId }) {

    const [productDetails, setProductDetails] = useState();
    const [isErrorVisible, setIsErrorVisible] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [reload,setReload] = useState("")


useEffect(() => { 

  if (!productId) {
    const storedProductId = localStorage.getItem('product_id') || "";
    setProductId(storedProductId);
  }
}, []);

useEffect(() => {
    async function getProductDetails() {
      try {
        const res = await fetch(
          `${host}/products/details/?product_id=${productId}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.json();
        if (data.status.code === 200) {
          setProductDetails(data.data);
          
        } 
        if (data?.status?.code === 400 || data?.status?.code === 404)
            {
              
              setIsErrorVisible(true)
              setErrorMessage(data?.status?.message)
              setTimeout(()=>setIsErrorVisible(false), 5000);
            
        }
      } catch (error) {
                setIsErrorVisible(true)
                setErrorMessage("service unavailable")
                setTimeout(()=>setIsErrorVisible(false), 5000);      
              }
    }
    getProductDetails();
  }, [reload]);

  const details = productDetails?.product_details;

  return (
    <div className="product-details-page">
   
      <BasicDetails details={details}/>
      <RatingAndReview details={details} productDetails={productDetails} setReload={setReload} token={token}/>
     
                          {isErrorVisible?<ErrorMessage message={errorMessage}/>:""}

    </div>
  );
}

export default Details;



 