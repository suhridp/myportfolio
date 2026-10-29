import React, { useEffect, useState, useCallback } from "react";
import { Container } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { FiX, FiChevronLeft, FiChevronRight, FiCamera, FiMapPin } from "react-icons/fi";
import { GiCookingPot } from "react-icons/gi";
import hobbies from "../../data/hobbies";

const ICONS = { cooking: GiCookingPot, photography: FiCamera };

function formatDate(iso) {
  if (!iso) return "";
  const d = new Date(iso + "T00:00:00");
  if (isNaN(d)) return iso;
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

function EmptyFrame({ hobbyId }) {
  const Icon = ICONS[hobbyId] || FiCamera;
  return (
    <div className="hb-empty" aria-hidden="true">
      <Icon />
      <span>Photo coming soon</span>
    </div>
  );
}

function Journal({ hobby }) {
  return (
    <ol className="hb-journal">
      {hobby.entries.map((e) => (
        <li key={e.title + e.date} className="hb-entry">
          <div className="hb-entry-media">
            {e.image ? <img src={e.image} alt={e.title} loading="lazy" /> : <EmptyFrame hobbyId={hobby.id} />}
          </div>
          <div className="hb-entry-body">
            <time dateTime={e.date}>{formatDate(e.date)}</time>
            <h3>{e.title}</h3>
            {e.notes && <p>{e.notes}</p>}
            {e.tags?.length > 0 && (
              <ul className="pj-stack">
                {e.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            )}
            {e.link && (
              <a href={e.link} target="_blank" rel="noreferrer" className="pj-link">
                Read the recipe
              </a>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

function Gallery({ hobby }) {
  const [active, setActive] = useState(null);
  const items = hobby.entries;

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir) => setActive((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    [items.length]
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, step]);

  const current = active !== null ? items[active] : null;

  return (
    <>
      <ul className="hb-gallery">
        {items.map((e, i) => (
          <li key={e.title + e.date}>
            <button type="button" className="hb-shot" onClick={() => setActive(i)}>
              {e.image ? <img src={e.image} alt={e.title} loading="lazy" /> : <EmptyFrame hobbyId={hobby.id} />}
              <span className="hb-shot-caption">
                <strong>{e.title}</strong>
                <span>{[e.location, formatDate(e.date)].filter(Boolean).join(", ")}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {current && (
        <div className="hb-lightbox" role="dialog" aria-modal="true" aria-label={current.title} onClick={close}>
          <figure onClick={(e) => e.stopPropagation()}>
            {current.image ? <img src={current.image} alt={current.title} /> : <EmptyFrame hobbyId={hobby.id} />}
            <figcaption>
              <strong>{current.title}</strong>
              <span className="hb-exif">
                {current.location && (
                  <span>
                    <FiMapPin aria-hidden="true" /> {current.location}
                  </span>
                )}
                {current.camera && (
                  <span>
                    <FiCamera aria-hidden="true" /> {current.camera}
                  </span>
                )}
                {current.date && <time dateTime={current.date}>{formatDate(current.date)}</time>}
              </span>
              {current.notes && <p>{current.notes}</p>}
            </figcaption>
          </figure>
          <button type="button" className="hb-lb-btn hb-lb-close" onClick={close} aria-label="Close">
            <FiX />
          </button>
          {items.length > 1 && (
            <>
              <button type="button" className="hb-lb-btn hb-lb-prev" aria-label="Previous photo"
                onClick={(e) => { e.stopPropagation(); step(-1); }}>
                <FiChevronLeft />
              </button>
              <button type="button" className="hb-lb-btn hb-lb-next" aria-label="Next photo"
                onClick={(e) => { e.stopPropagation(); step(1); }}>
                <FiChevronRight />
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}

function Hobbies() {
  const [params, setParams] = useSearchParams();
  const requested = params.get("tab");
  const activeId = hobbies.some((h) => h.id === requested) ? requested : hobbies[0].id;
  const hobby = hobbies.find((h) => h.id === activeId);

  return (
    <section className="hobby-section page-section">
      <Container>
        <header className="page-head">
          <h1 className="page-title">Off the keyboard</h1>
          <p className="page-lede">
            What I do when I'm not writing code. I add to this page as I go, so it's always a
            little unfinished.
          </p>
        </header>

        <div className="hb-tabs" role="tablist" aria-label="Hobbies">
          {hobbies.map((h) => {
            const Icon = ICONS[h.id] || FiCamera;
            const selected = h.id === activeId;
            return (
              <button
                key={h.id}
                role="tab"
                id={`tab-${h.id}`}
                aria-selected={selected}
                aria-controls={`panel-${h.id}`}
                className={`hb-tab ${selected ? "is-active" : ""}`}
                onClick={() => setParams({ tab: h.id }, { replace: true })}
              >
                <Icon aria-hidden="true" />
                {h.name}
                <span className="chip-count">{h.entries.length}</span>
              </button>
            );
          })}
        </div>

        <div role="tabpanel" id={`panel-${hobby.id}`} aria-labelledby={`tab-${hobby.id}`} className="hb-panel">
          <p className="hb-blurb">{hobby.blurb}</p>
          {hobby.layout === "gallery" ? <Gallery hobby={hobby} /> : <Journal hobby={hobby} />}
        </div>
      </Container>
    </section>
  );
}

export default Hobbies;
