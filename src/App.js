import React from 'react';
import './Components/Style.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from './Components/Header';
import HomePage from './Components/Homepage';
import AboutMe from './Components/Aboutme';
import Skills from './Components/Skills2'
// import Education from './Components/Education';
// import Certificates from './Components/Certificates1';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import './App.css';
// import './Education.css'
// import Educations from './Components/edu';
import ContactForm from './Components/ContactForm';
import './Components/Skills.css'
// import Contact from './Components/Contact';
import './media.css';


function App() {
  return (
    <div className="App">
      <Header />
      <main className='mainpage'>
        <HomePage/>
        <AboutMe />
        <Skills/>
       <Projects />
       {/* <Education/> */}
       {/* <Educations/> */}
       {/* <Certificates/> */}
      <ContactForm />
      {/* <Contact/> */}
      </main>
     <Footer />
    </div>
  );
}

export default App;
