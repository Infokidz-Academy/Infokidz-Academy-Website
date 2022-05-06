import React, { useState } from "react";
import { Link } from "react-router-dom";
import navbar from "../styling/navbar.css";

function NavBar() {
  /*Menu Toggle*/
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);
  const autoClose = () => setToggle(false);

  return (
    <nav id="navbar">
      {/*Toggle*/}
      <div id="navbar-toggle" onClick={handleToggle}>
        <i className={toggle ? "fas fa-times" : "fas fa-bars"} />
      </div>

      <Link to="/" onClick={autoClose} id="logo">
        <img
          id="logo-photo"
          src={require("../images/infokidz-academy-logo.jpg")}
          alt="Infokidz Academy Logo"
        />
      </Link>

      {/*Items*/}
      <ul id={toggle ? "navbar-items active" : "navbar-items"}>
        <li className="navbar-item" id="how-infokidz-works">
          <Link to="how-infokidz-works" onClick={autoClose} className="link">
            How Infokidz Works
          </Link>
        </li>
        <li className="navbar-item" id="programs">
          Programs
        </li>
        <li className="navbar-item" id="about">
          About
        </li>
        <li className="navbar-item" id="contact">
          <Link to="contact" onClick={autoClose} className="link">
            Contact
          </Link>
        </li>
        <li className="navbar-item" id="register">
          <Link to="register" onClick={autoClose} className="link">
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
