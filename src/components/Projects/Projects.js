import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={leaf} // You may want to update this to a relevant image
              isBlog={false}
              title="Estate: Real Estate Website"
              description={"Estate is a modern and responsive real estate website built with React, Tailwind CSS, and Framer Motion. Features: Responsive design, modern UI, property listings with image sliders, dark mode, contact form with validation, WhatsApp and Location integration."}
              ghLink={"https://estate-taupe.vercel.app/"}
              demoLink={"https://estate-taupe.vercel.app/"}
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={editor} // You may want to update this to a relevant image
              isBlog={false}
              title="DevOps: End to end Deployment of Full Stack Website"
              description={"Technologies used: AWS, Linux, Jenkins, Docker, Kubernetes, Terraform, Ansible. Automated deployment pipeline for a full stack web application."}
              ghLink={""}
              demoLink={""}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
