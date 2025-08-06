// src/components/StarBackground.jsx
import { useEffect, useState } from "react";

export default function StarBackground() {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    const genStars = () => {
      const n = Math.floor((window.innerWidth * window.innerHeight) / 10000);
      const arr = Array.from({ length: n }).map((_, i) => ({
        id: i,
        size: Math.random() * 2 + 1, // 1–3px
        x: Math.random() * 100, // %
        y: Math.random() * 100, // %
        opacity: Math.random() * 0.5 + 0.5,
        dur: Math.random() * 4 + 4, // 4–8s slower, subtle
      }));
      setStars(arr);
    };

    const genMeteors = () => {
      const COUNT = 4;
      const arr = Array.from({ length: COUNT }).map((_, i) => ({
        id: i,
        length: 140 + Math.random() * 120, // px, overall streak length
        thickness: 2 + Math.random() * 2, // px
        x: Math.random() * 20, // start further left
        y: Math.random() * 25, // start near top
        delay: Math.random() * 12, // seconds
        dur: 12 + Math.random() * 8, // 12–20s (slower)
      }));
      setMeteors(arr);
    };

    genStars();
    genMeteors();

    const onResize = () => genStars();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="star-bg">
      {/* Stars */}
      {stars.map((s) => (
        <div
          key={s.id}
          className="star animate-pulse-subtle"
          style={{
            width: `${s.size}px`,
            height: `${s.size}px`,
            left: `${s.x}%`,
            top: `${s.y}%`,
            opacity: s.opacity,
            animationDuration: `${s.dur}s`,
          }}
        />
      ))}

      {/* Meteors */}
      {meteors.map((m) => (
        <div
          key={m.id}
          className="meteor animate-meteor"
          style={{
            width: `${m.length}px`,
            height: `${m.thickness}px`,
            left: `${m.x}%`,
            top: `${m.y}%`,
            animationDelay: `${m.delay}s`, // IMPORTANT: include 's'
            animationDuration: `${m.dur}s`, // slower travel
          }}
        />
      ))}
    </div>
  );
}
