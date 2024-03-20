import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Booking from './pages/BookingForm';
import NavBar from "./Components/NavBar/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./Components/Header/Header";

function App() {
  return (
    <Router>
      <div >
        <Header />
        <NavBar className="navBar"/>
        <Routes>
          <Route path="/booking" element={<Booking />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

