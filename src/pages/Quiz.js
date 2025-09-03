import React from "react";

export default function Quiz() {
  const quizzes = [
    { grade: "Grade 5", topic: "Symmetry", link: "https://forms.gle/519nHPNH4Jk4uUNq6" },
    { grade: "Grade 6", topic: "BIDMAS", link: "https://forms.gle/tJ5R7vbQURhC51e89" },
    { grade: "Grade 6", topic: "Integers", link: "https://forms.gle/Zuam6XHYD2Mj4UEs5" },
    { grade: "Grade 7", topic: "Mensuration", link: "https://forms.gle/erfHx98z8WMkpYT4A" },
    { grade: "Grade 8", topic: "Rational Numbers", link: "https://forms.gle/uaFKNWXgbBcmJefQ7" }
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">📝 Interactive Maths Quizzes</h2>
      <p className="lead text-center mb-5">
        Sharpen your skills with these fun and challenging quizzes. <br />
        Choose your grade and start practicing!
      </p>

      <div className="row">
        {quizzes.map((quiz, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body text-center">
                <h5 className="card-title">
                  <span className="badge bg-primary">{quiz.grade}</span>
                </h5>
                <p className="card-text fs-5">{quiz.topic}</p>
                <a
                  href={quiz.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-success btn-lg"
                >
                  🚀 Take Quiz
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Motivation Section */}
      <div className="bg-light text-center py-5 mt-5 rounded shadow-sm">
        <h3>📚 Practice Makes Perfect!</h3>
        <p className="lead">
          The more you practice, the more confident you become. 
          Keep solving and challenge yourself to score better each time!
        </p>
      </div>
    </div>
  );
}
