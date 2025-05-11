import "./App.css";

import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import HomePage from "./screens/HomePage";
import Login from "./screens/Login";
import Products from "./screens/Products";

function App() { 
  const navigate = useNavigate();

  const [token, setToken] = useState(localStorage.getItem("token"));

  const [searchedProducts, setSearchedProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchPageNumber, setSearchPageNumber] = useState(1);
  const [banner, setBanner] = useState([]); 
  const [features,setFeatures] = useState([]);
  const [customerName, setCustomerName] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 8000]);
  const [currentPage, setCurrentPage] = useState(1);  
  const [totalPages, setTotalPages] = useState(4); 

  const showHomePage = () => {
    navigate("/homepage");
  };
  
  return (
    <Routes>

      <Route
        path="/homepage"
        element={<HomePage 
                    navigate={navigate} 
                    setSearchPageNumber={setSearchPageNumber} 
                    searchPageNumber={searchPageNumber}
                    setSearch={setSearch} 
                    search={search}
                    setSearchedProducts={setSearchedProducts} 
                    banner={banner}
                    setBanner={setBanner}
                    features={features}
                    setFeatures={setFeatures}
                    customerName={customerName}
                    setCustomerName={setCustomerName}

                    />}
      />

      <Route
        path="/login"
        element={<Login showHomePage={showHomePage} setToken={setToken}/>}
      />
      
      <Route
        path="/products"
        element={<Products navigate={navigate}
        setSearchPageNumber={setSearchPageNumber} 
        searchPageNumber={searchPageNumber}
        setSearch={setSearch} 
        search={search}
        setSearchedProducts={setSearchedProducts}
        searchedProducts={searchedProducts}
        customerName={customerName}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        setTotalPages={setTotalPages}

        />}
      />

    </Routes>
  );
}

export default App;