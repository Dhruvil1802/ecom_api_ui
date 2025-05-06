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
        />}
      />

    </Routes>
  );
}

export default App;