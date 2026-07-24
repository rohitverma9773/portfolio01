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
    },
    {
      title: 'Tools & other',
      skills: ['VS Code', 'Android Studio', 'Git', 'GitHub', 'REST APIs', 'Problem Solving'],
    },
  ];

  return (
    <section id="skills" className="section section-muted">
      <div className="container">
        <div className="section-heading"><span className="section-index">03</span><h2 className="section-title">Technical Skills</h2><span className="heading-line" /></div>
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.title} className="card">
              <h3>{category.title}</h3>
              <div className="tags">
                {category.skills.map((skill) => (
                  <span key={skill} className="tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
