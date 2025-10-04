import "./App.css";

import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Cart from "./screens/Cart";
import HomePage from "./screens/HomePage";
import Login from "./screens/Login";
import ProductDetails from "./screens/ProductDetails";
import Products from "./screens/Products";
import Profile from "./screens/Profile";

function App() { 
  const navigate = useNavigate();

  //token
  const stored_token = localStorage.getItem('token')
    ? localStorage.getItem('token')
    : [];

  const [token, setToken] = useState(stored_token);

  //searched products
  // const stored_searched_products = JSON.parse(localStorage.getItem('searched_products'))
  //   ? JSON.parse(localStorage.getItem('searched_products'))
  //   : [];

  const [searchedProducts, setSearchedProducts] = useState([]);

  // searched
  const stored_searched = localStorage.getItem('searched')
    ? localStorage.getItem('searched')
    : "";
  const [searched, setSearched] = useState(stored_searched);

  // search
  const stored_search = localStorage.getItem('search')
  ? localStorage.getItem('search')
  : "";
  const [search, setSearch] = useState("");

  // current page
  const stored_current_page = localStorage.getItem('current_page')
  ? localStorage.getItem('current_page')
  : 1;
  const [currentPage, setCurrentPage] = useState(stored_current_page);

  // customer name
  const stored_customer_name = localStorage.getItem('customerName')
    ? localStorage.getItem('customerName')
    : "";
  const [customerName, setCustomerName] = useState(stored_customer_name);

  // product id
  const stored_product_id = localStorage.getItem('product_id')
    ? localStorage.getItem('product_id')
    : "";
  const [productId, setProductId] = useState(stored_product_id);

  //feature id
  const stored_feature_id = localStorage.getItem('feature_id')
    ? localStorage.getItem('feature_id')
    : "";
  const [featureId, setFeatureId] = useState(stored_feature_id);


  const [banner, setBanner] = useState([]); 
  const [features,setFeatures] = useState([]);
  // const [featureId, setFeatureId] = useState(null);
  const [categories, setCategories] = useState([]);

  const [priceRange, setPriceRange] = useState([0, 8000]);

  const [cart, setCart] = useState([]);
  // const [productDetails, setProductDetails] = useState();
  
  // console.log("token",token);
  // console.log("searchedProducts",searchedProducts);
  const stored_content = localStorage.getItem('content')
    ? localStorage.getItem('content')
    : "";
  const [content, setContent] = useState(stored_content);

  // product display title
  const stored_productDisplayTitle = localStorage.getItem('productDisplayTitle')
    ? localStorage.getItem('productDisplayTitle')
    : "";
  const [productDisplayTitle, setProductDisplayTitle] = useState(stored_productDisplayTitle);


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
                    featureId={featureId}
                    setFeatureId={setFeatureId}
                    setFeatures={setFeatures}
                    categories={categories}
                    setCategories={setCategories}
                    customerName={customerName}
                    setCustomerName={setCustomerName}
                    setCurrentPage={setCurrentPage}
                    setContent={setContent}
                    productDisplayTitle={productDisplayTitle}
                    setProductDisplayTitle={setProductDisplayTitle}
                  
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
          setCustomerName={setCustomerName}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setProductId={setProductId}
          setFeatureId={setFeatureId}
          featureId={featureId}
          cart={cart}
          setCart={setCart}
          content={content}
          setContent={setContent}
          setProductDisplayTitle={setProductDisplayTitle}
          productDisplayTitle={productDisplayTitle}

        />} 
      />
      <Route
        path="/productdetails"
        element={<ProductDetails 
              customerName={customerName}
              setCustomerName={setCustomerName}
              navigate={navigate}
              setSearch={setSearch} 
              search={search}
              setSearched={setSearched}
              // productDetails={productDetails} 
              // setProductDetails={setProductDetails} 
              setCurrentPage={setCurrentPage}
              productId={productId}
              setProductId={setProductId}
              setContent={setContent}

              token={token}


               />}
      />
      <Route
        path="/cart"
        element={<Cart               
              customerName={customerName}
              setCustomerName={setCustomerName}
              token={token}
              navigate={navigate}
              setSearch={setSearch} 
              search={search}
              setSearched={setSearched}
              setCurrentPage={setCurrentPage}
              setProductId={setProductId}
              cart={cart}
              setCart={setCart}
              />
        }/>

      <Route
        path="/profile"
        element={<Profile navigate={navigate} 
              customerName={customerName} 
              setCustomerName={setCustomerName}
              setSearch={setSearch} 
              search={search}
              setSearched={setSearched}
              setCurrentPage={setCurrentPage}
              token={token}
              setContent={setContent}
              />
        }/>



    </Routes>
  );
}

export default App;