import React from "react";
import {Navbar, NavItem} from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import NavBar from "./components/NavBar";
import aboutMeHeader from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";


function App() {
    return (
        <div>
            <Router>
                <Navbar className="justify-content-end">
                <NavItem><Link to="/">AboutMe | </Link></NavItem>
                <NavItem><Link to="/portfolio"> Portfolio | </Link></NavItem>
                <NavItem><Link to="/contact-me">Contact Me </Link></NavItem>
                </Navbar>
                {/* <Route component={NavBar} /> */}
                <Route exact path="/" component={aboutMeHeader} />
                <Route exact path="/contact-me" component={ContactMe} /> 
                <Route component={Footer} />
            </Router>
        </div>



    )
}

export default App;

