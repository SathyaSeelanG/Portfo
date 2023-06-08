import React from 'react';
import './Education.css'


const Education = () => {
  const education = [
    { name: 'B.SC(INFORMATION TECHNOLOGY)', inst: 'NPR Arts and Science College ', year: '2023', cgpa: '8.3' },
    { name: 'HSC', inst: 'Sri Vasavi Matric Higher Secondary School', year: '2020', cgpa: '60%' },
    { name: 'SSLC', inst: 'Sri Vasavi Matric  Higher Secondary School', year: '2018', cgpa: '76%' },
];

return (
    <section id= "education">
    <div className="containers">
        <h2 className="education-header">Education</h2>
        <table className="education-table">
            <thead>
                <tr>
                    <th>Course</th>
                    <th>Institution</th>
                    <th>Year</th>
                    <th>Percentage/ Cgpa</th>
                </tr>
            </thead>
            <tbody>
                {education.map(cert => (
                    <tr key={cert.name}>
                        <td>{cert.name}</td>
                        <td>{cert.inst}</td>
                        <td>{cert.year}</td>
                        <td>{cert.cgpa}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    </section>
);
};
//   const education = [
//     {
//       school: "University of California, Los Angeles",
//       degree: "Bachelor of Science in Computer Science",
//       date: "2015 - 2019",
//     },
//     {
//       school: "Harvard University",
//       degree: "Master of Science in Data Science",
//       date: "2020 - 2022",
//     },
//   ];

//   return (
//     <section id="education">
//       <h2>Education</h2>
//       {education.map((item, index) => (
//         <div className="education-item" key={index}>
//           <h3>{item.school}</h3>
//           <p>{item.degree}</p>
//           <p>{item.date}</p>
//         </div>
//       ))}
//     </section>
//   );
// };

export default Education;
