import React from 'react';
import Project from './Project';
import './Projects1.css'
import  Radar from "../Images/Radar-System.jpg"
import GUI from "../Images/MODERNGUI1.jpg"
import Wall from "../Images/Wall.png"
import Price from "../Images/Price.png"
import Ecom from "../Images/Ecom.png"


// Get all project images
const projectImages = document.querySelectorAll('.project img');

// Add click event listener to each image
projectImages.forEach((image) => {
  let isDescriptionVisible = false;
  let descriptionElement = image.parentElement.querySelector('p');

  image.addEventListener('click', () => {
    isDescriptionVisible = !isDescriptionVisible;
    if (isDescriptionVisible) {
      descriptionElement.style.display = 'block';
    } else {
      descriptionElement.style.display = 'none';
    }
  });
});




const Projects = () => {
  const projects = [

    {
      title: "MODERN GUI ",
      description: <p> Project involves building a modern Graphical User Interface (GUI) using Python and advanced UI libraries. 
        The GUI will include features such as hand brightness and sound control, allowing users to adjust the brightness of 
        their screen and control the volume of their device using hand gestures. The system will also feature a voice assistant, 
        enabling users to control the GUI and other applications using voice commands. Additionally, 
        the GUI will include a price comparison engine, allowing users to compare prices of products across multiple websites. Overall, 
        this project combines advanced UI features and machine learning techniques to create a powerful and user-friendly GUI.</p>,
      tech: "Python",
      software : "VS Code",
      link: "https://github.com/SathyaSeelanGunasekar/MODERN-GUI-PYTHON-MACHEINELEARNING",
      image: GUI  ,
    },
    {
      title: "Arduino Radar",
      description: <p>  Project involves building an Arduino radar that can detect objects and display 
        their location on a computer screen using Processing Java. 
        The radar will use an ultrasonic sensor to detect objects, and the data will be processed and displayed in real-time. 
        The system will also use a servo motor to rotate the ultrasonic sensor and scan the environment for objects.
         Overall, this project combines hardware and software to create a useful tool for object detection and tracking</p>,
      tech: "Java",
      software : "Processing",
      link: "https://github.com/SathyaSeelanGunasekar/ARDUINO_RADAR_JAVA_processing",
      image: Radar,
      //https://techatronic.com/wp-content/uploads/2021/01/Radar-System-new.jpg
      
    },
    {
      title: "Wallmart Data Analysis",
      description: <p> This Python project focuses on analyzing Walmart's data using four popular modules: NumPy, Pandas, Matplotlib, and Seaborn.
      NumPy is a powerful library that offers mathematical functions and helps in handling arrays and matrices.
      Pandas is a popular library that helps in data cleaning, organizing, and analysis.
      Matplotlib is a data visualization library used to create various types of charts and plots.
      Seaborn is another data visualization library that offers advanced data visualization 
      capabilities such as heatmaps and cluster plots, which can provide insights into Walmart's sales, inventory, and customer behavior.</p>,
      tech: "Python",
      software : "Spyder (Anaconda)",
      link: "https://github.com/SathyaSeelanG/Wallmart_Sales_Analysis_Python",
      image: Wall,
      //https://techatronic.com/wp-content/uploads/2021/01/Radar-System-new.jpg
      
    },
    {
      title: "Ecommerce Website  ",
      description: <p>  E-commerce Web Application is a powerful solution for businesses to establish
         and manage their online stores. It combines the React.js frontend library and the Node.js 
         backend to create an interactive and user-friendly shopping interface. React.js enables the development
          of dynamic and responsive components, while Node.js provides efficient data processing and secure payment transactions.
           With this application, businesses can effectively manage product listings, inventory, customer orders, 
           and execute impactful marketing campaigns. The synergy between React.js and Node.js ensures a fast and 
           seamless shopping experience, resulting in increased customer satisfaction and revenue growth.</p>,
      tech: "React JS , Node JS",
      software : "VS Code",
      link: "https://ecom-web-sathya.netlify.app/",
      image: Ecom ,
      //https://techatronic.com/wp-content/uploads/2021/01/Radar-System-new.jpg
      
    },
    {
      title: "Price Comparision Website ",
      description: (
        <p>

The Python Django Price Comparison Engine is a web application that retrieves and displays price details 
from various online platforms. It uses Django framework and BS4 module for web scraping. Users can search 
for products and view prices from platforms like Amazon, Flipkart, Jiomart, Snapdeal, and Meesho. 
The application simplifies price comparison and helps users make informed purchasing decisions. 
It offers a convenient way to find the best deals across multiple platforms.
            </p>
      ),
      tech: "Python",
      software: "VS Code",
      link: " https://price-comparision-django-keim.onrender.com/",
      image: Price,
    }
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            tech={project.tech}
           
            software={project.software}
            link={project.link}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
