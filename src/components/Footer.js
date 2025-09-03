import React from "react";

export default function Footer() {
  return (
    <footer className="bg-light py-4 mt-5 text-center">
      <p className="mb-0 fw-bold fs-4">
        Experienced GCSE/IGCSE A Level, Maths and Science Tutor
      </p>
      <hr className="my-3" />
      <p className="text-muted mb-0">
        © {new Date().getFullYear()} TutBuddy. All rights reserved.
      </p>
    </footer>
  );
}
