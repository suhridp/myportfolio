import React, { useState, useEffect, useRef } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const [navColour, setNavColour] = useState(false);

  const collapseRef = useRef(null);
  const toggleRef = useRef(null);

  // Scroll color effect
  useEffect(() => {
    const onScroll = () => setNavColour(window.scrollY >= 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!expanded) return;
      if (collapseRef.current?.contains(e.target)) return;
      if (toggleRef.current?.contains(e.target)) return;
      setExpanded(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [expanded]);

  const closeMenu = () => setExpanded(false);

  return (
    <Navbar
      expanded={expanded}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        {/* Classy Brand Text */}
        <Navbar.Brand
          as={Link}
          to="/"
          className="d-flex align-items-center brand-text"
        >
          Sbp.
        </Navbar.Brand>

        {/* Hamburger toggle */}
        <Navbar.Toggle
          ref={toggleRef}
          aria-label="Toggle navigation"
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded((prev) => !prev)}
          className="themed-toggler"
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav" ref={collapseRef}>
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={closeMenu}>
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/about" onClick={closeMenu}>
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/project" onClick={closeMenu}>
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/resume" onClick={closeMenu}>
                Resume
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/contact" onClick={closeMenu}>
                Contact
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="https://suhridblogs.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Blogs
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Button
                href="https://github.com/suhridp"
                target="_blank"
                className="fork-btn-inner"
              >
                GitHub
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
