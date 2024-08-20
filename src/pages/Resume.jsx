import React from 'react';
import './resume.css';
const Resume = () => {
  // Replace 'path_to_your_resume.pdf' with the actual path to your resume file
  const resumeUrl = 'public/Joshua Roth Resume.pdf';

  return (
    <div className="resume-container">
      <h2>Download Resume</h2>
      <p>Click the link below to download my resume:</p>
      <a href={resumeUrl} download="resume.pdf" className="resume-link">Download Resume</a>
     <br>
     </br>
     <h2>Skills</h2>
      <ul>
        <li>Mern Stack</li>
        <li>Hmtl, Css and Javascript</li>
        <li>Bootstrap</li>
        <li>SQL and NoSql</li>
        <li>Express and Node.js</li>
      </ul>
    </div>
  );
};

export default Resume;
