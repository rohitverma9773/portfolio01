import React from 'react';

const Experience = () => {
  const jobs = [
    {
      role: 'Evidyaloka Rubaru Program',
      company: 'Alumni of Evidyaloka · Bengaluru, Karnataka',
      period: '10 Mar 2023',
      points: [
        'Participated in the Evidyaloka Rubaru Program 2023.',
        'Shared insights about the impact of Evidyaloka on my academic journey.',
      ],
    },
    {
      role: 'Bharat-Tech-Xperience Hackathon',
      company: 'Participant · SVIET, Banur',
      period: '9 Feb 2025',
      points: [
        'Participated in a national-level hackathon focused on real-world problems.',
        'Collaborated with a team to develop a prototype and present the solution to judges.',
      ],
    },
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-heading"><span className="section-index">02</span><h2 className="section-title">Beyond the classroom</h2><span className="heading-line" /></div>
        <div className="stack">
          {jobs.map((job, index) => (
            <article key={job.company} className="card card-accent">
              <div className="row-between">
                <div><span className="job-number">0{index + 1}</span><h3>{job.role}</h3></div>
                <span className="chip">{job.period}</span>
              </div>
              <p className="muted">{job.company}</p>
              <ul className="list">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
