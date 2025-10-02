import { useEffect, useState } from 'react';
import BuyerCategories from '../components/homepage/BuyerCategories';
import Footer from '../components/homepage/Footer';
import Header from '../components/homepage/Header';
import ProductGrid from '../components/homepage/ProductGrid';
import ErrorMessage from '../error/errorMessage';
import './HomePage.css';

const local = "http://127.0.0.1:8000";
const host = "https://ecomapi-production-f9d8.up.railway.app";


const HomePage = ({navigate, token, setSearch, search, banner, setBanner, features, setFeatures, customerName, setCustomerName, setSearched, setCurrentPage}) => {

      const [isErrorVisible, setIsErrorVisible] = useState(false)
      const [errorMessage, setErrorMessage] = useState("")
  // fetching homepage details
  useEffect(() => {
      async function getHomePageDetails(){
        try{
          const res = await fetch(
            `${host}/homepage/web/`,
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
            setBanner(data.data.banner[0]);
            setFeatures(data.data.features);
            setCustomerName(data.data.customer_name)
            localStorage.setItem("customer_name", data.data.customer_name);
            // setCurrentPage(1);
          }

          if (data?.status?.code === 400 || data?.status?.code === 404)
              {
                
                setIsErrorVisible(true)
                setErrorMessage(data?.status?.message)
                // setErrorMessage("asdfas")
                setTimeout(()=>setIsErrorVisible(false), 5000);
              }
        }
        catch {

                
                setIsErrorVisible(true)
                setErrorMessage("something went wrong")
                setTimeout(()=>setIsErrorVisible(false), 5000);
              
        }
      }
      getHomePageDetails();
    },[]);


  return (
    <div className="homepage"    
    style={{
      // backgroundImage: `url("${host}/static/banner/31.png")`,
    }}>
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

      <div className="hero">  
        <div className="hero-buttons">
          {/* <button className="btn-primary">Buy Now</button>
          <button className="btn-secondary">Shop All</button> */}
        </div>
      </div>
          
      <ProductGrid features={features}/>
      <BuyerCategories></BuyerCategories>
      <Footer/>
      {isErrorVisible?<ErrorMessage message={errorMessage}/>:""}

    </div>
  );
};

export default HomePage;
