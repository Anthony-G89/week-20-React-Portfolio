import React from "react";
import { Container } from "react-bootstrap";
import StackChat from "../../images/STACK_CHAT.png";
import CodeQuiz from "../../images/Code Quiz.png"

console.log(StackChat);



const portfolio = props => {
    return (
        <div>
            <Container className="portfolio-container">
                <h2>Portfolio</h2>
                <hr />
                <div className="row">
                    <div className="col">
                        <div><img src={StackChat} alt="StackChat" width="200px" height="200px" /></div>
                    </div>
                    <div className="col">
                        <div className="col">
                            <div><img src={StackChat} alt="StackChat" width="200px" height="200px" /></div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="col">
                            <div><img src={StackChat} alt="StackChat" width="200px" height="200px" /></div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="col pt-2 pl-0">
                            <div><img src={CodeQuiz} alt="StackChat" width="200px" height="200px" /></div>
                        </div>
                    </div>
                </div>

                <hr />

                <h3>Projects</h3>
                <div className="row rowTwo">
                    <div className="col">
                        <div><img src={CodeQuiz} alt="StackChat" width="200px" height="200px" /></div>
                    </div>
                    <div className="col">
                        <div><img src={CodeQuiz} alt="StackChat" width="200px" height="200px" /></div>
                    </div>
                    <div className="col">
                        <div><img src={CodeQuiz} alt="StackChat" width="200px" height="200px" /></div>
                    </div>
                    <div className="col">
                        <div><img src={CodeQuiz} alt="StackChat" width="200px" height="200px" /></div>
                    </div>

                </div>

            </Container>
        </div>
    )
};

export default portfolio;