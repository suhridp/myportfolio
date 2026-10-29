import React, { useState, useEffect, useRef } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import { FiSun, FiMoon, FiGithub } from "react-icons/fi";

const LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/project", label: "Projects" },
  { to: "/blog", label: "Blog" },
  { to: "/hobbies", label: "Hobbies" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
];

function useTheme() {
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute("data-bs-theme") || "dark"
  );
  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {}
  }, [theme]);
  return [theme, () => setTheme((t) => (t === "dark" ? "light" : "dark"))];
}

function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, toggleTheme] = useTheme();

  const collapseRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      expand="lg"
      className={`site-nav ${scrolled || expanded ? "is-scrolled" : ""}`}
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="brand-text" onClick={closeMenu}>
          Sbp<span className="brand-dot">.</span>
        </Navbar.Brand>

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
          <Nav className="ms-auto align-items-lg-center site-nav-links">
            {LINKS.map((l) => (
              <Nav.Link key={l.to} as={NavLink} to={l.to} end={l.end} onClick={closeMenu}>
                {l.label}
              </Nav.Link>
            ))}
            <div className="site-nav-actions">
              <a
                href="https://github.com/suhridp"
                target="_blank"
                rel="noreferrer"
                className="icon-btn"
                aria-label="GitHub profile"
              >
                <FiGithub />
              </a>
              <button
                type="button"
                className="icon-btn"
                onClick={toggleTheme}
                aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
              >
                {theme === "dark" ? <FiSun /> : <FiMoon />}
              </button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
