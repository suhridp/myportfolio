import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import portrait from "../../Assets/mypic.JPG";
import Type from "./Type";
import projects from "../../data/projects";
import hobbies from "../../data/hobbies";
import profile from "../../data/profile";

function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="home-section">
      <Container className="hero">
        <div className="hero-copy">
          <Link to="/about" className="now-badge">
            <span className="now-dot" aria-hidden="true" />
            <span>
              Now: <strong>{profile.currentRole.title}</strong>, {profile.currentRole.org}
            </span>
          </Link>
          <p className="hero-hello">
            Hi, I'm <span className="wave" role="img" aria-label="waving hand">👋🏻</span>
          </p>
          <h1 className="hero-name">
            Suhrid
            <br />
            Behari Paul
          </h1>
          <div className="hero-type">
            <Type />
          </div>
          <p className="hero-intro">{profile.intro}</p>
          <div className="hero-actions">
            <Link to="/project" className="btn-solid">
              See my projects
            </Link>
            <Link to="/contact" className="btn-ghost">
              Get in touch
            </Link>
          </div>
        </div>

        <figure className="hero-portrait">
          <img src={portrait} alt={profile.name} />
        </figure>
      </Container>

      <Container className="home-strip">
        <div className="strip-block">
          <h2>What I'm working on</h2>
          <ul className="strip-list">
            {featured.map((p) => (
              <li key={p.id}>
                <Link to="/project">
                  <strong>{p.title}</strong>
                  <span>{p.org}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="strip-block">
          <h2>Away from the screen</h2>
          <ul className="strip-list">
            {hobbies.filter((h) => h.entries.length > 0).map((h) => (
              <li key={h.id}>
                <Link to={`/hobbies?tab=${h.id}`}>
                  <strong>{h.name}</strong>
                  <span>
                    {h.entries.length} {h.layout === "gallery" ? "photos" : "dishes"}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default Home;
