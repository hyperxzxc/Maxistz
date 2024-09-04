import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Привет, я <span className="purple">Алексеев Максим </span>
            с <span className="purple"> города Казань, Россия.</span>
            <br />
            Текст
            <br />
            <br />
            Текст
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Текст
            </li>
            <li className="about-activity">
              <ImPointRight /> Текст
            </li>
            <li className="about-activity">
              <ImPointRight /> Текст
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Текст"{" "}
          </p>
          <footer className="blockquote-footer">Текст</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
