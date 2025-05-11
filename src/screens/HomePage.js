import { useEffect } from 'react';
import Footer from '../components/homepage/Footer';
import Header from '../components/homepage/Header';
import ProductGrid from '../components/homepage/ProductGrid';
import SideMenu from '../components/homepage/SideMenu';
import './HomePage.css';

const local = "http://127.0.0.1:8000";
const host = "https://ecomapi-production-f9d8.up.railway.app";


const HomePage = ({navigate, setSearchPageNumber, setSearchedProducts, setSearch, search, searchPageNumber, banner, setBanner, features, setFeatures, customerName, setCustomerName}) => {


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
          }
        }
        catch {
   
        }
      }
      getHomePageDetails();
    },[]);

  return (
    <div className="homepage"    
    style={{
      backgroundImage: `url("${host}/static/banner/31.png")`,
    }}>
      <Header navigate={navigate} 
              customerName={customerName} 
              setSearchPageNumber={setSearchPageNumber} 
              setSearch={setSearch} 
              search={search}
              setSearchedProducts={setSearchedProducts} 
              searchPageNumber={searchPageNumber}
              />
      <SideMenu />

      <div className="hero">  
        <div className="hero-buttons">
          {/* <button className="btn-primary">Buy Now</button>
          <button className="btn-secondary">Shop All</button> */}
        </div>
      </div>

      <ProductGrid features={features}/>
      <Footer/>
    </div>
  );
};

export default HomePage;
