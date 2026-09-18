import { PILLARS } from "../../lib/rating";

export default function PillarBreakdown({ pillars }) {
  return (
    <div className="space-y-4">
      {PILLARS.map((pillar) => {
        const value = pillars[pillar.key] ?? 0;
        const pct = Math.round((value / pillar.max) * 100);
        return (
          <div key={pillar.key}>
            <div className="flex items-baseline justify-between text-sm">
              <span className="font-medium text-ink">{pillar.label}</span>
              <span className="font-mono tabular-nums text-ink-soft">
                {value}/{pillar.max}
              </span>
            </div>
            <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-paper-deep">
              <div
                className="h-full rounded-full bg-banyan"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
