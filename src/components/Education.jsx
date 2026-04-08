import { FaGraduationCap } from "react-icons/fa";
import "./Education.css";

function Education() {
  const education = [
    {
      course: "Ph.D (Image Processing)",
      university: "Acharya Nagarjuna University, Guntur, A.P",
      year: "June 2016",
      marks: "—",
    },
    {
      course: "M.Tech (IT)",
      university: "Sathyabama University, Chennai, T.N",
      year: "June 2007",
      marks: "73.8%",
    },
    {
      course: "B.Tech (CSE)",
      university: "Sri Venkateswara University, A.P",
      year: "June 2000",
      marks: "67.2%",
    },
    {
      course: "IPE",
      university: "Intermediate Board, A.P",
      year: "April 1995",
      marks: "73.7%",
    },
    {
      course: "S.S.C",
      university: "S.S.C Board, A.P",
      year: "March 1993",
      marks: "74.5%",
    },
  ];

  return (
    <section className="section education-section" id="education">
      <h2 className="section-title">Academic Summary</h2>
      <p className="section-subtitle">
        A lifelong journey of learning and academic excellence
      </p>
      <div className="education-timeline">
        {education.map((edu, i) => (
          <div className="edu-card" key={i}>
            <div className="edu-icon">
              <FaGraduationCap />
            </div>
            <div className="edu-content">
              <h3>{edu.course}</h3>
              <p className="edu-university">{edu.university}</p>
              <div className="edu-meta">
                <span className="edu-year">{edu.year}</span>
                <span className="edu-marks">{edu.marks}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
