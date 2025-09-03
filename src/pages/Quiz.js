import React from "react";

export default function Quiz() {
  return (
    <div className="container mt-5 text-center">
      <h2 className="mb-4">📝 Grade 7 Quiz</h2>
      <p className="lead mb-4">
        Test your knowledge with our Grade 7 Maths  quiz. 
        Click the button below to get started!
      </p>

      {/* Button that opens Google Form */}
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSepr3aZOBaVndEOHZfJ5jukZiAs_WIke4NQuUf-a9UayfUrYg/viewform"
        target="_blank"
        rel="noreferrer"
        className="btn btn-primary btn-lg"
      >
        🚀 Take the Quiz
      </a>
    </div>
  );
}
