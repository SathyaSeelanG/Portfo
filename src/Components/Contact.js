import React from 'react';
import './Contact.css'

// import Mail from '../Images/Mail.png';
// import Insta from '../Images/Instagram.png';
// import Indeed from '../Images/Indeed.png';

import Githubicon from '../Images/github.png';
import linkedinicon from '../Images/linkedin.png';

function Contact() {
  return (
    
     
    //  <div  className="Contact">  
    <div>
        <h3 className="contact-heading"> </h3>  
      <nav className='social' > 
      <h3 className="contact-heading">Contact @ </h3> 
      {/* <a href= "https://github.com/SathyaSeelanG" target="_blank">
            <img src={Mail} alt="Insta" height="40" width="40" />
          </a>  */}
          {/* <a href="https://www.linkedin.com/in/sathya-seelan-gunasekar/" target="_blank">
            <img src={Insta} alt="Instagram" height="40" width="40" />
          </a> */}
          <a  href= "https://github.com/SathyaSeelanG" target="_blank">
            <img src={Githubicon} alt="Indeed" height="40" width="40" />
          </a>

          <a href="https://www.linkedin.com/in/sathya-seelan-gunasekar/" target="_blank">
            <img src={linkedinicon} alt="Naukri" height="40" width="40" />
          </a>
        {/* <a href= "https://github.com/SathyaSeelanG" target="_blank">
            <img src={Indeed} alt="GitHub" height="40" width="40" />
        </a> */}
          
          </nav>
      </div> 
    
  );
}

export default Contact;
