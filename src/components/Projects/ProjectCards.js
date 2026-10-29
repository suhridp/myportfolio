import React, { useState } from "react";
import { BsGithub, BsBoxArrowUpRight, BsAward, BsFileText } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";

const LINK_META = {
  github: { label: "Code", Icon: BsGithub },
  demo: { label: "Live site", Icon: BsBoxArrowUpRight },
  certificate: { label: "Certificate", Icon: BsAward },
  paper: { label: "Paper", Icon: BsFileText },
};

function ProjectLinks({ links = {} }) {
  const entries = Object.entries(links).filter(([, href]) => href);
  if (!entries.length) return null;
  return (
    <div className="pj-links">
      {entries.map(([kind, href]) => {
        const meta = LINK_META[kind] || { label: kind, Icon: BsBoxArrowUpRight };
        return (
          <a key={kind} href={href} target="_blank" rel="noreferrer" className="pj-link">
            <meta.Icon aria-hidden="true" />
            {meta.label}
          </a>
        );
      })}
    </div>
  );
}

function ProjectCard({ project, variant = "grid" }) {
  const [open, setOpen] = useState(variant === "featured");
  const { title, category, org, period, role, summary, highlights = [], stack = [], image, links } =
    project;
  const detailsId = `${project.id}-details`;

  return (
    <article className={`pj-card pj-card--${variant}`} data-category={category}>
      {image && (
        <div className="pj-media">
          <img src={image} alt="" loading="lazy" />
        </div>
      )}

      <div className="pj-body">
        <p className="pj-meta">
          <span className={`pj-cat pj-cat--${category.toLowerCase()}`}>{category}</span>
          <span className="pj-org">{org}</span>
        </p>
        <h3 className="pj-title">{title}</h3>
        <p className="pj-summary">{summary}</p>

        {variant !== "featured" && highlights.length > 0 && (
          <button
            type="button"
            className="pj-toggle"
            aria-expanded={open}
            aria-controls={detailsId}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? "Hide details" : "Show details"}
            <FiChevronDown className={open ? "is-open" : ""} aria-hidden="true" />
          </button>
        )}

        <div id={detailsId} className={`pj-details ${open ? "is-open" : ""}`}>
          <div className="pj-details-inner">
            <dl className="pj-facts">
              {role && (
                <div>
                  <dt>Role</dt>
                  <dd>{role}</dd>
                </div>
              )}
              {period && (
                <div>
                  <dt>When</dt>
                  <dd>{period}</dd>
                </div>
              )}
            </dl>
            {highlights.length > 0 && (
              <ul className="pj-highlights">
                {highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {stack.length > 0 && (
          <ul className="pj-stack" aria-label="Built with">
            {stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        )}

        <ProjectLinks links={links} />
      </div>
    </article>
  );
}

export default ProjectCard;
