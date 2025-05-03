import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import Home from "./components/pages/Home";
import Sciencesnews from "./components/pages/sciencesnews";
import Sportnews from "./components/pages/sportnews";
import NotMatch from "./components/error404/NotMatch";
import Weather from "./components/pages/Weather";

// A library is a collection of functions, classes, or properties stored in files. 
// It helps speed up development and makes the process more efficient.
 // Route take something called path we element
 
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Base URL → localhost:5001/ */}
        <Route path="/" element={<Home />} />
        {/* About Page → localhost:5001/about */}
        <Route path="/Sciencesnews" element={<Sciencesnews/>} />
        {/* Contact Page → localhost:5001/contact */}
        <Route path="/Sportnews" element={<Sportnews />} />
        <Route path="/Weather" element={<Weather />} />
        {/**Not Match  */}
        <Route path="*" element={<NotMatch/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

