import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavTabs.css'; // Import the CSS file

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <div className="custom-navbar"> {/* Apply custom class */}
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="navbar-brand">Joshua Roth</h1>
          <ul className="nav nav-pills custom-nav-pills">
            <li className="nav-item">
              <Link
                to="/"
                className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
              >
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/About"
                className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Contact"
                className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
              >
                LinkedIn
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                to="/Resume"
                className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
              >
                Resume
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavTabs;
