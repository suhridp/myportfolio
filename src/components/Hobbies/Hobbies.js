import React, { useEffect, useState, useCallback } from "react";
import { Container } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { FiX, FiChevronLeft, FiChevronRight, FiCamera, FiMapPin, FiImage } from "react-icons/fi";
import { GiCookingPot } from "react-icons/gi";
import hobbies from "../../data/hobbies";

const ICONS = { cooking: GiCookingPot, photography: FiCamera };

function formatDate(iso, { day = true } = {}) {
  if (!iso) return "";
  const d = new Date(iso + "T00:00:00");
  if (isNaN(d)) return iso;
  return d.toLocaleDateString("en-IN", {
    ...(day ? { day: "numeric" } : {}),
    month: "short",
    year: "numeric",
  });
}

// An entry can have `images: [...]` or a single `image`.
const photosOf = (e) => (e.images && e.images.length ? e.images : e.image ? [e.image] : []);

// Uses the small "-sm" version when it exists, falling back to the full image.
function Thumb({ src, alt }) {
  const small = src.replace(/(\.[a-z]+)$/i, "-sm$1");
  const [current, setCurrent] = useState(small);
  return (
    <img
      src={current}
      alt={alt}
      loading="lazy"
      onError={() => current !== src && setCurrent(src)}
    />
  );
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

/* ---------- Lightbox: steps through a list of slides ---------- */
function Lightbox({ slides, index, onClose, onStep, hobbyId }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onStep(1);
      if (e.key === "ArrowLeft") onStep(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onStep]);

  const s = slides[index];
  return (
    <div className="hb-lightbox" role="dialog" aria-modal="true" aria-label={s.title} onClick={onClose}>
      <figure onClick={(e) => e.stopPropagation()}>
        {s.src ? <img src={s.src} alt={s.title} /> : <EmptyFrame hobbyId={hobbyId} />}
        <figcaption>
          <strong>{s.title}</strong>
          <span className="hb-exif">
            {s.location && (
              <span>
                <FiMapPin aria-hidden="true" /> {s.location}
              </span>
            )}
            {s.camera && (
              <span>
                <FiCamera aria-hidden="true" /> {s.camera}
              </span>
            )}
            {s.date && <time dateTime={s.date}>{formatDate(s.date)}</time>}
            {s.count > 1 && (
              <span>
                Photo {s.pos} of {s.count}
              </span>
            )}
          </span>
          {s.notes && <p>{s.notes}</p>}
        </figcaption>
      </figure>
      <button type="button" className="hb-lb-btn hb-lb-close" onClick={onClose} aria-label="Close">
        <FiX />
      </button>
      {slides.length > 1 && (
        <>
          <button type="button" className="hb-lb-btn hb-lb-prev" aria-label="Previous photo"
            onClick={(e) => { e.stopPropagation(); onStep(-1); }}>
            <FiChevronLeft />
          </button>
          <button type="button" className="hb-lb-btn hb-lb-next" aria-label="Next photo"
            onClick={(e) => { e.stopPropagation(); onStep(1); }}>
            <FiChevronRight />
          </button>
        </>
      )}
    </div>
  );
}

function useLightbox(length) {
  const [active, setActive] = useState(null);
  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir) => setActive((i) => (i === null ? i : (i + dir + length) % length)),
    [length]
  );
  return { active, open: setActive, close, step };
}

/* ---------- Dishes: photo cards; a card opens all photos of that dish ---------- */
function Dishes({ hobby }) {
  const [dish, setDish] = useState(null);
  const photos = dish ? photosOf(dish) : [];
  const lb = useLightbox(photos.length || 1);

  const slides = dish
    ? (photos.length ? photos : [""]).map((src, i) => ({
        src,
        title: dish.title,
        date: dish.date,
        notes: dish.notes,
        pos: i + 1,
        count: photos.length,
      }))
    : [];

  const openDish = (e) => {
    setDish(e);
    lb.open(0);
  };
  const close = () => {
    lb.close();
    setDish(null);
  };

  return (
    <>
      <ul className="hb-dishes">
        {hobby.entries.map((e) => {
          const p = photosOf(e);
          return (
            <li key={e.title}>
              <button type="button" className="hb-dish" onClick={() => openDish(e)}>
                <span className="hb-dish-media">
                  {p.length ? <Thumb src={p[0]} alt={e.title} /> : <EmptyFrame hobbyId={hobby.id} />}
                  {p.length > 1 && (
                    <span className="hb-dish-count">
                      <FiImage aria-hidden="true" /> {p.length}
                    </span>
                  )}
                </span>
                <span className="hb-dish-body">
                  <span className="hb-dish-top">
                    <strong>{e.title}</strong>
                    {e.date && <time dateTime={e.date}>{formatDate(e.date, { day: false })}</time>}
                  </span>
                  {e.notes && <span className="hb-dish-notes">{e.notes}</span>}
                  {e.tags?.length > 0 && (
                    <span className="hb-dish-tags">
                      {e.tags.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </span>
                  )}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
      {dish && lb.active !== null && (
        <Lightbox slides={slides} index={lb.active} onClose={close} onStep={lb.step} hobbyId={hobby.id} />
      )}
    </>
  );
}

/* ---------- Gallery: a grid of single photos ---------- */
function Gallery({ hobby }) {
  const items = hobby.entries;
  const lb = useLightbox(items.length);
  const slides = items.map((e) => ({ ...e, src: photosOf(e)[0] || "" }));

  return (
    <>
      <ul className="hb-gallery">
        {items.map((e, i) => {
          const src = photosOf(e)[0];
          return (
            <li key={e.title + e.date}>
              <button type="button" className="hb-shot" onClick={() => lb.open(i)}>
                {src ? <Thumb src={src} alt={e.title} /> : <EmptyFrame hobbyId={hobby.id} />}
                <span className="hb-shot-caption">
                  <strong>{e.title}</strong>
                  <span>{[e.location, formatDate(e.date)].filter(Boolean).join(", ")}</span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
      {lb.active !== null && (
        <Lightbox slides={slides} index={lb.active} onClose={lb.close} onStep={lb.step} hobbyId={hobby.id} />
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
          {hobby.layout === "gallery" ? <Gallery hobby={hobby} /> : <Dishes hobby={hobby} />}
        </div>
      </Container>
    </section>
  );
}

export default Hobbies;
