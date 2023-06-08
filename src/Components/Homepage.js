import React from 'react';
import './Homepage.css';
import Image from "../Images/program1.jpg";

const HomePage = () => {
  return (
    <div className='homepage'>
      <h1 className='name' >Hi, I am Sathya Seelan</h1>
      <div className='photo'>
        <img src={Image} alt="Certificate 1"
        style={{ width: '900px', height: '600px' , marginRight:'-610px', marginTop:'-360px'}} 

        />
      </div>
      {/* Your other components and content */}
    </div>
  );
};

export default HomePage;
