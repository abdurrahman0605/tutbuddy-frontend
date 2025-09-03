import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Quiz from "./pages/Quiz";
import Worksheets from "./pages/Worksheets"; // ✅ Make sure Worksheets.js exists in src/pages

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/worksheets" element={<Worksheets />} />
      </Routes>
    </BrowserRouter>
  );
}
