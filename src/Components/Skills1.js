import React from 'react';
import './Skills1.css'

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skill">
          {/* <h3 className="skill-title">Programming</h3> */}
          <div className="skill-box">
            <h1 className="skill-name">Java     c++ </h1>
          </div>
          <div className="skill-box">
            <h1 className="skill-name">Python</h1>
          </div>
          <div className="skill-box">
            <h1 className="skill-name">Java</h1>
          </div>
          <div className="skill-box">
            <h1 className="skill-name">Python</h1>
          </div>
{/* 
          <h3 className="skill-title">Other</h3> */}
          <div className="skill-box">
            <h1 className="skill-name">Java</h1>
          </div>
          <div className="skill-box">
            <h1 className="skill-name">Python</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
