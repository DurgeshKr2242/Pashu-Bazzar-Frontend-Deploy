import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";
import SignupPage from "./pages/signupPage";
import SellPage from "./pages/sellPage";
import BuyPage from "./pages/buyPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/sell" element={<SellPage />} />
          <Route path="/buy" element={<BuyPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
