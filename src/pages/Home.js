import React from "react";
import tutorPic from "../naheed.jpg";

  // ✅ make sure file name matches exactly

export default function Home() {
   const handleDemoBooking = () => {
    // Replace with Naheed’s real WhatsApp number (with country code, no +, no spaces)
    window.open(
      "https://wa.me/919867081474?text=Hello%20Ma'am,%20I%20would%20like%20to%20book%20a%20demo%20class%20for%20my%20child.",
      "_blank"
    );
  };


  return (
    <div>
      {/* Hero Image */}
      <div className="text-center mt-4"> {/* 👈 added mt-4 to push down */}
        <img
          src={tutorPic}
          alt="Naheed Fatima - TutBuddy"
          className="img-fluid w-100 rounded shadow"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>

      {/* Intro Section */}
      <div className="container text-center mt-4">
        <h2>Are you looking for Maths or Science class for your kid?</h2>
        <p className="lead mt-3">
          Learn GCSE/IGCSE Science with <strong>Naheed Fatima</strong> – an
          experienced and dedicated tutor.
        </p>
        <button
          className="btn btn-primary btn-lg mt-3"
          onClick={handleDemoBooking}
        >
          Book a Demo Class
        </button>
      </div>

      {/* Reviews Section */}
      <div className="container mt-5">
        <h3 className="text-center mb-4">What Parents & Students Say</h3>
        <div className="row">
          <div className="col-md-4">
            <div className="card p-3 shadow-sm">
              <p>
                🌟🌟🌟🌟🌟 <br />
                "Naheed Miss explains everything so clearly. My daughter’s grades
                improved within a month!"
              </p>
              <small>- Parent of GCSE student</small>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3 shadow-sm">
              <p>
                🌟🌟🌟🌟🌟 <br />
                "Best tutor ever! She made Science so easy to understand and fun."
              </p>
              <small>- A level student</small>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3 shadow-sm">
              <p>
                🌟🌟🌟🌟🌟 <br />
                "Very patient and dedicated teacher. Highly recommend for GCSE
                and IGCSE prep."
              </p>
              <small>- Student’s Parent</small>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="bg-light py-4 mt-5 text-center">
        <p className="mb-0 fw-bold fs-3"> {/* 👈 bigger font */}
          Experienced GCSE/IGCSE A Level, Maths and Science Tutor
        </p>
      </div>
    </div>
  );
}