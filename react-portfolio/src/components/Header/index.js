import React from "react";
import { Link, useLocation } from "react-router-dom";


function NavBar() {
    const location = useLocation();

    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
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
