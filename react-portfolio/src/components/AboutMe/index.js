import React from "react";
import { Container } from "react-bootstrap";
import "./style.css";

const name = "Anthony Guerrero"


const aboutMeHeader = props => {
    return (
        <>
            <h2 className="ml-3">{name}</h2>
            <Container className=" bio row d-flex justify-content-center">
                <p className="col-md-8">
                    My name is Anthony Guerrero, I was born in <strong>Queens, NY</strong> and when I was 12 years old I moved to
                    <strong> Orlando, FL</strong> and have been here since. I went to <em>Cypress Creek High School</em> and
                    graduated in 2008.
                    After that, I went to Valencia College with the intnention of majoring in Business Administration. But soon
                    after, I realized it wasn't for me. I spent the next couple of years trying to figure out what I wanted to
                    do with my life. During that time, I did hospitality for several years. I was fortunate to make cash daily,
                    drive cars that some people have only seen in movies or online, and met some celebrities along the way.
                    However, hospitality is not what I wanted to do for the rest of my life. I envisioned my future and what I
                    wanted, I always heard about coding but never really paid much mind to it. Until, two years ago, when I
                    decided to look into coding and seeing what other careers looked like. After I did my research and started
                    watching videos of people coding I fell in love and finally knew what I wanted to do with my life. It only
                    took 28 years of my life but I'm glad that I didn't rush into my major and spent thousands of dollars for a
                    career that I wasn't going to be happy with.
            </p>
            </Container>
        </>
    )
}

export default aboutMeHeader;