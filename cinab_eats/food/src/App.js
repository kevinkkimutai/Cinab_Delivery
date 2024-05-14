import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadlineCards from "./components/HeadlineCards";
import Food from "./components/Food";
import Category from "./components/Category";
import { Routes, Route } from "react-router-dom";
import Public from "./components/Layouts/Public";
import LandingPage from "./Pages/LandingPage";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Public />}>
          <Route index element={<LandingPage/>}/>
          <Route path="cart" element={<Cart/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
