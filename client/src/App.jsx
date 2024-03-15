// App.js
import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TopBar from "./common/TopBar";
import Footer from "./common/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Cart from "./pages/CartPage/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
