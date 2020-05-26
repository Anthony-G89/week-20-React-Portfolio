import React from "react";
import "./style.css"
import { Container } from "react-bootstrap";
import StackChat from "../../images/STACK_CHAT.png";
import CodeQuiz from "../../images/Code Quiz.png";
import PasswordGenerator from "../../images/password_generator.png";
import WorkScheduler from "../../images/work_day-Scheduler.png";
import WeatherDasbored from "../../images/showingFiveDayForeCast(2).png";
import GoodReadme from "../../images/good_readme.png";
import LocalWire from "../../images/Local Wire.png";
import NoteTaker from "../../images/home_week11_noteTaker.png";


console.log(StackChat);



const portfolio = props => {
    return (
        <div>
            <Container className="portfolio-container pt-4 shadow-lg p-3 mb-5 bg-white rounded">
                <h2>Portfolio</h2>
                <hr />
                <h3>Front End Work</h3>
                <div className="row .w-100">
                    <div className="col">
                        <img src={PasswordGenerator} alt="password Generator ScreenShot" width="150px" height="150px" />
                    </div>
                    <div className="col">
                        <div className="col">
                            <img src={CodeQuiz} alt="Code Quiz ScreenShot" width="150px" height="150px" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="col">
                            <img src={WorkScheduler} alt="Work Day ScreenShot" width="150px" height="150px" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="col pt-2 pl-0">
                            <img src={WeatherDasbored} alt="Weather Dashbored  " width="150px" height="150px" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div><img src={GoodReadme} alt="password Generator ScreenShot" width="150px" height="150px" /></div>
                    </div>
                </div>

                <hr />

                <h3>Projects</h3>
                <div className="row rowTwo">
                    <div className="col">
                        <div><img src={LocalWire} alt="Local Wire" width="150px" height="150px" /></div>
                    </div>
                    <div className="col">
                        <div><img src={StackChat} alt="StackChat" width="150px" height="150px" /></div>
                    </div>
                </div>
                <hr />

                <h3> Back End Work</h3>
                <div className="row rowThree">
                    <div className="col">
                        <div><img src={NoteTaker} alt="Note Taker Homepage" width="150px" height="150px" /></div>
                    </div>
                    <div className="col">
                        <div><img src={StackChat} alt="StackChat" width="150px" height="150px" /></div>
                    </div>
                </div>

            </Container>
        </div>
    )
};

export default portfolio;