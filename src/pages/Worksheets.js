import React from "react";

export default function Worksheets() {
  // Grade 9 worksheets
  const grade9 = [
    { name: "All Sorts of Information", link: "/worksheets/grade9/all-sorts-of-information.pdf" },
    { name: "Parallel and Perpendicular Lines", link: "/worksheets/grade9/parallel-and-perpendicular-lines.pdf" },
    { name: "Trigonometry Combined Worksheet", link: "/worksheets/grade9/trigonometry-combined-worksheet.pdf" }
  ];

  // Grade 8 worksheets
  const grade8Worksheets = [
    { name: "Equations – Worksheet 1", link: "/worksheets/grade8/equations/worksheet1.pdf" },
    { name: "Equations – Worksheet 2", link: "/worksheets/grade8/equations/worksheet2.pdf" },
    { name: "Equations – Worksheet 3", link: "/worksheets/grade8/equations/worksheet3.pdf" },
    { name: "Equations – Worksheet 4", link: "/worksheets/grade8/equations/worksheet4.pdf" },
    { name: "Equations – Worksheet 5", link: "/worksheets/grade8/equations/worksheet5.pdf" }
  ];

  // Grade 8 answer sheets
  const grade8Answers = [
    { name: "Answer Sheet – Worksheet 1", link: "/worksheets/grade8/equations/answers1.pdf" },
    { name: "Answer Sheet – Worksheet 2", link: "/worksheets/grade8/equations/answers2.pdf" },
    { name: "Answer Sheet – Worksheet 3", link: "/worksheets/grade8/equations/answers3.pdf" },
    { name: "Answer Sheet – Worksheet 4", link: "/worksheets/grade8/equations/answers4.pdf" },
    { name: "Answer Sheet – Worksheet 5", link: "/worksheets/grade8/equations/answers5.pdf" }
  ];

  // Reusable card renderer
  const renderCards = (items, color = "primary") => (
    <div className="row mb-5">
      {items.map((w, i) => (
        <div key={i} className="col-md-4 mb-4">
          <div className={`card shadow-sm h-100 border-${color}`}>
            <div className="card-body text-center">
              <h5 className="card-title">{w.name}</h5>
              <div className="d-flex justify-content-center gap-2 mt-3">
                <a href={w.link} target="_blank" rel="noreferrer" className={`btn btn-outline-${color}`}>
                  🔍 View Online
                </a>
                <a href={w.link} download className={`btn btn-${color}`}>
                  ⬇ Download
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="container mt-5">
      {/* Grade 9 Section */}
      <h2 className="mb-3">📘 Maths – Class 9 Worksheets</h2>
      <p className="lead mb-4">
        Download and practice Class 9 Mathematics worksheets to strengthen your concepts.
      </p>
      {renderCards(grade9, "primary")}

      {/* Grade 8 Section */}
      <h2 className="mb-3">📘 Maths – Class 8 Worksheets (Equations)</h2>
      <p className="lead mb-4">
        Practice solving equations with these Class 8 worksheets. Answer sheets are provided for self-checking.
      </p>

      {/* Worksheets */}
      <h4 className="mb-3 text-primary">Worksheets</h4>
      {renderCards(grade8Worksheets, "primary")}

      {/* Answer Sheets */}
      <h4 className="mb-3 text-success">Answer Sheets</h4>
      {renderCards(grade8Answers, "success")}
    </div>
  );
}
