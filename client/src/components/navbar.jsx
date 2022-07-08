import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styling/navbar.css";
import "../styling/button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { LazyLoadImage } from "react-lazy-load-image-component";

function NavBar() {
  /*Navigation Bar Toggle*/
  const [navToggle, setNavToggle] = useState(false);
  const handleNavToggle = () => setNavToggle(!navToggle);
  const autoCloseNav = () => setNavToggle(false);

  /*Dropdown Menu Toggle - Programs*/
  const [dropdownTogglePrograms, setDropdownTogglePrograms] = useState(false);
  const handleDropdownTogglePrograms = () =>
    setDropdownTogglePrograms(!dropdownTogglePrograms);
  const autoCloseDropdownPrograms = () => setDropdownTogglePrograms(false);

  /*Dropdown Menu Toggle - About*/
  const [dropdownToggleAbout, setDropdownToggleAbout] = useState(false);
  const handleDropdownToggleAbout = () =>
    setDropdownToggleAbout(!dropdownToggleAbout);
  const autoCloseDropdownAbout = () => setDropdownToggleAbout(false);

  return (
    <nav id="navbar">
      {/*Logo*/}
      <Link to="/" onClick={autoCloseNav} id="logo">
        <LazyLoadImage
          id="logo-photo"
          src={require("../images/infokidz-academy-logo.jpg")}
          alt="Infokidz Academy Logo"
          width="180px"
          height="72px"
        />
      </Link>

      {/*Items*/}
      <ul id={navToggle ? "navbar-items-active" : "navbar-items"}>
        <li className="navbar-item" id="how-infokidz-works">
          <Link
            to="/how-infokidz-works"
            onClick={autoCloseNav}
            className="link"
          >
            How Infokidz Works
          </Link>
        </li>

        <li
          className="navbar-item"
          id={dropdownTogglePrograms ? "programs" : "programs-inactive"}
          onMouseEnter={handleDropdownTogglePrograms}
          onMouseLeave={autoCloseDropdownPrograms}
          onClick={handleDropdownTogglePrograms}
        >
          <div id="programs-title">
            Programs
            <FontAwesomeIcon icon={faAngleDown} className="dropdown-icon" />
          </div>

          <div id="programs-dropdown">
            <Link
              to="/programs"
              onClick={autoCloseDropdownPrograms}
              className="link dropdown"
            >
              Programs
            </Link>
            <Link
              to="/practice-worksheets"
              onClick={autoCloseDropdownPrograms}
              className="link dropdown"
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
          onMouseLeave={autoCloseDropdownAbout}
          onClick={handleDropdownToggleAbout}
        >
          <div className="about-title">
            About
            <FontAwesomeIcon icon={faAngleDown} className="dropdown-icon" />
          </div>

          <div id="about-dropdown">
            <Link
              to="/about-us"
              onClick={autoCloseDropdownAbout}
              className="link dropdown"
            >
              About Us
            </Link>
            <Link
              to="/testimonials"
              onClick={autoCloseDropdownAbout}
              className="link dropdown"
              id="testimonials"
            >
              Testimonials
            </Link>
            <Link
              to="/faq"
              onClick={autoCloseDropdownAbout}
              className="link dropdown"
              id="faq"
            >
              FAQ
            </Link>
          </div>
        </li>

        <li className="navbar-item" id="contact">
          <Link to="/contact" onClick={autoCloseNav} className="link">
            Contact
          </Link>
        </li>
        <li className="navbar-item" id="register">
          <Link
            to="/register"
            onClick={autoCloseNav}
            className="link button"
            id="button"
          >
            Register
          </Link>
        </li>
      </ul>

      {/*Navigation Bar Toggle*/}
      <div id="navbar-toggle" onClick={handleNavToggle}>
        <i className={navToggle ? "fas fa-times" : "fas fa-bars"} />
      </div>
    </nav>
  );
}

export default NavBar;
