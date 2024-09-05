import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import Matrix from "../Matrix"

function About() {
    return (
        <Container fluid className="about-section">
            <Particle/>
            <Matrix/>
            <Container>
                <Row style={{justifyContent: "center", padding: "10px"}}>
                    <Col
                        md={7}
                        style={{
                            justifyContent: "center",
                            paddingTop: "30px",
                            paddingBottom: "50px",
                        }}
                    >
                        <h1 style={{fontSize: "2.1em", paddingBottom: "20px"}}>
                            Кто же <strong className="mainColor">Я</strong>
                        </h1>
                        <Aboutcard/>
                    </Col>
                </Row>
                <h1 className="project-heading">
                    Профессиональные <strong className="mainColor">навыки </strong>
                </h1>


                <h1 className="project-heading">
                    <strong className="mainColor">Технологии</strong>, что я использую
                </h1>
                <Toolstack/>

            </Container>
        </Container>
    );
}

export default About;
