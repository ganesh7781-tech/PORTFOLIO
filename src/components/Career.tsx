import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer</h4>
                <h5>BuildLabs</h5>
              </div>
              <h3>Nov 2025 – Present</h3>
            </div>
            <p>
              Developing full-stack web applications using modern JavaScript frameworks,
              building RESTful APIs, and integrating SQL/NoSQL databases.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
