import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Мои недавние <strong className="mainColor">работы </strong>
        </h1>
        <p style={{ color: "white" }}>
          Здесь представлены мои успешные работы
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Проект"
              description="ПУСТО!"
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={chatify}
                isBlog={false}
                title="Проект"
                description="ПУСТО!"
                ghLink=""
                demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={chatify}
                isBlog={false}
                title="Проект"
                description="ПУСТО!"
                ghLink=""
                demoLink=""
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={chatify}
                isBlog={false}
                title="Проект"
                description="ПУСТО!"
                ghLink=""
                demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={chatify}
                isBlog={false}
                title="Проект"
                description="ПУСТО!"
                ghLink=""
                demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={chatify}
                isBlog={false}
                title="Проект"
                description="ПУСТО!"
                ghLink=""
                demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
