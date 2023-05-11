import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import App from "../App";
import Shop from "./Shop";
import About from "./About";

const RouteSwitch = () => {
  return (
      <BrowserRouter>
        <Nav />
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
        </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
