"use client";

import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { SCALE } from "@/lib/csr/state-spend";

const CsrSpendMap = dynamic(() => import("./CsrSpendMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full min-h-[420px] items-center justify-center bg-paper-deep text-sm text-ink-soft">
      Loading map…
    </div>
  ),
});

const CsrDistrictMap = dynamic(() => import("./CsrDistrictMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[320px] animate-pulse items-center justify-center bg-paper-deep text-sm text-ink-soft">
      Loading district map…
    </div>
  ),
});

const cr = (n) =>
  `₹${n.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} Cr`;

export default function CsrSpendMapSection({ data, financialYear, projects = [] }) {
  const { states, panIndia, stateTotal, max } = data;
  const [pinned, setPinned] = useState(null);
  const [hovered, setHovered] = useState(null);

  const byKey = useMemo(() => new Map(states.map((s) => [s.key, s])), [states]);
  const projectsByKey = useMemo(() => new Map(projects.map((p) => [p.key, p])), [projects]);
  const active = byKey.get(hovered ?? pinned) ?? states[0];
  const activeProjects = projectsByKey.get(active.key);
  const pinnedProjects = pinned ? projectsByKey.get(pinned) : null;
  const share = stateTotal ? (active.total / stateTotal) * 100 : 0;
  const topSectorMax = active.sectors[0]?.amount || 1;
  const topDistrictMax = activeProjects?.topDistricts[0]?.amount || 1;

  return (
    <div className="border border-clay bg-paper">
      <div className="border-b border-clay bg-paper-deep px-4 py-3">
        <h2 className="font-display text-lg font-semibold text-ink">CSR spend by state</h2>
        <p className="mt-0.5 text-xs text-ink-soft">
          {financialYear} (current) · {cr(stateTotal)} across {states.length} states &amp; UTs
          {panIndia > 0 && ` · plus ${cr(panIndia)} pooled Pan-India funds (not mapped)`}
        </p>
      </div>

      <div className="grid lg:grid-cols-[3fr_2fr]">
        <div className="relative min-h-[420px] border-b border-clay lg:border-b-0 lg:border-r">
          <CsrSpendMap
            spendByKey={byKey}
            max={max}
            selectedKey={pinned}
            onSelect={setPinned}
            onHover={setHovered}
          />
          <div className="pointer-events-none absolute bottom-3 left-3 z-[500] bg-paper/90 p-2 text-[11px] text-ink-soft">
            <div className="flex items-center gap-1">
              <span>Low</span>
              {SCALE.map((c) => (
                <span key={c} className="h-2.5 w-5" style={{ background: c }} />
              ))}
              <span>High</span>
            </div>
          </div>
        </div>

        <div className="p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-ink-soft">
            Rank #{active.rank} of {states.length}
          </p>
          <h3 className="mt-1 font-display text-2xl font-semibold text-ink">{active.name}</h3>
          <p className="mt-2 font-mono text-3xl font-bold text-banyan">{cr(active.total)}</p>
          <p className="mt-1 text-xs text-ink-soft">{share.toFixed(1)}% of all state-mapped CSR spend</p>

          <div className="mt-5 space-y-3">
            {active.sectors.map((s) => (
              <div key={s.sector}>
                <div className="flex justify-between gap-3 text-xs">
                  <span className="text-ink">{s.sector.replace(/\s*\(.*\)$/, "")}</span>
                  <span className="shrink-0 font-mono text-ink-soft">{cr(s.amount)}</span>
                </div>
                <div className="mt-1 h-2 bg-paper-deep">
                  <div className="h-full bg-marigold" style={{ width: `${(s.amount / topSectorMax) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
          {activeProjects && (
            <div className="mt-5 border-t border-clay pt-4">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-ink-soft">
                Past project ledger · {activeProjects.yearRange}
              </p>
              <p className="mt-1.5 text-xs text-ink-soft">
                {activeProjects.projectCount.toLocaleString("en-IN")} projects ·{" "}
                {activeProjects.companyCount.toLocaleString("en-IN")} companies ·{" "}
                {activeProjects.districtCount.toLocaleString("en-IN")} districts
              </p>
              <p className="mt-1 text-[11px] text-ink-soft/70">
                Historical records, {activeProjects.yearRange}. The spend total above is {financialYear}.
              </p>
              {activeProjects.topDistricts.length > 0 && (
                <div className="mt-3 space-y-2">
                  {activeProjects.topDistricts.map((d) => (
                    <div key={d.district}>
                      <div className="flex justify-between gap-3 text-xs">
                        <span className="text-ink">{d.district}</span>
                        <span className="shrink-0 font-mono text-ink-soft">{cr(d.amount)}</span>
                      </div>
                      <div className="mt-1 h-1.5 bg-paper-deep">
                        <div
                          className="h-full bg-banyan"
                          style={{ width: `${(d.amount / topDistrictMax) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          <p className="mt-5 text-[11px] text-ink-soft/70">Hover a state to preview, click to pin.</p>
        </div>
      </div>

      {pinned && (
        <div className="border-t border-clay p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-ink-soft">
            {pinnedProjects?.name ?? byKey.get(pinned)?.name ?? pinned} · districts
          </p>
          <div className="mt-4">
            {pinnedProjects && pinnedProjects.districts.length > 0 ? (
              <CsrDistrictMap
                stateId={pinnedProjects.stateId}
                stateName={pinnedProjects.name}
                districts={pinnedProjects.districts}
              />
            ) : (
              <p className="text-sm text-ink-soft">
                No district-level project data is recorded for this state in the current dataset.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
