"use client";

// Subtle viewport-entrance reveal — fades and lifts a section in once, the
// first time it crosses the viewport. Respects prefers-reduced-motion by
// skipping the animation entirely (content just renders in place), and only
// ever fires once per element rather than re-animating on every scroll pass.

import { useEffect, useRef, useState } from "react";

export default function Reveal({ children, className = "", as: Tag = "div", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  // Reduced-motion preference is only knowable client-side (matchMedia isn't
  // available during server render), so it has to be read in an effect —
  // the resulting immediate setState is expected here, same as the
  // hash-read effect in StateRatingExplorer.jsx.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}
