import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./Components/NavBar/NavBar";
import Home from "./pages/Home";
import Header from "./Components/Header/Header";
import BookingForm from "./pages/BookingPage/BookingForm";
import InsertProduct from "./pages/InsertProduct";
import UpdateProduct from "./pages/UpdateProduct";
import Cart from "./pages/OnlineShopPages/Cart/cart";
import Product from "./pages/OnlineShopPages/Product/Product";
import OnlineShop from "./pages/OnlineShopPages/OnlineShop/OnlineShop";
import EmergencyIssue from "./pages/Emergency/EmergencyIssue";
import ProductSearch from "./Components/OnlineShop/ProductSearch/ProductSearch";
import FilteredProductsPage from "./pages/OnlineShopPages/filtered/FilteredProductsPage";
import ProductCategory from "./pages/OnlineShopPages/ProductCategory/ProductCategory";
import Service from "./pages/Service";
import Sort from "./Components/Sort/Sort";
import LoginSignup from "./pages/login/loginSignup";
import SortedProduct from "./pages/OnlineShopPages/SortedProduct/SortedProduct";
import Footer from "./Components/Footer/Footer";
import Checkout from "./Components/OnlineShop/Checkout/Checkout";
import "./App.css";



function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <NavBar className="navBar" />
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<BookingForm />} />
          <Route path="/onlineShop" element={<OnlineShop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/emergency" element={<EmergencyIssue />} />
          <Route path="/service" element={<Service />} />
          <Route path="/loginSignup" element={<LoginSignup />} />
          <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/interiour" element={<ProductCategory category="Interiour" />} />
          <Route path="/exteriour" element={<ProductCategory category="Exteriour" />} />
          <Route path="/carcare" element={<ProductCategory category="Car_care" />} />
          <Route path="/search-results" element={<FilteredProductsPage />} />
          <Route path="/filtered-products" element={<SortedProduct />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/insertproduct" element={<InsertProduct />} />
          <Route path="/updateproduct/:id" element={<UpdateProduct />} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
