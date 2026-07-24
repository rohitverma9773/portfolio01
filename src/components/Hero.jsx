import React from 'react';
import profileImage from '../assets/profile.png';

const Hero = () => {
  return (
    <section id="hero" className="hero section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="status-pill"><span className="status-dot" /> Currently working as a Full Stack Developer</div>
          <p className="eyebrow">Full Stack Developer <span>/</span> problem solver</p>
          <h1 className="hero-title">Web Developer & Problem Solver <em>Solver.</em></h1>
          <p className="hero-subtitle">
            I&apos;m Rohit Kumar Verma, a Full Stack Developer focused on building secure, responsive, and scalable web applications with React, Node.js, Express.js, and MongoDB.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">Explore my work <span>↗</span></a>
            <a href="#contact" className="text-link">Let&apos;s connect <span>→</span></a>
          </div>
          <div className="hero-meta"><span>Giridih, Jharkhand</span><span className="meta-rule" /><span>B.Tech CSE · 2026</span></div>
        </div>
        <div className="hero-visual">
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="hero-portrait-frame">
            <img src={profileImage} alt="Profile portrait of Rohit Kumar Verma" className="hero-portrait" />
            <span className="portrait-label">01 <span>/</span> profile</span>
          </div>
          <div className="hero-note note-top"><strong>2</strong><span>full-stack<br />projects</span></div>
          <div className="hero-note note-bottom"><span className="note-symbol">✦</span><span>web developer<br />profile</span></div>
        </div>
      </div>
      <div className="scroll-cue"><span>Scroll to explore</span><span className="scroll-line" /></div>
    </section>
  );
};

export default Hero;
