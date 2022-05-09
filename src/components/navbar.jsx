import React, { useState } from "react";
import { Link } from "react-router-dom";
import navbar from "../styling/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  /*Navigation Bar Toggle*/
  const [navToggle, setNavToggle] = useState(false);
  const handleNavToggle = () => setNavToggle(!navToggle);
  const autoCloseNav = () => setNavToggle(false);

  /*Dropdown Menu Toggle - Programs*/
  const [dropdownTogglePrograms, setDropdownTogglePrograms] = useState(false);
  const handleDropdownTogglePrograms = () => setDropdownTogglePrograms(!dropdownTogglePrograms);
  const autoCloseDropdownPrograms = () => setDropdownTogglePrograms(false);

  /*Dropdown Menu Toggle - About*/
  const [dropdownToggleAbout, setDropdownToggleAbout] = useState(false);
  const handleDropdownToggleAbout = () => setDropdownToggleAbout(!dropdownToggleAbout);
  const autoCloseDropdownAbout = () => setDropdownToggleAbout(false);

  return (
    <nav id="navbar">
      {/*Navigation Bar Toggle*/}
      <div id="navbar-toggle" onClick={handleNavToggle}>
        <i className={navToggle ? "fas fa-times" : "fas fa-bars"} />
      </div>

      <Link to="/" onClick={autoCloseNav} id="logo">
        <img
          id="logo-photo"
          src={require("../images/infokidz-academy-logo.jpg")}
          alt="Infokidz Academy Logo"
        />
      </Link>

      {/*Items*/}
      <ul id={navToggle ? "navbar-items active" : "navbar-items"}>
        <li className="navbar-item" id="how-infokidz-works">
          <Link to="how-infokidz-works" onClick={autoCloseNav} className="link">
            How Infokidz Works
          </Link>
        </li>

        <li
          className="navbar-item"
          id={dropdownTogglePrograms ? "programs" : "programs-inactive"}
          onMouseEnter={handleDropdownTogglePrograms}
          onMouseLeave={handleDropdownTogglePrograms}
        >
          <div id="programs-title">
            Programs
            <FontAwesomeIcon icon={faAngleDown} className="dropdown-icon" />
          </div>
          
          <div id="programs-dropdown">
            <Link 
              to="programs" 
              onClick={autoCloseDropdownPrograms} 
              className="link"
            >
              Programs
            </Link>
            <Link
              to="practice-worksheets"
              onClick={autoCloseDropdownPrograms}
              className="link"
              id="practice-worksheets"
            >
              Practice Worksheets
            </Link>
          </div>
        </li>
        <li
          className="navbar-item"
          id={dropdownToggleAbout ? "about" : "about-inactive"}
          onMouseEnter={handleDropdownToggleAbout}
          onMouseLeave={handleDropdownToggleAbout}
        >
          <div className="about-title">
            About
            <FontAwesomeIcon icon={faAngleDown} className="dropdown-icon" />
          </div>
          
          <div id="about-dropdown">
            <Link 
              to="about-us" 
              onClick={autoCloseDropdownAbout} 
              className="link"
            >
              About Us
            </Link>
            <Link
              to="testimonials"
              onClick={autoCloseDropdownAbout}
              className="link"
            >
              Testimonials
            </Link>
            <Link 
              to="faq" 
              onClick={autoCloseDropdownAbout} 
              className="link" 
              id="faq"
            >
              FAQ
            </Link>
          </div>
        </li>

        <li className="navbar-item" id="contact">
          <Link 
            to="contact" 
            onClick={autoCloseNav} 
            className="link"
          >
            Contact
          </Link>
        </li>
        <li className="navbar-item" id="register">
          <Link 
            to="register" 
            onClick={autoCloseNav} 
            className="link"
          >
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
