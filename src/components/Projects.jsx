import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Personal Portfolio Website',
      role: 'Frontend project · 2024',
      description: 'Designed and developed a responsive portfolio experience to present professional skills, education, projects, and contact information in one place.',
      tags: ['React', 'Vite', 'Responsive UI', 'CSS', 'Component Design'],
      codeLink: 'https://github.com/rohitverma9773',
      liveLink: '#hero',
    },
    {
      title: 'Gate Pass Management System',
      role: 'Web application · Aug 2024',
      description: 'Built a role-based gate pass platform with separate Admin and User experiences, secure authentication, and real-time request tracking.',
      tags: ['React.js', 'Express.js', 'Node.js', 'MongoDB', 'JWT'],
      codeLink: 'https://github.com/rohitverma9773',
      liveLink: '#contact',
    },
    {
      title: 'Event Management System',
      role: 'Web application · Nov 2024',
      description: 'Developed a full-stack event platform with event management, ticket bookings, reviews, email notifications, and optimized data loading.',
      tags: ['React', 'NodeJS', 'Express JS', 'MongoDB', 'React Query', 'JWT'],
      codeLink: 'https://github.com/rohitverma9773',
      liveLink: '#contact',
    },
    
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-heading"><span className="section-index">04</span><h2 className="section-title">Selected projects</h2><span className="heading-line" /></div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article key={project.title} className="card project-card">
              <div className="project-topline"><span>0{index + 1}</span><span>Case study</span></div>
              <p className="eyebrow">{project.role}</p>
              <h3>{project.title}</h3>
              <p className="muted">{project.description}</p>
              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <div className="hero-actions">
                <a href={project.codeLink} target="_blank" rel="noreferrer" className="btn btn-outline">View code <span>↗</span></a>
                <a href={project.liveLink} target="_blank" rel="noreferrer" className="btn btn-primary">Live site <span>↗</span></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
