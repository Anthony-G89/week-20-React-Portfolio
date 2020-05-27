import React from "react";
// import { Link, useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";


const ContactMe = props => {
    // const location = useLocation();

    function SubmitMessage(e) {
        e.preventDefault();
        console.log("hi");


    }

    return (
        <>

            {/* <ul className="nav justify-content-end">
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
            </ul> */}

            <Container className="pt-5 ">
                <title>Contact me</title>
                <div className="container-form shadow-lg p-3 mb-5 bg-white rounded">
                    <h2 className="contact-h2">Contact</h2>
                    <div className="form-group">
                        <label >Name:</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label >Email address:</label>
                        <input type="email" className="form-control" placeholder="Enter your email" />
                    </div>


                    <div className="form-group">
                        <label >Message:</label>
                        <textarea className="form-control" cols="30" rows="10" ></textarea>
                        <br />
                        <button type="button" className="btn btn-primary" >Submit</button>
                    </div>
                </div>
            </Container>









        </>
    )
}

export default ContactMe;
