import "./App.css";

import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Cart from "./screens/Cart";
import HomePage from "./screens/HomePage";
import Login from "./screens/Login";
import ProductDetails from "./screens/ProductDetails";
import Products from "./screens/Products";

function App() { 
  const navigate = useNavigate();

  const [token, setToken] = useState(localStorage.getItem("token"));

  const [searchedProducts, setSearchedProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [searched, setSearched] = useState();
  const [banner, setBanner] = useState([]); 
  const [features,setFeatures] = useState([]);
  const [customerName, setCustomerName] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 8000]);
  const [currentPage, setCurrentPage] = useState(1);  
  const [productDetails, setProductDetails] = useState();
  const [productId, setProductId] = useState();
  



  const showHomePage = () => {
    navigate("/homepage");
  };
  
  return (
    <Routes>

      <Route
        path="/homepage"
        element={<HomePage 
                    navigate={navigate} 
                    token={token}
     
                    setSearch={setSearch} 
                    search={search}
                    setSearched={setSearched}
                    setSearchedProducts={setSearchedProducts} 
                    banner={banner}
                    setBanner={setBanner}
                    features={features}
                    setFeatures={setFeatures}
                    customerName={customerName}
                    setCustomerName={setCustomerName}
                    setCurrentPage={setCurrentPage
                    }

                    />}
      />

      <Route
        path="/login"
        element={<Login showHomePage={showHomePage} setToken={setToken} />}
      />
      
      <Route
        path="/products"
        element={<Products navigate={navigate}
          token={token}
          setSearch={setSearch} 
          search={search}
          searched={searched}
          setSearched={setSearched}
          setSearchedProducts={setSearchedProducts}
          searchedProducts={searchedProducts}
          customerName={customerName}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}

          setProductId={setProductId}

        />} 
      />
      <Route
        path="/productdetails"
        element={<ProductDetails 
              customerName={customerName}
              navigate={navigate}
              setSearch={setSearch} 
              search={search}
              setSearched={setSearched}
              productDetails={productDetails} 
              setProductDetails={setProductDetails} 
              productId={productId}
              token={token}


               />}
      />
      <Route
        path="/cart"
        element={<Cart               
              customerName={customerName}
              token={token}
              navigate={navigate}
              setSearch={setSearch} 
              search={search}
              setSearched={setSearched}/>
        }/>
    </Routes>
  );
}

export default App;