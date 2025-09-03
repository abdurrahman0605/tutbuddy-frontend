import React from "react";

export default function About() {
  const handleDemoBooking = () => {
    
    window.open(
      "https://wa.me/919867081474?text=Hello%20Ma'am,%20I%20would%20like%20to%20book%20a%20free%20demo%20class.",
      "_blank"
    );
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-primary text-white text-center py-5">
        <h1 className="display-4 fw-bold">About TutBuddy</h1>
        <p className="lead">
          Learn Maths & Science with <strong>Naheed Fatima</strong> – Personalized 1-to-1 tutoring for GCSE, IGCSE & A Levels.
        </p>
      </div>

      {/* Tutor Profile Section */}
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-md-12">
            <h2>Meet Your Tutor – Naheed Fatima</h2>
            <p className="mt-3">
              👩‍🏫 With <strong>7–8 years of teaching experience</strong>, Naheed Fatima has been 
              guiding students in <strong>Mathematics and Science</strong> to achieve their 
              academic goals. She has worked with students across different boards, 
              including <strong>GCSE, IGCSE, and A Levels</strong>, helping them gain confidence 
              and secure top grades.
            </p>
            <p>
              Her approach is <strong>personalized and student-centered</strong>. Every learner is unique, 
              so Naheed adapts her teaching style to fit the child’s pace and needs. 
              Whether it’s simplifying tough concepts, providing exam strategies, or 
              giving extra practice, she ensures students feel confident before exams. 
            </p>
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="container mt-5">
        <h3 className="text-center mb-4">Why Choose TutBuddy?</h3>
        <div className="row text-center">
          <div className="col-md-4">
            <div className="card p-4 shadow-sm">
              <h4>📘 Subjects</h4>
              <p>Mathematics & Science for GCSE, IGCSE, and A Level students.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-4 shadow-sm">
              <h4>👩‍🏫 One-to-One</h4>
              <p>Personalized one-to-one classes tailored to each student’s learning needs.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-4 shadow-sm">
              <h4>🎁 Free Demo</h4>
              <p>Get a <strong>free demo class</strong> to experience the teaching before you enroll.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-light py-5 mt-5 text-center">
        <h3>Ready to Begin Your Journey?</h3>
        <p className="lead">
          Book a free demo class today and take the first step toward academic success!
        </p>
        <button
          className="btn btn-success btn-lg mt-3"
          onClick={handleDemoBooking}
        >
          📲 Book a Free Demo 
        
        </button>
      </div>
    </div>
  );
}
