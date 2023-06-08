import React from 'react';


const Skills = () => {
  const Skills = [
    {type:"Programming Languages ", name: "Python", level: 9 },
    {type:"Programming Languages ",  name: "C , C++", level: 8 },
    {type:"Programming Languages ",  name: "Java", level: 7 },
    { type:"Web Development ", name: "JavaScript", level: 8 },
    { type:"Web Development ",name: "React", level: 7 },
    {type:"Web Development ", name: "HTML/CSS", level: 7 },
    {type:"Other ", name: "MySQL", level: 7 },
    {type:"Other ", name: "Android Studio", level: 7 },
  ];
 

  return (
    <section id="skills">
      <h2>Skills</h2>
      {/* <h4  className="skillname">{skill.type} </h4> */}
      <div className="skills-container">
        {Skills.map((skill, index) => (
         
          <div className="skill" key={index}> 
           
            <h3 className="skill-name">{skill.name}</h3>
            <div className="skill-level">
              <div className="skill-level-bar" style={{ width: `${skill.level * 10}%` }} />
            </div>
            <span className="skill-level-value">{skill.level}/10</span>
          </div>
          
        ))}
      </div>
    </section>
  );
};

export default Skills;
