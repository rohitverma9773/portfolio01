import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['C', 'C++', 'Java', 'JavaScript'],
    },
    {
      title: 'Core concepts',
      skills: ['OOP', 'DSA', 'Operating System', 'DBMS'],
    },
    {
      title: 'Technologies',
      skills: ['ReactJS', 'NodeJS', 'Express JS', 'MongoDB'],
      featured: true,
    },
    {
      title: 'Tools & other',
      skills: ['VS Code', 'Android Studio', 'Git', 'GitHub', 'REST APIs', 'Problem Solving'],
    },
  ];

  const primaryStack = skillCategories.find((category) => category.featured);
  const supportingSkills = skillCategories.filter((category) => !category.featured);

  return (
    <section id="skills" className="section section-muted">
      <div className="container">
        <div className="section-heading"><span className="section-index">03</span><h2 className="section-title">Technical Skills</h2><span className="heading-line" /></div>
        <div className="skills-intro">
          <p className="skills-lead">A practical toolkit for building secure, scalable, and polished web products.</p>
          <div className="skills-summary"><strong>04</strong><span>skill<br />groups</span><i /></div>
        </div>
        <div className="skills-showcase">
          <article className="primary-stack-panel">
            <div className="primary-stack-header">
              <div><span className="skill-label">Primary stack</span><h3>{primaryStack.title}</h3></div>
              <span className="stack-arrow">↗</span>
            </div>
            <p>Core technologies I use to turn product ideas into reliable full-stack applications.</p>
            <div className="primary-stack-tags">
              {primaryStack.skills.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </article>
          <div className="skills-list">
            {supportingSkills.map((category, index) => (
              <article key={category.title} className="skill-row">
                <span className="skill-row-number">0{index + 1}</span>
                <h3>{category.title}</h3>
                <div className="skill-row-tags">
                  {category.skills.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
