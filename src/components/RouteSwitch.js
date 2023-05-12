import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Shop from "./Shop";
import About from "./About";
import Product from "./Product";
import Cart from "./Cart";

const RouteSwitch = () => {
  return (
      <BrowserRouter>
        <Nav />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop/:productId" element={<Product />} />
            <Route path="/cart" element={<Cart />} />  
        </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
