import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Quiz from "./pages/Quiz";
import Worksheets from "./pages/Worksheets";

export default function App() {
  return (
    <Router>
      <Navbar />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/worksheets" element={<Worksheets />} />
        </Routes>
      </main>
      <Footer /> {/* ✅ this always renders */}
    </Router>
  );
}
