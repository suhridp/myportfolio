import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/mypic.JPG";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              GET TO <span className="purple"> KNOW </span> ME
            </h1>
            <p className="home-about-body">
              I’m Suhrid Behari Paul, an aspiring developer and tech enthusiast
              currently pursuing a{" "}
              <b className="purple">B.Tech in Information Technology</b> at
              Heritage Institute of Technology.
              <br />
              <br />
              I’ve worked with languages and tools like{" "}
              <i>
                <b className="purple">C, C++, JavaScript, Python, SQL</b>
              </i>{" "}
              and enjoy creating innovative tech solutions.
              <br />
              <br />
              My interests lie in{" "}
              <i>
                <b className="purple">Web Development</b>,{" "}
                <b className="purple">LLMs</b>, {" "}
                <b className="purple">Network Security</b>, and{" "}
                <b className="purple">Cybersecurity</b>.
              </i>
              <br />
              <br />
              I’ve interned at <b className="purple">IIT Guwahati</b> and the{" "}
              <b className="purple">New Jersey Institute of Technology, USA</b> on
              cutting-edge research topics such as DoS attack detection and
              intelligent query planning using Agentic AI.
              <br />
              <br />I build with <b className="purple">Node.js</b> and modern
              libraries like{" "}
              <i>
                <b className="purple">React.js</b> and{" "}
                <b className="purple">Next.js</b>
              </i>
              , and also enjoy designing UIs with tools like Figma and Canva.
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
            <h1>CONNECT WITH ME</h1>
            <p>
              Let's <span className="purple">collaborate</span> or just say hi!
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/suhridp"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/suhridpaul/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
