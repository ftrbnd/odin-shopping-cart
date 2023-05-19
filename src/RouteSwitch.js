import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Shop from "./components/Shop";
import About from "./components/About";
import Product from "./components/Product";
import Cart from "./components/Cart";

export const CartContext = createContext();

const RouteSwitch = () => {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={[cart, setCart]}>
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
    </CartContext.Provider>
  );
};

export default RouteSwitch;
