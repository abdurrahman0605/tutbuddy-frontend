import React from "react";

export default function Worksheets() {
  const worksheets = [
    { name: "All Sorts of Information", link: "/all-sorts-of-information.pdf" },
    { name: "Parallel and Perpendicular Lines", link: "/parallel-and-perpendicular-lines.pdf" },
    { name: "Trigonometry Combined Worksheet", link: "/trigonometry-combined-worksheet.pdf" }
  ];

  return (
    <div className="container mt-5">
      <h2 className="mb-3">📘 Maths – Class 9 Worksheets</h2>
      <p className="lead mb-4">
        Download and practice Class 9 Mathematics worksheets to strengthen your concepts.
      </p>

      <div className="row">
        {worksheets.map((w, i) => (
          <div key={i} className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center">
                <h5 className="card-title">{w.name}</h5>
                <div className="d-flex justify-content-center gap-2 mt-3">
                  {/* View Online */}
                  <a
                    href={w.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-primary"
                  >
                    🔍 View Online
                  </a>

                  {/* Download */}
                  <a
                    href={w.link}
                    download
                    className="btn btn-success"
                  >
                    ⬇ Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
