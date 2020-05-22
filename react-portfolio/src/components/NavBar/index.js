import React from "react";
import { Link, useLocation } from "react-router-dom";


const NavBar = props => {
    
    const location = useLocation();
    
    return (
        <ul className="nav ">
            <li className="nav-item">
                <Link to="/About_me" className={location.pathname === "/About me" ? "nav-link active" : "nav-link"}>
                    About Me |
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/portfolio"
                    className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                    Portfolio |
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/Contact Me"
                    className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                    Contact Me
                </Link>
            </li>

        </ul>

    )
}

export default NavBar;
