import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./features/components/navbar/Navbar";
// import Footer from "./features/components/footer/Footer";
import HomePage from "./pages/home/HomePage";
import CategoryPage from "./pages/category/CategoryPage";
import ProductsPage from "./pages/product/ProductsPage";
import AboutUsPage from "./pages/about/AboutUsPage";
import SearchPage from "./pages/search/SearchPage";
import ProfilePage from "./pages/profile/ProfilePage";
import CartPage from "./pages/cart/CartPage";
import RegisterPage from "./pages/register/RegisterPage";
import ProductDetailsPage from "./pages/product-details/ProductDetailsPage";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import MyOrdersPage from "./pages/order/MyOrdersPage";
import WishListPage from "./pages/wishlist/WishListPage";
import CategoryDetailsPage from "./pages/category-details/CategoryDetailsPage";
import OrderSuccessPage from "./pages/order-success/OrderSuccessPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/category" element={<CategoryPage />}></Route>
        <Route path="/products" element={<ProductsPage />}></Route>
        <Route path="/about-us" element={<AboutUsPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/products/:id" element={<ProductDetailsPage />}></Route>
        <Route path="/checkout" element={<CheckoutPage />}></Route>
        <Route path="/orders" element={<MyOrdersPage />}></Route>
        <Route path="/wishlist" element={<WishListPage />}></Route>
        <Route path="/category/:id" element={<CategoryDetailsPage />}></Route>
        <Route path="/order-success/:id" element={<OrderSuccessPage />}></Route>
      </Routes>
      {/* <Footer></Footer> */}
    </BrowserRouter>
  );
}

export default App;
