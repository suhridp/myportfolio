import React, { useMemo, useState } from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import projects from "../../data/projects";

const FILTERS = ["All", "Research", "Hackathon", "Product"];

function Projects() {
  const [filter, setFilter] = useState("All");

  const counts = useMemo(() => {
    const c = { All: projects.length };
    projects.forEach((p) => (c[p.category] = (c[p.category] || 0) + 1));
    return c;
  }, []);

  const visible = projects.filter((p) => filter === "All" || p.category === filter);
  const featured = filter === "All" ? visible.filter((p) => p.featured) : [];
  const rest = filter === "All" ? visible.filter((p) => !p.featured) : visible;

  return (
    <section className="project-section page-section">
      <Container>
        <header className="page-head">
          <h1 className="page-title">Projects</h1>
          <p className="page-lede">
            Research from internships at NJIT and IIT Guwahati, hackathon builds, and products
            I've designed. Open any card for my role and what came out of it.
          </p>
        </header>

        <div className="pj-filters" role="group" aria-label="Filter projects by type">
          {FILTERS.filter((f) => counts[f]).map((f) => (
            <button
              key={f}
              type="button"
              className={`chip ${filter === f ? "is-active" : ""}`}
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
            >
              {f}
              <span className="chip-count">{counts[f]}</span>
            </button>
          ))}
        </div>

        {featured.length > 0 && (
          <div className="pj-featured">
            {featured.map((p) => (
              <ProjectCard key={p.id} project={p} variant="featured" />
            ))}
          </div>
        )}

        <div className="pj-grid">
          {rest.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Projects;
