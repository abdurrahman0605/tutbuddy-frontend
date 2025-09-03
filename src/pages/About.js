import React from "react";

export default function About() {
  const handleDemoBooking = () => {
    window.open(
      "https://wa.me/919867081474?text=Hello%20Ma'am,%20I%20would%20like%20to%20book%20a%20demo%20class%20for%20my%20child.",
      "_blank"
    );
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">👩‍🏫 Meet Your Tutor – Naheed</h2>

      {/* Tutor Bio */}
      <div className="card shadow p-4">
        <p className="lead">
          With a <strong>Master’s degree in Civil Engineering from VJTI</strong>,
          one of India’s premier engineering institutes, Naheed combines
          academic excellence with over <strong>10 years of teaching experience</strong> 
          in Mathematics.
        </p>

        <p>
          She has successfully guided students in <strong>GCSE, IGCSE, IB, and A Levels</strong> 
          across the UK, US, Middle East, and Australia, helping them gain confidence, 
          strengthen problem-solving skills, and achieve top grades.
        </p>

        <p>
          Naheed’s approach is <strong>personalized and student-centered</strong>. 
          She adapts her lessons to suit each learner’s pace and style — simplifying 
          difficult concepts, offering targeted exam strategies, and providing 
          structured practice — so that every student feels well-prepared and confident.
        </p>

        <p>
          Her passion lies in making Maths <strong>simple, logical, and enjoyable</strong>, 
          ensuring students not only succeed in exams but also develop a strong, 
          lasting foundation in the subject.
        </p>
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
              <p>
                Get a <strong>free demo class</strong> to experience the teaching before you enroll.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-light py-5 mt-5 text-center">
        <h3>Ready to Begin Your Journey?</h3>
        <p className="lead">
          Join <strong>TutBuddy</strong> today and take the first step towards exam success.
        </p>
        <button
          className="btn btn-primary btn-lg mt-3"
          onClick={handleDemoBooking}
        >
          📩 Book Your Free Demo Class
        </button>
      </div>
    </div>
  );
}
