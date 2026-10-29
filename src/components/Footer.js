import React from "react";
import { Container } from "react-bootstrap";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import profile from "../data/profile";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <Container className="site-footer-inner">
        <p>
          © {year} {profile.name}
        </p>
        <ul className="site-footer-links">
          <li>
            <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
          </li>
          <li>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
          </li>
          <li>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <FiMail />
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
}

export default Footer;
