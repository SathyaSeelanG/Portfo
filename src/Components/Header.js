// import React, { useEffect, useState } from 'react';
// import './Header.css'; // Import your custom CSS file

// import Githubicon from '../Images/github.png';
// import linkedinicon from '../Images/linkedin.png';
// import Resume from '../Resume.pdf';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleMenuToggle = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   useEffect(() => {
//     const header = document.querySelector('header');
//     const handleScroll = () => {
//       if (window.scrollY > 0) {
//         header.classList.add('sticky');
//       } else {
//         header.classList.remove('sticky');
//       }
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <header className={`header-container ${isMenuOpen ? 'open' : ''}`}>
//       <div className="menu-container">
//         <button className="menu-toggle" onClick={handleMenuToggle}>
//           Menu
//         </button>
//       </div>

//       <div>
//         <h1 className="title">Sathya Seelan G</h1>
//       </div>

//       <div>
//         <nav>
//           <a href={Resume} className="download-resume-button" download>
//             Resume
//           </a>
//         </nav>
//       </div>

//       <div className={`menu-list ${isMenuOpen ? 'open' : ''}`}>
//         <ul>
//           <li>
//             <a href="#about">About</a>
//           </li>
//           <li>
//             <a href="#projects">Projects</a>
//           </li>
//           <li>
//             <a href="#skills">Skills</a>
//           </li>
//         </ul>
//       </div>
//     </header>
//   );
// };

// export default Header;





// import React, { useEffect, useState } from 'react';
// import './Header.css'; // Import your custom CSS file

// import Githubicon from '../Images/github.png';
// import linkedinicon from '../Images/linkedin.png';
// import Resume from '../Resume.pdf';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleMenuToggle = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   useEffect(() => {
//     const header = document.querySelector('header');
//     const handleScroll = () => {
//       if (window.scrollY > 0) {
//         header.classList.add('sticky');
//       } else {
//         header.classList.remove('sticky');
//       }
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <header className={`header-container ${isMenuOpen ? 'open' : ''}`}>
//       <div className="menu-container">
//         <button className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
//           Menu
//         </button>

//         {isMenuOpen && (
//           <div className="menu-list">
//             <ul>
//               <li>
//                 <a href="#about">About</a>
//               </li>
//               <li>
//                 <a href="#projects">Projects</a>
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>

//       <div>
//         <h1 className="title">Sathya Seelan G</h1>
//       </div>

//       <div>
//         <nav>
//           <a href={Resume} className="download-resume-button" download>
//             Resume
//           </a>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React, { useEffect, useState } from 'react';
import './Header.css'; // Import your custom CSS file
import linkedinicon from '../Images/linkedin.png';
import Githubicon from '../Images/github.png';
// import Insta from '../Images/Instagram.png';
// import Naukri from '../Images/naukri.jpg';
// import Indeed from '../Images/Indeed.png';

import Resume from '../Resume.pdf';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(! isMenuOpen);
  };

  useEffect(() => {
    const header = document.querySelector('header');
    const handleScroll = () => {
      if (window.scrollY > 0) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header-container ${isMenuOpen ? 'open' : ''}`}>
      <div className="menu-container">
        <button className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
          :::
        </button>

        {isMenuOpen && (
          <div className="menu-list">
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
                
              <li><a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              {/* <li>
                <a href="#education">Education</a>
              </li>*/}
              <li>
                <a href="#ContactForm">Contact</a>
              </li> 
              <li>
                <a href={Resume} className="download-resume-button" download>
            Resume
          </a>
          </li>
            </ul>
          </div>
        )}
      </div>

      {/* <div>
        <h1 className="title">Sathya Seelan G</h1>
      </div> */}

      <div>
      <nav className='socialicon' > 
     
      
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

      {/* <div>
        <nav>
          <a href={Resume} className="download-resume-button" download>
            Resume
          </a>
        </nav>
      </div> */}
    </header>
  );
};

export default Header;
