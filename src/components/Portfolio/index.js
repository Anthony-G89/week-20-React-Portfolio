import React from "react";
import "./style.css";
import { Container } from "react-bootstrap";
import StackChat from "../../images/STACK_CHAT.png";
import CodeQuiz from "../../images/Code Quiz.png";
import PasswordGenerator from "../../images/password_generator.png";
import WorkScheduler from "../../images/work_day-Scheduler.png";
import WeatherDasbored from "../../images/showingFiveDayForeCast(2).png";
import GoodReadme from "../../images/good_readme.png";
import LocalWire from "../../images/Local Wire.png";
import NoteTaker from "../../images/home_week11_noteTaker.png";
import Burger from "../../images/Burgers.png";
import TeamTemplate from "../../images/team_template_final.png";
import EmployeeTracker from "../../images/Employee-Tracker.png";
import FitnessTracker from "../../images/home_fitness_tracker.png";
import BudgetTracker from "../../images/budget-tracker.png";
import EmployeeDirectory from "../../images/employee_directory.png";


class clickAbleLinks extends React.Component {

    navigateToGitHubProject(repo) {
        window.open(`https://github.com/Anthony-G89/${repo}`);
    }

    navigateToHeroku(repo) {
        window.open(`https://dashboard.heroku.com/apps/${repo}`)
    }

    render() {
        return (
            <div >
                <Container className="portfolio-container pt-4 ">
                    <h2 className="portfolioHeaders">Portfolio</h2>
                    <hr />
                    <h3 className="portfolioHeaders">Front End Work</h3>
                    <div className="row .w-100">
                        <div className="col " onClick={() => this.navigateToGitHubProject("password-Generator")} >
                            <img src={PasswordGenerator} className="Links" alt="password Generator ScreenShot" width="150px" height="150px" />
                        </div>
                        <div className="col" onClick={() => this.navigateToGitHubProject("Code-Quiz")}>
                            <div className="col ">
                                <img src={CodeQuiz} className="Links" alt="Code Quiz ScreenShot" width="150px" height="150px" />
                            </div>
                        </div>
                        <div className="col" onClick={() => this.navigateToGitHubProject("work-day-scheduler")}>
                            <div className="col">
                                <img src={WorkScheduler} className="Links" alt="Work Day ScreenShot" width="150px" height="150px" />
                            </div>
                        </div>
                        <div className="col" onClick={() => this.navigateToGitHubProject("weather-dashboard")}>
                            <div className="col pt-2 pl-0">
                                <img src={WeatherDasbored} className="Links" alt="Weather Dashbored  " width="150px" height="150px" />
                            </div>
                        </div>
                    </div>
                    <div className="row" >
                        <div className="col" onClick={() => this.navigateToGitHubProject("good_readme")}>
                            <img src={GoodReadme} className="Links" alt="password Generator ScreenShot" width="150px" height="150px" />
                        </div>
                    </div>

                    <hr />

                    <h3 className="portfolioHeaders">Projects</h3>
                    <div className="row rowTwo">
                        <div className="col-md-3" onClick={() => this.navigateToGitHubProject("Project_One")}>
                            <img src={LocalWire} className="Links" alt="Local Wire" width="150px" height="150px" />
                        </div>
                        <div className="col-md-3" onClick={() => this.navigateToGitHubProject("STACKCHAT")}>
                            <img src={StackChat} className="Links" alt="StackChat" width="150px" height="150px" />
                        </div>
                    </div>
                    <hr />

                    <h3 className="portfolioHeaders"> Back End Work</h3>
                    <div className="row rowThree">
                        <div className="col" onClick={() => this.navigateToHeroku("evening-wildwood-16240")}>
                            <img src={NoteTaker} className="Links" alt="Note Taker Homepage" width="150px" height="150px" />
                        </div>
                        <div className="col" onClick={() => this.navigateToHeroku("stormy-shelf-46786")}>
                            <img src={Burger} className="Links" alt="" width="150px" height="150px" />
                        </div>
                        <div className="col" onClick={() => this.navigateToGitHubProject("Team_Template")}>
                            <img src={TeamTemplate} className="Links" alt="" width="150px" height="150px" />
                        </div>
                        <div className="col" onClick={() => this.navigateToGitHubProject("week-12-employee-tracker")}>
                            <img src={EmployeeTracker} className="Links" alt="" width="150px" height="150px" />
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-3" onClick={() => this.navigateToHeroku("gentle-hamlet-68132")}>
                            <img src={FitnessTracker} className="Links" alt="" width="150px" height="150px" />
                        </div>
                        <div className="col-md-3" onClick={() => this.navigateToHeroku("whispering-beach-48990")}>
                            <img src={BudgetTracker} className="Links" alt="" width="150px" height="150px" />
                        </div>
                        <div className="col" onClick={() => this.navigateToGitHubProject("week-19-react-employee-directory")}>
                            <img src={EmployeeDirectory} className="Links" alt="" width="150px" height="150px" />
                        </div>
                    </div>


                </Container>
            </div>

        )
    }

};

export default clickAbleLinks;





