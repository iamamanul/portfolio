import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Creative problem-solving Engineering Junior with a passion for
              full-stack development. Seeking a challenging internship to apply my
              skills and contribute to a growing team.
              <br />
              <br />
              <b className="purple">DevOps:</b> Linux, GIT Hub, Docker, Terraform,
              Kubernetes, Jenkins, GIT Actions, Ansible
              <br />
              <b className="purple">Web:</b> ReactJS, NodeJS, ExpressJS, NextJS,
              JavaScript, HTML, CSS
              <br />
              <b className="purple">Databases:</b> SQL, DBMS, MySQL, Oracle,
              MongoDB
              <br />
              <b className="purple">Programming Languages:</b> C, Java, C++
              <br />
              <b className="purple">Tools & Technologies:</b> DSA, Computer
              Networks, JIRA
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/amanul-hasan-9a204a2b5?trk=contact-info"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
