import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {
    FaTelegramPlane,
} from "react-icons/fa";

function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <Container fluid className="footer">
            <Row>
                <Col md="4" className="footer-copywright">
                    <h3>Создано Максимом</h3>
                </Col>
                <Col md="4" className="footer-copywright">
                    <h3>{year}</h3>
                </Col>
                <Col md="4" className="footer-body">
                    <ul className="footer-icons">
                        <li className="social-icons">
                            <a
                                href="https://t.me/attwq"
                                style={{color: "white"}}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaTelegramPlane/>
                            </a>
                        </li>

                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;
