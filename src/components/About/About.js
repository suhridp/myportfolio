import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiGithub, FiLinkedin, FiMail, FiAward } from "react-icons/fi";
import portrait from "../../Assets/mypic2.JPG";
import profile from "../../data/profile";

export function ExperienceList({ items }) {
  return (
    <ol className="xp-list">
      {items.map((x) => (
        <li key={x.role + x.period} className={`xp-item ${x.current ? "is-current" : ""}`}>
          <div className="xp-when">{x.period}</div>
          <div className="xp-what">
            <h3>{x.role}</h3>
            <p className="xp-org">
              {x.org}
              {x.unit && <span>, {x.unit}</span>}
            </p>
            <ul>
              {x.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
            {x.certificate && (
              <a href={x.certificate} target="_blank" rel="noreferrer" className="pj-link">
                <FiAward aria-hidden="true" /> Certificate
              </a>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

export function SkillGroups({ groups }) {
  return (
    <dl className="skill-groups">
      {groups.map((g) => (
        <div key={g.group} className="skill-group">
          <dt>{g.group}</dt>
          <dd>
            <ul className="pj-stack">
              {g.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </dd>
        </div>
      ))}
    </dl>
  );
}

function About() {
  return (
    <section className="about-page page-section">
      <Container>
        <div className="about-intro">
          <div>
            <h1 className="page-title">About me</h1>
            <p className="about-summary">{profile.summary}</p>
            <div className="about-links">
              <a href={profile.links.github} target="_blank" rel="noreferrer" className="pj-link">
                <FiGithub aria-hidden="true" /> GitHub
              </a>
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="pj-link">
                <FiLinkedin aria-hidden="true" /> LinkedIn
              </a>
              <a href={`mailto:${profile.email}`} className="pj-link">
                <FiMail aria-hidden="true" /> {profile.email}
              </a>
            </div>
          </div>
          <img src={portrait} alt={profile.name} className="about-portrait" />
        </div>

        <div className="about-block">
          <h2 className="block-title">Experience</h2>
          <ExperienceList items={profile.experience} />
        </div>

        <div className="about-grid">
          <div className="about-block">
            <h2 className="block-title">Skills</h2>
            <SkillGroups groups={profile.skills} />
          </div>

          <div className="about-block">
            <h2 className="block-title">Education</h2>
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

            <h2 className="block-title block-title--spaced">Achievements & leadership</h2>
            <ul className="ach-list">
              {profile.achievements.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="about-block about-offline">
          <h2 className="block-title">Outside work</h2>
          <p>
            I cook a lot and take photos when I'm out. I keep both on a page of their own.
          </p>
          <Link to="/hobbies" className="btn-ghost">
            See my cooking and photos
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default About;
