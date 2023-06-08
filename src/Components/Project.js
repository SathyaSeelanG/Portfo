import React from 'react';

const Project = ({ title, description, tech, link,software, image }) => {
  return (
    <div className="project">
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <p>{description}</p>
      <p>Technologies used: {tech}</p>
      <p>Software used: {software}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
};

export default Project;

