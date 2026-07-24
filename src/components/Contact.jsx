import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section section-muted">
      <div className="container">
        <div className="section-heading"><span className="section-index">05</span><h2 className="section-title">Let&apos;s talk</h2><span className="heading-line" /></div>
        <div className="card contact-card">
          <p className="contact-lead">Have a project in mind or an opportunity to discuss?</p>
          <p className="muted">Currently working as a Full Stack Developer and open to professional collaborations.</p>
          <div className="contact-links">
            <a href="mailto:chrohitkumarv18@gmail.com" className="btn btn-primary">Email me <span>↗</span></a>
            <a href="tel:+919661868540" className="btn btn-outline">Call</a>
            <a href="https://github.com/rohitverma9773" target="_blank" rel="noreferrer" className="btn btn-outline">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/rohit-kumar-verma-485365252/" target="_blank" rel="noreferrer" className="btn btn-outline">LinkedIn ↗</a>
          </div>
          <p className="muted">Giridih, Jharkhand, India · 815316</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
