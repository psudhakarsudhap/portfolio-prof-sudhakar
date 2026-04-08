import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-subtitle">
        Feel free to reach out for collaborations, research opportunities, or
        academic inquiries
      </p>

      <div className="contact-cards">
        <div className="contact-card">
          <div className="contact-icon">
            <FaPhone />
          </div>
          <h4>Phone</h4>
          <a href="tel:9949929525">9949929525</a>
        </div>
        <div className="contact-card">
          <div className="contact-icon">
            <FaEnvelope />
          </div>
          <h4>Email</h4>
          <a href="mailto:sudhakarp0101@gmail.com">sudhakarp0101@gmail.com</a>
        </div>
        <div className="contact-card">
          <div className="contact-icon">
            <FaMapMarkerAlt />
          </div>
          <h4>Address</h4>
          <p>
            Flat #402, Rainbow Elite,
            <br />
            Beside G Square Hotel, Mahanadu Road,
            <br />
            Sri Ramachandra Nagar, Vijayawada-520008
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
