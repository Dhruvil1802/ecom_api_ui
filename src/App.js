import "./App.css";

import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import HomePage from "./screens/HomePage";
import Login from "./screens/Login";

function App() { 
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));

  const showHomePage = () => {
    navigate("/homepage");
  };
  
  return (
    <Routes>

      <Route
        path="/homepage"
        element={<HomePage/>}
      />

      <Route
        path="/login"
        element={<Login showHomePage={showHomePage} setToken={setToken}/>}
      />
      
    </Routes>
  );
}

export default App;