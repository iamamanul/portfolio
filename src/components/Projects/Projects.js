import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import QuantAI from "../../Assets/Projects/QuantAI.png";
import QuickChat from "../../Assets/Projects/QuickChat.png";
import TicTacToe from "../../Assets/Projects/TicTacToe.png";
import WorldAtlas from "../../Assets/Projects/WorldAtlas.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* QuantAI */}
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={QuantAI}
              isBlog={false}
              title="QuantAI"
              description={"AI Career Coach for Professional Success. Advance your career with personalized guidance, interview prep, and AI-powered tools for job success."}
              ghLink={"https://github.com/iamamanul/QuantAI"}
              demoLink={"https://quant-ai-kappa.vercel.app/"}
            />
          </Col>
          {/* QuickChat */}
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={QuickChat}
              isBlog={false}
              title="QuickChat"
              description={"QuickChat is a real-time chat application built with the MERN stack and Socket.IO, featuring user authentication, private messaging, and a responsive UI using React and Tailwind CSS. The app is Dockerized and supports CI/CD workflows for smooth, automated deployment. MongoDB stores chat data, while Socket.IO enables instant communication."}
              ghLink={"https://github.com/iamamanul/QuickChat"}
              demoLink={"https://quick-chat-taupe.vercel.app/login"}
            />
          </Col>
          {/* WorldAtlas */}
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={WorldAtlas}
              isBlog={false}
              title="WorldAtlas"
              description={"WorldAtlas is an interactive world map application providing country data, statistics, and visualizations. Built with React and modern web technologies."}
              ghLink={"https://github.com/iamamanul/WorldAtlas"}
              demoLink={"https://world-atlas-eosin.vercel.app/"}
            />
          </Col>
          {/* TicTacToe */}
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={TicTacToe}
              isBlog={false}
              title="TicTacToe"
              description={"A classic TicTacToe game built with React, featuring a clean UI and smooth gameplay experience."}
              ghLink={"https://github.com/iamamanul/ticTacToe"}
              demoLink={"https://tic-tac-toe-gamma-blond.vercel.app/"}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
