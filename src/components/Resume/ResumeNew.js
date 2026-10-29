import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { FiDownload, FiExternalLink, FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import profile from "../../data/profile";
import projects from "../../data/projects";
import { ExperienceList, SkillGroups } from "../About/About";

function ResumeNew() {
  const resumeProjects = projects.filter((p) => p.category === "Independent");
  // Phones rarely display PDFs inline, so they start on the page version.
  const [view, setView] = useState(() =>
    typeof window !== "undefined" && window.innerWidth < 768 ? "web" : "pdf"
  );

  return (
    <section className="resume-page page-section">
      <Container>
        <div className="resume-toolbar">
          <h1 className="page-title">Resume</h1>
          <div className="resume-actions">
            <a href={profile.cv} download className="btn-solid">
              <FiDownload aria-hidden="true" style={{ marginRight: "0.5rem" }} />
              Download PDF
            </a>
            <a href={profile.cv} target="_blank" rel="noreferrer" className="btn-ghost">
              <FiExternalLink aria-hidden="true" style={{ marginRight: "0.5rem" }} />
              Open in new tab
            </a>
          </div>
        </div>

        <div className="hb-tabs" role="tablist" aria-label="Resume format">
          <button
            role="tab"
            aria-selected={view === "pdf"}
            className={`hb-tab ${view === "pdf" ? "is-active" : ""}`}
            onClick={() => setView("pdf")}
          >
            PDF
          </button>
          <button
            role="tab"
            aria-selected={view === "web"}
            className={`hb-tab ${view === "web" ? "is-active" : ""}`}
            onClick={() => setView("web")}
          >
            Page version
          </button>
        </div>

        {view === "pdf" && (
          <div className="resume-pdf">
            <object data={`${profile.cv}#view=FitH`} type="application/pdf" aria-label="Resume PDF">
              <div className="resume-pdf-fallback">
                <p>Your browser can't show the PDF here.</p>
                <a href={profile.cv} target="_blank" rel="noreferrer" className="btn-solid">
                  Open the PDF
                </a>
              </div>
            </object>
          </div>
        )}

        {view === "web" && (
        <article className="resume-sheet">
          <header className="rs-head">
            <h2 className="rs-name">{profile.name}</h2>
            <ul className="rs-contact">
              <li>
                <FiMapPin aria-hidden="true" /> {profile.location}
              </li>
              <li>
                <FiPhone aria-hidden="true" />{" "}
                <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
              </li>
              <li>
                <FiMail aria-hidden="true" /> <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <FiLinkedin aria-hidden="true" />{" "}
                <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <FiGithub aria-hidden="true" />{" "}
                <a href={profile.links.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </li>
            </ul>
          </header>

          <section className="rs-section">
            <h3 className="rs-title">Summary</h3>
            <p>{profile.summary}</p>
          </section>

          <section className="rs-section">
            <h3 className="rs-title">Experience</h3>
            <ExperienceList items={profile.experience} />
          </section>

          <section className="rs-section">
            <h3 className="rs-title">Projects</h3>
            <ol className="xp-list">
              {resumeProjects.map((p) => (
                <li key={p.id} className="xp-item">
                  <div className="xp-when">{p.status || p.period}</div>
                  <div className="xp-what">
                    <h3>{p.title}</h3>
                    <p className="xp-org">{p.stack.join(", ")}</p>
                    <ul>
                      {p.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="rs-section">
            <h3 className="rs-title">Technical skills</h3>
            <SkillGroups groups={profile.skills} />
          </section>

          <section className="rs-section">
            <h3 className="rs-title">Education</h3>
            {profile.education.map((e) => (
              <div key={e.school} className="edu-item">
                <h3>{e.school}</h3>
                <p>{e.degree}</p>
                <p className="edu-meta">
                  {e.period}
                  <span className="edu-grade">{e.grade}</span>
                </p>
              </div>
            ))}
          </section>

          <section className="rs-section">
            <h3 className="rs-title">Achievements & leadership</h3>
            <ul className="ach-list">
              {profile.achievements.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </section>
        </article>
        )}
      </Container>
    </section>
  );
}

export default ResumeNew;
