import React from "react";

export default function Worksheets() {
  const grade9 = [
    { name: "All Sorts of Information", link: "/worksheets/grade9/all-sorts-of-information.pdf" },
    { name: "Parallel and Perpendicular Lines", link: "/worksheets/grade9/parallel-and-perpendicular-lines.pdf" },
    { name: "Trigonometry Combined Worksheet", link: "/worksheets/grade9/trigonometry-combined-worksheet.pdf" }
  ];

  const grade8 = [
    { name: "Equations – Worksheet 1", link: "/worksheets/grade8/worksheet1.pdf", answer: "/worksheets/grade8/answers1.pdf" },
    { name: "Equations – Worksheet 2", link: "/worksheets/grade8/worksheet2.pdf", answer: "/worksheets/grade8/answers2.pdf" },
    { name: "Equations – Worksheet 3", link: "/worksheets/grade8/worksheet3.pdf", answer: "/worksheets/grade8/answers3.pdf" },
    { name: "Equations – Worksheet 4", link: "/worksheets/grade8/worksheet4.pdf", answer: "/worksheets/grade8/answers4.pdf" },
    { name: "Equations – Worksheet 5", link: "/worksheets/grade8/worksheet5.pdf", answer: "/worksheets/grade8/answers5.pdf" }
  ];

  return (
    <div className="container mt-5">
      {/* Grade 9 Section */}
      <h2 className="mb-3">📘 Maths – Class 9 Worksheets</h2>
      <p className="lead mb-4">
        Download and practice Class 9 Mathematics worksheets to strengthen your concepts.
      </p>
      <div className="row">
        {grade9.map((w, i) => (
          <div key={i} className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center">
                <h5 className="card-title">{w.name}</h5>
                <div className="d-flex justify-content-center gap-2 mt-3">
                  <a href={w.link} target="_blank" rel="noreferrer" className="btn btn-outline-primary">
                    🔍 View Online
                  </a>
                  <a href={w.link} download className="btn btn-success">
                    ⬇ Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Grade 8 Section */}
      <h2 className="mb-3 mt-5">📘 Maths – Class 8 Worksheets (Equations)</h2>
      <p className="lead mb-4">
        Download and practice Class 8 Mathematics worksheets with answer keys included.
      </p>
      <div className="row">
        {grade8.map((w, i) => (
          <div key={i} className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center">
                <h5 className="card-title">{w.name}</h5>
                <div className="d-flex flex-column gap-2 mt-3">
                  <div className="d-flex justify-content-center gap-2">
                    <a href={w.link} target="_blank" rel="noreferrer" className="btn btn-outline-primary">
                      🔍 View Online
                    </a>
                    <a href={w.link} download className="btn btn-success">
                      ⬇ Download
                    </a>
                  </div>
                  <div className="d-flex justify-content-center gap-2">
                    <a href={w.answer} target="_blank" rel="noreferrer" className="btn btn-outline-secondary">
                      📘 View Answers
                    </a>
                    <a href={w.answer} download className="btn btn-warning">
                      ⬇ Download Answers
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
