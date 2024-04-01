import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./Components/NavBar/NavBar";
import Home from "./pages/Home";
import Header from "./Components/Header/Header";
import BookingForm from "./pages/BookingForm";
import Cart from "./pages/cart";
import Product from "./pages/Product";
import OnlineShop from "./pages/OnlineShop";
import EmergencyIssue from "./pages/emergencyIssue";

function App() {
  return (
    <Router>
      <div >
        <Header />
        <NavBar className="navBar"/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/booking' element={<BookingForm/>}/>
          <Route path='/onlineShop' element={<OnlineShop/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;

