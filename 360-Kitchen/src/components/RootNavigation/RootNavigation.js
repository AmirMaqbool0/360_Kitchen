import React from "react";
import HomePage from "./HomePage";
import { Route, Routes } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import Header from "../pages/Header/Header";
import Footer from "../pages/Footer";
import BlogPage from "../pages/BlogPage/BlogPage";
import Cart from "../pages/CartPage/Cart";

function RootNavigation() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blogs/:id" element={<BlogPage />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default RootNavigation;
