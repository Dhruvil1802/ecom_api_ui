import React, { useEffect, useState } from 'react';
import Footer from '../components/homepage/Footer';
import Header from '../components/homepage/Header';
import ProductGrid from '../components/homepage/ProductGrid';
import SideMenu from '../components/homepage/SideMenu';
import './HomePage.css';

const local = "http://127.0.0.1:8000";
const host = "https://ecomapi-production-f9d8.up.railway.app"


const HomePage = () => {
  const [banner, setBanner] = useState(); 
  const [features,setfeatures] = useState();

  // fetching homepage details
  useEffect(() => {
      async function getHomePageDetails(){
        try{
          const res = await fetch(
            `${host}/homepage/web/`,
            { 
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const data = await res.json();

          if (data.status.code === 200) {
            setBanner(data.data.banner[0]);
            setfeatures(data.data.features);
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
      backgroundImage: `url("${host}/Media/banner/31.png")`,
    }}>
      <Header />
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
