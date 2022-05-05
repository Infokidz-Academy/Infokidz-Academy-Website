import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
    /*Menu Toggle*/
    const [toggle, setToggle] = useState(flase);
    const handleToggle = () => setToggle(!toggle);
    const autoClose = () => setToggle(false);

    return ( 
        <nav id="navbar">
            {/*Toggle*/}
            <div className="navbar-toggle" onClick={handleToggle}>
                <i className={toggle ? "fas fa-times" : "fas fa-bars"} />
            </div>

            {/*Items*/}
            <ul id={toggle ? "navbar-items active" : "navbar-items"}>
                <li className="navbar-item" id="logo">
                    <Link to="/" onClick={autoClose}>
                        
                    </Link>
                </li>
                <li className="navbar-item" id="how-infokidz-works">
                    <Link to="how-infokidz-works" onClick={autoClose}>
                        How Infokidz Works
                    </Link>
                </li>
                <li className="navbar-item" id="programs">
                    <Link to="programs" onClick={autoClose}>
                        Programs
                    </Link>
                </li>
                <li className="navbar-item" id="about">
                    About
                </li>
                <li className="navbar-item" id="contact">
                    <Link onClick={autoClose}>
                        Contact
                    </Link>
                </li>
                <li className="navbar-item" id="register">
                    <Link onClick={autoClose}>
                        Register
                    </Link>
                </li>
            </ul>
        </nav> 
    );
}

export default NavBar;