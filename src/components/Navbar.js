import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">TutBuddy</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/quiz">Quiz</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/worksheets">Worksheets</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
