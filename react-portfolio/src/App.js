import React, { Component } from "react";
import ReactDOM from "react-dom";
import Bootstrap from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
// import Footer from "../src/components/Footer";


function App() {
    return (
        <div>

            <Router>
                <Route component={NavBar} />

            </Router>
        </div>



    )
}

export default App;

const home = props => {

}