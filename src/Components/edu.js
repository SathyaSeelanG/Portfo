// import React from 'react';
// import './edu1.css';

// const Educations = () => {
//   const educationData = [
//     {
//       institution: 'University Name',
//       degree: 'Bachelor of Science in Computer Science',
//       year: '2017 - 2021',
//       location: 'City, Country',
//     },
//     {
//       institution: 'School Name',
//       degree: 'High School Diploma',
//       year: '2013 - 2017',
//       location: 'City, Country',
//     },
//     // Add more education entries as needed
//   ];

//   return (
//     <section id="education">
//       <h2>Education</h2>
//       {educationData.map((education, index) => (
//         <div key={index} className="education-entry">
//           <div className="education-details">
//             <h3 className="education-name">{education.institution}</h3>
//             <div className="education-info">
//               <p>{education.degree}</p>
//               <p>{education.year}</p>
//               <p>{education.location}</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// };

// export default Educations;




import React from 'react';
import './edu1.css';

const Educations = () => {
  const educationData = [
    {
      institution: 'NPR Arts & Science College',
      degree: 'Bachelor of Science in Information Technology',
      year: '2020 - 2023',
      location: 'Dindigul ,India',
      percentage:' 8.3 CGPA '
    },
    {
      institution: 'Sri Vasavi Matric Hr Sec School',
      degree: 'Higher Secondary',
      year: '2018 - 2020',
      location: 'Dindigul ,India',
      percentage:'  7.1 CGPA'
    },
    // Add more education entries as needed
  ];

  return (
    <section id="education">
      
      <h2 >Education</h2>
      
      {educationData.map((education, index) => (
        <div key={index} className="education-entry">
          <div className="degree">{education.degree}</div>
          <div className="education-details">
          <p className="percentage">{education.percentage}</p>
            <p className='institution'>{education.institution}</p>
           
            <p className='institution'>{education.year}</p>
            <p className='location'>{education.location}</p>
            
          </div>
        </div>
      ))}
    </section>
  );
};

export default Educations;

