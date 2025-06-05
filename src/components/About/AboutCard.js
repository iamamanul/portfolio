import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Amanul Hasan</span> from{" "}
            <span className="purple">Delhi, India.</span>
            <br />
            I am currently pursuing B.Tech in Information Technology at Bhagwan
            Parshuram Institute of Technology (GGSIPU).
            <br />
            <br />
            Creative problem-solving Engineering Junior with a passion for
            DevOps. Seeking a challenging internship to apply my
            skills and contribute to a growing team.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring DevOps tools
            </li>
            <li className="about-activity">
              <ImPointRight /> Building web projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new technologies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Amanul</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
