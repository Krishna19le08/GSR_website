// Inline-SVG line chart — no charting dependency needed for a single trend
// line across a handful of years. Renders on the server; no interactivity.

export default function ScoreTrendChart({ years, values, height = 160 }) {
  const width = 560;
  const padding = { top: 16, right: 16, bottom: 28, left: 32 };
  const innerW = width - padding.left - padding.right;
  const innerH = height - padding.top - padding.bottom;

  const min = Math.min(...values, 0);
  const max = Math.max(...values, 100);
  const range = max - min || 1;

  const points = values.map((v, i) => {
    const x = padding.left + (i / (values.length - 1)) * innerW;
    const y = padding.top + innerH - ((v - min) / range) * innerH;
    return { x, y, v };
  });

  const path = points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ");
  const areaPath = `${path} L${points[points.length - 1].x},${padding.top + innerH} L${points[0].x},${padding.top + innerH} Z`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="h-auto w-full"
      role="img"
      aria-label={`Score trend from ${years[0]} to ${years[years.length - 1]}`}
    >
      <path d={areaPath} fill="var(--color-banyan)" opacity="0.08" />
      <path d={path} fill="none" stroke="var(--color-banyan)" strokeWidth="2.5" />
      {points.map((p, i) => (
        <g key={years[i]}>
          <circle cx={p.x} cy={p.y} r="3.5" fill="var(--color-banyan)" />
          <text
            x={p.x}
            y={height - 8}
            textAnchor="middle"
            className="fill-ink-soft font-mono"
            fontSize="11"
          >
            {years[i]}
          </text>
          <text
            x={p.x}
            y={p.y - 10}
            textAnchor="middle"
            className="fill-ink font-mono"
            fontSize="11"
            fontWeight="600"
          >
            {p.v}
          </text>
        </g>
      ))}
    </svg>
  );
}
