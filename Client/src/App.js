import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Booking from './Components/BookingForm';
import NavBar from "./Components/NavBar" ;
import Home from "./Components/Home";
import About from "./Components/About";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
