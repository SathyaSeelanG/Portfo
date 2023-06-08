import React from 'react';
// import './Style.css'
// import './Header12.css'
import './Footer.css'
// import Mail from '../Images/Mail.png';
// import Insta from '../Images/Instagram.png';
// import Indeed from '../Images/Indeed.png';
// import Naukri from '../Images/naukri.jpg';
import Githubicon from '../Images/github.png';
import linkedinicon from '../Images/linkedin.png';




function Footer() {
  return (
    <footer className="page-footer">
      <div className='foot'>
      <h3 >&copy; 2023 [ Sathya Seelan G   ]</h3>
      <div>
      <nav className='social' > 
        
      {/* <h3 className="contact-heading">Contact  </h3>  */}
      
      <a href="https://www.linkedin.com/in/sathya-seelan-gunasekar/" target="_blank">
            <img src={linkedinicon} alt="Linkedin" height="40" width="40" />
          </a>
        {/* <a href= "https://github.com/SathyaSeelanG" target="_blank">
            <img src={Indeed} alt="Indeed" height="40" width="40" />

            </a> */}
        {/* <a href= "https://github.com/SathyaSeelanG" target="_blank">
              <img src={Mail} alt="Insta" height="40" width="40" />
            </a>  */}
          {/* <a href="https://www.linkedin.com/in/sathya-seelan-gunasekar/" target="_blank">
            <img src={Naukri} alt="Naukri" height="40" width="40" />
          </a> */}
          <a  href= "https://github.com/SathyaSeelanG" target="_blank">
            <img src={Githubicon} alt="" height="40" width="40" />
          </a>

       
          
          </nav>
      </div> 
      
     
      </div>
       
    </footer>
  );
}

export default Footer;
