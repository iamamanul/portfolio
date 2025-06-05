import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiLinux,
  SiDocker,
  SiJenkins,
  SiKubernetes,
  SiTerraform,
  SiAnsible,
  SiAmazonaws,
  SiGithubactions,
  SiGithub,
} from "react-icons/si";

function Techstack() {
  return (
    <>
      {/* DevOps Section */}
      <h1 className="project-heading" style={{ marginBottom: "20px" }}>
        <span className="purple">DevOps</span> Skillset
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiLinux />
          <div className="tech-label">Linux</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiDocker />
          <div className="tech-label">Docker</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiJenkins />
          <div className="tech-label">Jenkins</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiKubernetes />
          <div className="tech-label">Kubernetes</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiTerraform />
          <div className="tech-label">Terraform</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiAnsible />
          <div className="tech-label">Ansible</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiAmazonaws />
          <div className="tech-label">AWS</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiGithubactions />
          <div className="tech-label">GitHub Actions</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiGithub />
          <div className="tech-label">GitHub</div>
        </Col>
      </Row>
      {/* Skills Section */}
      <h1 className="project-heading" style={{ marginBottom: "20px" }}>
        Development <span className="purple">Skillset</span>
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <DiJavascript1 />
          <div className="tech-label">JavaScript</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiReact />
          <div className="tech-label">ReactJS</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiNodejs />
          <div className="tech-label">NodeJS</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiNextdotjs />
          <div className="tech-label">NextJS</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiGit />
          <div className="tech-label">Git</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiMongodb />
          <div className="tech-label">MongoDB</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPostgresql />
          <div className="tech-label">SQL</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiJava />
          <div className="tech-label">Java</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <CgCPlusPlus />
          <div className="tech-label">C++</div>
        </Col>
        {/* Add more icons and labels as needed */}
      </Row>
    </>
  );
}

export default Techstack;
