import React from "react";
import pic1 from "../naheed.jpg";   
import pic2 from "../pic2.jpg";    
import pic3 from "../pic3.jpg";   

export default function Home() {
  const handleDemoBooking = () => {
    window.open(
      "https://wa.me/919867081474?text=Hello%20Ma'am,%20I%20would%20like%20to%20book%20a%20demo%20class%20for%20my%20child.",
      "_blank"
    );
  };

  return (
    <div>
      {/* Hero Carousel */}
      <div className="container mt-4">
        <div
          id="homeCarousel"
          className="carousel slide shadow rounded"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={pic1}
                alt="Naheed Fatima - TutBuddy"
                className="d-block w-100 rounded"
                style={{ maxHeight: "500px", objectFit: "cover" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={pic2}
                alt="Tutoring session"
                className="d-block w-100 rounded"
                style={{ maxHeight: "500px", objectFit: "cover" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={pic3}
                alt="Learning environment"
                className="d-block w-100 rounded"
                style={{ maxHeight: "500px", objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Prev / Next buttons */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Intro Section */}
      <div className="container text-center mt-4">
        <h2>Are you looking for Maths or Science class for your kid?</h2>
        <p className="lead mt-3">
          Learn GCSE/IGCSE Maths & Science with <strong>Naheed Fatima</strong> – an
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
        <p className="mb-0 fw-bold fs-3">
          Experienced GCSE/IGCSE A Level, Maths and Science Tutor
        </p>
      </div>
    </div>
  );
}
