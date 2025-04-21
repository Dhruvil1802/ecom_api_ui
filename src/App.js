import "./App.css";

import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import HomePage from "./screens/HomePage";

function App() { 
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <Routes>

      <Route
        path="/homepage"
        element={<HomePage/>}
      />
      
    </Routes>
  );
}

export default App;