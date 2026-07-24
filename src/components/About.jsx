import React from "react";

const About = () => {
  return (
    <section id="about" className="section section-muted">
      <div className="container">
        <div className="section-heading">
          <span className="section-index">01</span>
          <h2 className="section-title">Professional Summary</h2>
          <span className="heading-line" />
        </div>
        <div className="summary-layout">
          <div className="summary-lead">
            <p className="lead-text">
              A curious developer who cares about the details that make a
              product feel effortless.
            </p>
          </div>
          <div className="card summary-card">
            <p>
              Full Stack Developer with a Bachelor's degree in Computer Science
              and Engineering and professional experience developing responsive,
              scalable web applications using React.js, Node.js, Express.js, and
              MongoDB.
            </p>
            <p>
              Currently working as a Full Stack Developer, with hands-on
              experience in designing and developing secure, user-friendly
              applications. Strong foundation in Data Structures and Algorithms
              (DSA), Object-Oriented Programming (OOP), Operating Systems, and
              Database Management Systems (DBMS), with expertise in RESTful API
              development, secure authentication, role-based access control, and
              modern, responsive UI development.
            </p>
          </div>
        </div>

        <div className="about-grid">
          <div className="card">
            <h3>Education</h3>
            <p>
              <strong>IK Gujral Punjab Technical University</strong>
            </p>
            <p>B.Tech in Computer Science and Engineering</p>
            <p>Sep 2022 - June 2026 | Punjab, India</p>
          </div>

          <div className="card">
            <h3>Senior Secondary</h3>
            <p>
              <strong>JAC Board</strong>
            </p>
            <p>ISC (PCM) · 81%</p>
            <p>April 2020 - March 2022 | Jharkhand, India</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
