import React from 'react';
import './About.css'

const AboutMe = () => {
  const bio = <p>
    Hi, I'm Sathya Seelan, a software developer proficient in Python, React, Node.js, Java, and HTML. With a passion for technology,
  I leverage these tools to solve complex problems and make people's lives easier.
  I specialize in building modern web applications using React and Node.js for scalable and user-friendly interfaces and backends. 
 My experience in Java also allows me to build robust large-scale enterprise  applications. 
 I have a solid understanding of SQL and NoSQL databases and am always staying up-to-date with the latest industry trends and technologies. 
  I'm a team player and committed to delivering high-quality work that meets the needs of end-users.
 
 
 
  </p>

  return (
    <section id="about">
      <div className='about'>
      <h2>About Me</h2>
      <p>{bio}</p>
      </div>
    </section>
  );
};




  
export default AboutMe;
