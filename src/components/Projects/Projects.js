import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import thriftshop from "../../Assets/Projects/thriftshop.jpg";
import editor from "../../Assets/Projects/codeEditor.png";
import queryagentic from "../../Assets/Projects/queryagentic.jpg";
import dosattack from "../../Assets/Projects/dosattack.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section page-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Featured <strong className="purple">Work</strong>
        </h1>

        <p className="project-subtext">
          A showcase of research, hackathons, and innovative concepts I've
          contributed to.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={queryagentic}
              isBlog={false}
              title="Agentic AI Query Planner"
              description="Built at NJIT (USA) during a research internship. Developed a framework for efficient personalized top-k set queries using LLMs. Reduced computational cost and enhanced user-defined planning with probabilistic models."
              ghLink="https://github.com/suhridp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dosattack}
              isBlog={false}
              title="DoS Attack Detection"
              description="Internship project at IIT Guwahati. Designed and tested security protocols to detect and mitigate Denial-of-Service attacks. Co-authored a research paper on modern cybersecurity frameworks."
              ghLink="https://github.com/suhridp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Diversion 2024 – EduMate"
              description="Built a web app to enhance educational workflows within institutes, focusing on student-faculty collaboration and efficient resource management."
              ghLink="https://github.com/suhridp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="SIH 2024 – GuardianEye"
              description="Developed a Flutter-based mobile app aimed at ensuring women’s safety through real-time alerts, emergency contacts, and geolocation tracking."
              ghLink="https://github.com/suhridp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="SIH 2023 – Artisan"
              description="Created a React-based web app for Kashmiri artisans to showcase and sell their handcrafted products online with improved customer reach and visibility."
              ghLink="https://github.com/suhridp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={thriftshop}
              isBlog={false}
              title="2nd Stitch – Hult Prize Finalist"
              description="Finalist project for Hult Prize On Campus 2024. Pitched a sustainable thrifted fashion platform to promote circular fashion economy. Focused on digital thrift store UI/UX, and environmental impact."
              ghLink="https://github.com/suhridp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Portfolio & Blogs"
              description="Built using React, Next.js, and Tailwind CSS. Dynamic blog system using markdown and real-time data display. Designed with responsive dark mode, clean layout, and fast loading experience."
              ghLink="https://github.com/suhridp"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
