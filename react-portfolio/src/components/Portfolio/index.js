import React from "react";
import { Container } from "react-bootstrap";


const portfolio = props => {
    return (
        <div>
            <Container className="portfolio-container">
                <h2>Portfolio</h2>
                <hr />
                <div className="row">
                    <div className="col">
                        <div><img src={"../public/images/STACK_CHAT.png"} alt="StackChat" /></div>
                    </div>
                    <div className="col">

                    </div>
                    <div className="col">

                    </div>
                    <div className="col">

                    </div>
                </div>

            </Container>
        </div>
    )
};

export default portfolio;