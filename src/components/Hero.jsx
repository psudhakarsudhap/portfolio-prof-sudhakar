import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { Link } from "react-scroll";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <FaChalkboardTeacher /> Professor &amp; Researcher
        </div>
        <h1>Dr. P Sudhakar</h1>
        <p className="hero-title">B.Tech, M.Tech, Ph.D</p>
        <p className="hero-subtitle">
          Professor, Department of CSE
          <br />
          Vasireddy Venkatadri Institute of Technology, Nambur
        </p>
        <div className="hero-contact-row">
          <span>
            <FaPhone /> 9949929525
          </span>
          <span>
            <FaEnvelope /> sudhakarp0101@gmail.com
          </span>
        </div>
        <div className="hero-buttons">
          <Link
            to="research"
            smooth
            duration={500}
            offset={-70}
            className="btn btn-primary">
            View Research
          </Link>
          <Link
            to="contact"
            smooth
            duration={500}
            offset={-70}
            className="btn btn-outline">
            Contact Me
          </Link>
        </div>
      </div>
      <div className="hero-stats">
        <div className="stat-card">
          <span className="stat-number">20+</span>
          <span className="stat-label">Years Teaching</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">25+</span>
          <span className="stat-label">Publications</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">2+</span>
          <span className="stat-label">Years Industry</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">30+</span>
          <span className="stat-label">Workshops</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
