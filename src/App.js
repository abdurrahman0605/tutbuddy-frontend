import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";   // ✅ Navbar
import Home from "./pages/Home";            // ✅ Home page
import About from "./pages/About";          // ✅ About page
import Quiz from "./pages/Quiz";            // ✅ Quiz page
import Worksheets from "./pages/Worksheets";

export default function App() {
  return (
    <Router>
      {/* Navbar always visible */}
      <Navbar />

      {/* Page content */}
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/worksheets" element={<Worksheets />} /> {/* ✅ New Worksheets page */}
        </Routes>
      </div>
    </Router>
  );
}
