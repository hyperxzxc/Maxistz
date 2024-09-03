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
            Охуенный чел
            <br />
            <br />
            Кроме программирования я люблю
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Сходить с ума
            </li>
            <li className="about-activity">
              <ImPointRight /> Кайфовать
            </li>
            <li className="about-activity">
              <ImPointRight /> Кидать снюс
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Утром час... в обед час... вечером час.."{" "}
          </p>
          <footer className="blockquote-footer">Мыслитель</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
