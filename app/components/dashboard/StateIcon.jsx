import { useId } from "react";
import { STATE_ICON_PATHS, DEFAULT_STATE_ICON } from "./state-icon-paths";

// Same hand-inked wobble treatment as ../icons.jsx, but keyed by state id
// instead of a generic glyph name — one landmark/motif per state/UT card.
function seedFrom(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i += 1) hash = (hash * 31 + name.charCodeAt(i)) % 97;
  return hash;
}

export default function StateIcon({ stateId, className = "size-6" }) {
  const d = STATE_ICON_PATHS[stateId] || DEFAULT_STATE_ICON;
  const seed = seedFrom(stateId || "state");
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
