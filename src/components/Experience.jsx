import { FaBriefcase, FaChalkboardTeacher } from "react-icons/fa";
import "./Experience.css";

function Experience() {
  const teachingExp = [
    {
      role: "Professor",
      org: "Vasireddy Venkatadri Institute of Technology",
      location: "Nambur(V), Peda Kakani(M), Guntur Dt. A.P.",
      period: "Nov 2008 – Feb 2022",
    },
    {
      role: "Associate Professor",
      org: "Aurora's Scientific and Technological Institute",
      location: "Gagillapur(V), R.R.Dist., A.P.",
      period: "Jul 2007 – Nov 2008",
    },
    {
      role: "Assistant Professor",
      org: "Vignan's Engineering College",
      location: "Vadlamudi(V), Guntur(Dt), A.P.",
      period: "Jul 2000 – Jul 2007",
    },
  ];

  const industryExp = [
    {
      role: "Senior Software Engineer",
      org: "Paymerang India Pvt. Ltd",
      period: "Jan 2024 – Jul 2024",
    },
    {
      role: "Technical Analyst (React JS Developer)",
      org: "Coforge Pvt. Ltd",
      period: "Jan 2022 – Dec 2023",
    },
  ];

  return (
    <section className="section" id="experience">
      <h2 className="section-title">Experience</h2>
      <p className="section-subtitle">
        20+ years in teaching and 2+ years in industry
      </p>

      <div className="exp-columns">
        <div>
          <h3 className="exp-category">
            <FaChalkboardTeacher className="card-icon" /> Teaching Experience
          </h3>
          <div className="exp-list">
            {teachingExp.map((exp, i) => (
              <div className="exp-card" key={i}>
                <div className="exp-dot" />
                <div className="exp-info">
                  <h4>{exp.role}</h4>
                  <p className="exp-org">{exp.org}</p>
                  {exp.location && (
                    <p className="exp-location">{exp.location}</p>
                  )}
                  <span className="exp-period">{exp.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="exp-category">
            <FaBriefcase className="card-icon" /> Industry Experience
          </h3>
          <div className="exp-list">
            {industryExp.map((exp, i) => (
              <div className="exp-card" key={i}>
                <div className="exp-dot industry" />
                <div className="exp-info">
                  <h4>{exp.role}</h4>
                  <p className="exp-org">{exp.org}</p>
                  <span className="exp-period">{exp.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
