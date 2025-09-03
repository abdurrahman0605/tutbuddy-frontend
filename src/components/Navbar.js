import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top shadow-sm">
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand fw-bold" to="/">
          TutBuddy
        </Link>

        {/* Hamburger button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/quiz">
                Quiz
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/worksheets">
                Worksheets
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
