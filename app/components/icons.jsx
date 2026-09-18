import { useId } from "react";

const paths = {
  leaf: "M20 4C10 4 4 10 4 18v2h2c8 0 14-6 14-16zM6 20c3-6 7-9 12-12",
  droplet: "M12 3s6 7 6 11.5a6 6 0 1 1-12 0C6 10 12 3 12 3Z",
  wave: "M3 15c1.5-2 3.5-2 5 0s3.5 2 5 0 3.5-2 5 0 3.5-2 5 0M3 19c1.5-2 3.5-2 5 0s3.5 2 5 0 3.5-2 5 0 3.5-2 5 0",
  bird: "M3 12c2-3 5-4 7-2 1-3 4-5 8-4-1 1-2 2-2 3 3 0 4 2 4 3-2 0-3 0-4 1-1 4-6 6-10 5 1-1 2-2 2-3-2 0-4-1-5-3Z",
  paw: "M7 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9.5 8a1.8 1.8 0 1 0 0-3.6A1.8 1.8 0 0 0 9.5 8Zm5 0a1.8 1.8 0 1 0 0-3.6A1.8 1.8 0 0 0 14.5 8ZM12 21c-3 0-5-1.5-5-3.5S9 15 12 15s5 1 5 2.5S15 21 12 21Z",
  book: "M4 5.5C4 4.7 4.7 4 5.5 4H12v16H5.5A1.5 1.5 0 0 1 4 18.5v-13ZM20 5.5c0-.8-.7-1.5-1.5-1.5H12v16h6.5a1.5 1.5 0 0 0 1.5-1.5v-13Z",
  graduate: "M2 9l10-5 10 5-10 5-10-5Zm5 3v5c0 1.7 2.2 3 5 3s5-1.3 5-3v-5M20 9v6",
  lightbulb: "M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.5 1 .5 1.6h6c0-.6 0-1.2.5-1.6A6 6 0 0 0 12 3Z",
  users: "M17 20v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm10 9v-1a3.5 3.5 0 0 0-2.6-3.4M15.5 4.1A3.5 3.5 0 0 1 17 11",
  heart: "M12 20s-7-4.4-9.5-9C.9 7.7 2.3 4 6 4c2 0 3.3 1.1 4 2.2C10.7 5.1 12 4 14 4c3.7 0 5.1 3.7 3.5 7-2.5 4.6-9.5 9-9.5 9Z",
  handshake: "M3 11l4-4 4 3 2-2 4 4-2 2M7 10l6 6 3-3M10 7l3 3",
  shield: "M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z",
  scale: "M12 3v18M5 8l-3 6a3.5 3.5 0 0 0 7 0l-3-6ZM19 8l-3 6a3.5 3.5 0 0 0 7 0l-3-6ZM5 8h14M8 21h8",
  gavel: "M14 5l5 5M4 15l5-5 5 5-5 5-5-5Zm9-5l3-3 3 3-3 3-3-3ZM2 22h8",
  building: "M4 21V9l6-4v16M14 21V9l6-4v16M2 21h20M9 12h1M9 16h1M17 12h1M17 16h1",
  laptop: "M4 5h16v10H4V5Zm-2 14h20l-2-3H4l-2 3Z",
  megaphone: "M3 10v4h3l6 4V6l-6 4H3Zm12-3a4 4 0 0 1 0 8",
  chart: "M4 20V10M10 20V4M16 20v-7M22 20H2",
  wallet: "M3 7a2 2 0 0 1 2-2h13a1 1 0 0 1 1 1v2M3 7v10a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-4a2 2 0 1 0 0 4h5",
  flag: "M5 3v18M5 4h13l-3 4 3 4H5",
  checkCircle: "M9 12l2 2 4-4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  globe: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-18c2.5 2.5 4 5.7 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.7-4-9s1.5-6.5 4-9ZM3 12h18",
  sprout: "M12 22v-9M12 13c0-3-2-5-6-5 0 4 2 6 6 5Zm0 0c0-4 2-6 6-6 0 4-2 6-6 6Z",
  compass: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm3.5-12.5-2 5-5 2 2-5 5-2Z",
  sparkles: "M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3ZM5 15l.7 2.3L8 18l-2.3.7L5 21l-.7-2.3L2 18l2.3-.7L5 15Zm14 0 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15Z",
  mail: "M3 6h18v12H3V6Zm0 0 9 7 9-7",
  phone: "M6 3h3l1.5 4.5L8 9c1 3 3 5 6 6l1.5-2.5L20 15v3c0 1.1-.9 2-2 2C9.6 20 4 14.4 4 6c0-1.1.9-2 2-2Z",
  target: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-5a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-1.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
  network: "M12 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM5 18a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm14 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM12 9v5m-5.5 3L11 14m1 0 4.5 3",
  water: "M4 12a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v0a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v0ZM4 12V9a4 4 0 0 1 4-4M20 12v3a4 4 0 0 1-4 4",
  seedling: "M12 21v-6M12 15C7 15 5 12 5 8c5 0 7 3 7 7Zm0 0c0-5 3-8 7-9 0 5-2 8-7 9Z",
  search: "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm9 2-4.7-4.7",
  close: "M6 6l12 12M18 6 6 18",
};

// Hand-inked feel instead of a vector-perfect icon-library look: each glyph
// gets a slightly different stroke weight and a light paper-grain wobble
// (feTurbulence displacement), seeded from its own name so the same icon
// always wobbles the same way rather than jittering between renders.
function seedFrom(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i += 1) hash = (hash * 31 + name.charCodeAt(i)) % 97;
  return hash;
}

export default function Icon({ name, className = "size-6" }) {
  const d = paths[name] || paths.sparkles;
  const seed = seedFrom(name || "sparkles");
  const strokeWidth = 1.5 + (seed % 5) * 0.09;
  const filterId = useId();

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <filter id={filterId} x="-30%" y="-30%" width="160%" height="160%">
        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed={seed} result="grain" />
        <feDisplacementMap in="SourceGraphic" in2="grain" scale="0.9" />
      </filter>
      <path d={d} filter={`url(#${filterId})`} />
    </svg>
  );
}
