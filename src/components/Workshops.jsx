import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./Workshops.css";

function Workshops() {
  const [showAll, setShowAll] = useState(false);

  const workshops = [
    {
      year: "Feb 2024",
      title: "Advanced Technology Program",
      venue: "Wipro, Online",
      duration: "1 week",
    },
    {
      year: "Jul 2021",
      title: "Data Science and Machine Learning",
      venue: "KHIT, Guntur",
      duration: "2 weeks",
    },
    {
      year: "Mar 2021",
      title: "Android Development",
      venue: "ICT, Online",
      duration: "1 week",
    },
    {
      year: "May 2020",
      title: "IoT",
      venue: "St. Martin's Engg College, Hyderabad",
      duration: "3 days",
    },
    {
      year: "Jul 2019",
      title: "Big Data Analytics and Python Programming",
      venue: "CMRIT, Bangalore",
      duration: "2 weeks (AICTE)",
    },
    {
      year: "Jun 2019",
      title: "R Programming",
      venue: "NEC, Narsaraopeta, A.P.",
      duration: "1 week (AICTE)",
    },
    {
      year: "May 2019",
      title: "Digital Skills Readiness Program",
      venue: "Wipro, Bangalore",
      duration: "8 days",
    },
    {
      year: "Dec 2018",
      title: "NPTEL Workshop",
      venue: "RVR & JC CE, IIT Madras",
      duration: "1 day",
    },
    {
      year: "Aug 2018",
      title: "Advanced Android Development & Design Thinking",
      venue: "Google, Hyderabad",
      duration: "1 week",
    },
    {
      year: "Jun 2018",
      title: "Artificial Intelligence and Deep Computing",
      venue: "Bennett University, Times of India Group",
      duration: "3 days",
    },
    {
      year: "Jun 2018",
      title:
        "Image Classification, Object Detection & Neural Network Deployment",
      venue: "NVIDIA & Bennett University",
      duration: "3 days",
    },
    { year: "May 2018", title: "UNITY 3D", venue: "VVIT", duration: "4 days" },
    {
      year: "Aug 2017",
      title: "Java Fundamentals and Programming",
      venue: "VVIT & Oracle Academy",
      duration: "1 week",
    },
    {
      year: "Jun 2017",
      title: "Data Analytics in Supply Chain Management",
      venue: "VVIT & Sphere Soft Solutions",
      duration: "1 day",
    },
    {
      year: "Jan 2017",
      title: "Data Science and Research",
      venue: "UCET, ANU",
      duration: "3 days",
    },
    {
      year: "Jan 2017",
      title: "Data Analytics with R",
      venue: "VVIT & NITW, E&ICT",
      duration: "1 week FDP",
    },
    {
      year: "Nov 2016",
      title: "Android Developer Fundamentals",
      venue: "APSSDC & Google",
      duration: "1 week",
    },
    {
      year: "Oct 2016",
      title: "Big Data Challenges and Opportunities",
      venue: "VVIT & DST",
      duration: "2 days",
    },
    {
      year: "Sep 2016",
      title: "Android Developer Fundamentals",
      venue: "APSSDC & Google",
      duration: "1 week",
    },
    {
      year: "Nov 2015",
      title: "Geo Spatial Technologies",
      venue: "UCET, ANU",
      duration: "3 weeks",
    },
    {
      year: "Dec 2014",
      title: "Big Data Analytics",
      venue: "UCET, ANU",
      duration: "2 days",
    },
    {
      year: "Jul 2014",
      title: "Cyber Security",
      venue: "IIT Bombay & ISTE",
      duration: "2 weeks",
    },
    {
      year: "May 2013",
      title: "Database Management Systems",
      venue: "IIT Bombay & ISTE",
      duration: "2 weeks",
    },
    {
      year: "Apr 2013",
      title: "Vedic Mathematics",
      venue: "Sri Sringeri Sarada Peetham & VVIT",
      duration: "1 day",
    },
    {
      year: "Jul 2012",
      title: "Introduction to Research Methodologies",
      venue: "IIT Bombay & ISTE",
      duration: "2 weeks",
    },
    {
      year: "Dec 2011",
      title: "Image Processing and its Applications",
      venue: "UCET, ANU & UGC",
      duration: "2 day seminar",
    },
    {
      year: "Feb 2009",
      title: "Data Warehousing and Data Mining",
      venue: "CMR College of Engg & Tech, Hyderabad",
      duration: "2 day FDP",
    },
    {
      year: "Dec 2005",
      title: "Artificial Neural Networks",
      venue: "Vignan's Engineering College",
      duration: "1 week",
    },
    {
      year: "Oct 2004",
      title: "Essentials of Rational Unified Process & Rational Rose",
      venue: "Vignan's Engg College & Rational University",
      duration: "2 days",
    },
    {
      year: "Jul 2004",
      title: "Digital Image Processing Applications",
      venue: "Vignan's Engineering College",
      duration: "1 week",
    },
  ];

  const displayedWorkshops = showAll ? workshops : workshops.slice(0, 10);

  return (
    <section className="section" id="workshops">
      <h2 className="section-title">Workshops &amp; FDPs</h2>
      <p className="section-subtitle">
        Continuous professional development through workshops, FDPs, and
        training programs
      </p>

      <div className="workshops-grid">
        {displayedWorkshops.map((w, i) => (
          <div className="workshop-card" key={i}>
            <span className="workshop-year">{w.year}</span>
            <h4>{w.title}</h4>
            <p className="workshop-venue">{w.venue}</p>
            <span className="workshop-duration">{w.duration}</span>
          </div>
        ))}
      </div>

      {workshops.length > 10 && (
        <button className="show-more-btn" onClick={() => setShowAll(!showAll)}>
          {showAll ? (
            <>
              <FaChevronUp /> Show Less
            </>
          ) : (
            <>
              <FaChevronDown /> Show All {workshops.length} Workshops
            </>
          )}
        </button>
      )}
    </section>
  );
}

export default Workshops;
