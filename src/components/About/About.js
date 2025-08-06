import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import Tilt from "react-parallax-tilt";
import laptopImg from "../../Assets/about.png";
import myImg from "../../Assets/mypic.JPG";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function About() {
  return (
    <div
      style={{ position: "relative", overflow: "hidden", minHeight: "100vh" }}
    >
      <Particle />
      <Container
        fluid
        className="about-section"
        style={{ paddingTop: "50px", paddingBottom: "50px" }}
      >
        <Container>
          {/* Intro */}
          <Row className="align-items-center mb-5">
            <Col md={8}>
              <h1 className="section-title" style={{ fontSize: "2.6em" }}>
                GET TO <span className="purple"> KNOW </span> ME
              </h1>
              <p className="home-about-body">
                I’m Suhrid Behari Paul, an aspiring developer and tech
                enthusiast currently pursuing a{" "}
                <b className="purple">B.Tech in Information Technology</b> at
                Heritage Institute of Technology.
                <br />
                <br />
                I’ve worked with{" "}
                <b className="purple">C, C++, JavaScript, Python, SQL</b> and
                love building innovative solutions.
                <br />
                <br />
                Interests include <b className="purple">
                  Web Development
                </b>, <b className="purple">LLMs</b>,{" "}
                <b className="purple">Network Security</b>, and{" "}
                <b className="purple">Cybersecurity</b>.
                <br />
                <br />
                I’ve interned at <b className="purple">IIT Guwahati</b> and{" "}
                <b className="purple">NJIT, USA</b> on topics like DoS detection
                and Agentic AI.
                <br />
                <br />I build with <b className="purple">Node.js</b>,{" "}
                <b className="purple">React.js</b>,{" "}
                <b className="purple">Next.js</b> and design using Figma &
                Canva.
              </p>
            </Col>
            <Col md={4} className="text-center">
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>

          {/* Social Links */}
          <Row className="mb-5">
            <Col md={12} className="text-center">
              <h1>CONNECT WITH ME</h1>
              <p>
                Let's <span className="purple">collaborate</span> or just say
                hi!
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "2rem",
                }}
              >
                <li>
                  <a
                    href="https://github.com/suhridp"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour"
                  >
                    <AiFillGithub size={28} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour"
                  >
                    <AiOutlineTwitter size={28} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/suhridpaul/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour"
                  >
                    <FaLinkedinIn size={28} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour"
                  >
                    <AiFillInstagram size={28} />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>

          {/* Who I Am + Hobbies */}
          <Row className="align-items-center mb-5">
            <Col md={7}>
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Know Who <strong className="purple">I AM</strong>
              </h1>
              <ul
                style={{
                  textAlign: "left",
                  paddingLeft: "1.2rem",
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                }}
              >
                <li>👨‍🍳 Cooking creative meals</li>
                <li>🎨 Painting and sketching</li>
                <li>🌍 Travelling to new places</li>
                <li>🍜 Exploring street food and cuisines</li>
              </ul>
            </Col>
            <Col md={5} className="text-center">
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Col>
          </Row>

          {/* Tech Stack */}
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset</strong>
          </h1>
          <Techstack />

          {/* Tools */}
          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I Use
          </h1>
          <Toolstack />
        </Container>
      </Container>
    </div>
  );
}

export default About;
