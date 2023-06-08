// import React, { useEffect } from 'react';
// // import './Header12.css'

//  import Githubicon from '../Images/github.png';
//  import linkedinicon from '../Images/linkedin.png';
//  import Resume from '../Resume.pdf';

// function Header() {
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
//     <header>
        
//  <div>
//             <h1 className="title">Sathya Seelan G</h1>
        
          
          
//           </div>
//           {/* <nav className='navbar'> 
//           <input type="checkbox" id="toggler"/>
//           <label for="toggler">< i class="ri-menu-line"></i>  </label>
//           <div class = "menu">
//             <ul class="list"> 
//             <li> <a href="#">Home</a></li>
//             <li> <a href="#">About</a></li>
//             <li> <a href="#">ContactForm</a></li>
//             </ul>
//           </div>
//           </nav> */}

//           <div> 
//       <nav>
//         {/* <ul>
//           <li><a href="#about">About</a></li>
//           <li><a href="#skills">Skills</a></li>
//           <li><a href="#projects">Projects</a></li>
//           <li><a href="#education ">Education</a></li>
//           <li><a href="#ContactForm ">ContactForm</a></li>
//         </ul> */}
      
      
//       {/* <a href= "https://github.com/SathyaSeelanG" target="_blank">
//             <img src={Githubicon} alt="GitHub" height="40" width="40" />
//           </a>
//           <a href="https://www.linkedin.com/in/sathya-seelan-gunasekar/" target="_blank">
//             <img src={linkedinicon} alt="LinkedIn" height="40" width="40" />
//           </a> */}
//           <a href={Resume} className="download-resume-button" download>Resume</a>
//           </nav>
//       </div>
//     </header>
//   );
// }

// export default Header;
