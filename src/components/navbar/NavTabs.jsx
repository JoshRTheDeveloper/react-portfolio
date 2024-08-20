import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './NavTabs.css'; 
import cert from '../../assets/Cert.pdf';
import res from "../../assets/Resume.pdf";

function NavTabs() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const currentPage = useLocation().pathname;

  const handleDropdownToggle = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  return (
    <div className="navbar"> 
      <div className='navbar-content'>
        <div className='column'>
          <h1 className="navbar-brand">Joshua Roth</h1>
          <div className='mobile-split'>
            <div className='ham-split' >

          
            <div className='projects-div'>
              <a className='projects-titlea' href={res}>Resume</a>
            </div>
            <div className='projects-div'>
              <a className='projects-titlea' href={cert}>Certification</a>
            </div>
          </div>

          <div className='projects-div'>
            
              <a className='projects-title' href='#projects'>
                Projects
              </a>
              <h3 className='projects-title-mobile' onClick={handleDropdownToggle}>
                Projects &#9662;
              </h3>
          
         
            <div className={`projects-list`}>
              <a className='projects-name' href='#invoicinator3000'>- Invoicinator 3000</a>
              <a className='projects-name' href='#invoicinator'>- Invoicinator (original)</a>
              <a className='projects-name' href='#radiant'>- Radiant Oasis Spa</a>
              <a className='projects-name' href='#fourD'>- Fourth Dimension</a>
              <a className='projects-name' href='#bullies'>- Bullies of Texas</a>
              <a className='projects-name' href='#laughs'>- Only Laughs</a>
              <a className='projects-name' href='#weather'>- Weather App</a>
              <a className='projects-name' href='#quiz'>- Coding Quiz</a>
            </div>
            
            <div className={`projects-list-mobile ${isDropdownOpen ? 'open' : ''}`}>
              <a className='projects-name' href='#invoicinator3000'>- Invoicinator 3000</a>
              <a className='projects-name' href='#invoicinator'>- Invoicinator (original)</a>
              <a className='projects-name' href='#radiant'>- Radiant Oasis Spa</a>
              <a className='projects-name' href='#fourD'>- Fourth Dimension</a>
              <a className='projects-name' href='#bullies'>- Bullies of Texas</a>
              <a className='projects-name' href='#laughs'>- Only Laughs</a>
              <a className='projects-name' href='#weather'>- Weather App</a>
              <a className='projects-name' href='#quiz'>- Coding Quiz</a>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavTabs;
