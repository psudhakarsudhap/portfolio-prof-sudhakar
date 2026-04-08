import { FaCertificate, FaUsers } from "react-icons/fa";
import "./About.css";

function About() {
  const certifications = [
    "Certified with Udacity React Nanodegree",
    "Certified with Udacity Android Developer Nanodegree",
    "Certified with Wipro Certified Faculty (WCF)",
    "Life member of Indian Society for Technical Education (L.M.I.S.T.E.) (ID #112884)",
    "Professional Member of Association for Computing Machinery (ACM) (ID #7006558)",
  ];

  return (
    <section className="section" id="about">
      <h2 className="section-title">About Me</h2>
      <p className="section-subtitle">
        To seek challenging and responsible assignments in a reputed
        organization where I can apply my current skills, learn new techniques
        and application of technology and also grow with the Organization.
      </p>
      <div className="about-grid">
        <div className="about-card certifications-card">
          <h3>
            <FaCertificate className="card-icon" /> Certifications &amp;
            Memberships
          </h3>
          <ul>
            {certifications.map((cert, i) => (
              <li key={i}>{cert}</li>
            ))}
          </ul>
        </div>
        <div className="about-card subjects-card">
          <h3>
            <FaUsers className="card-icon" /> Subjects Handled
          </h3>
          <div className="tags">
            {[
              "OS",
              "DAA",
              "STLD",
              "CO",
              "C & DS",
              "OOPS Through C++",
              "JAVA Programming",
              "Web Technologies",
              "FLAT",
              "Hadoop & Big Data",
            ].map((s, i) => (
              <span className="tag" key={i}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
