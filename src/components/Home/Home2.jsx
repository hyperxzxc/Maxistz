import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaTelegramPlane,
} from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              О <span className="purple"> СЕБЕ </span>
            </h1>
            <p className="home-about-body">
              Я люблю писать код и делать красивые сайты, а так же автоматизировать бизнес
              <br/>
              <br/>Мой стэк:
              <i>
                <b className="purple"> PHP, Javascript, MySQL. </b>
              </i>
              <br/>
              <br/>
              В мой перечень услуг входит: &nbsp;
              <br/>
              <i>
                <b className="purple">
                  - Создание красивых landing page
                </b>
                <br/>
                <b className="purple">
                  - Телеграм боты и mini apps
                </b>
                <br/>
                <b className="purple">
                  - Интеграции с CRM
                </b>
                <br/>
                <b className="purple">
                  - Доработка и улучшение различных web проектов
                </b>
              </i>
              <br/>
              <br/>
              Может тут что-то будет
              <br/>
              Бим бим <b className="purple">бам бам</b> и
              <i>
                <b className="purple">
                  {" "}
                  текст
                </b>
              </i>
              &nbsp; оп
              <i>
                <b className="purple"> еще текст</b>
              </i>
            </p>
          </Col>

        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Я ТУТ</h1>
            <p>
              Напишите <span className="purple">пжж </span> мне
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                    href="https://t.me/attwq"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                >
                  <FaTelegramPlane/>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
