"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { compositeScore, getTier, pillarTotal, PILLAR_MAX_TOTAL, TIERS } from "../../lib/rating";
import { TREND_YEARS } from "../../data/states-data";
import PillarBreakdown from "./PillarBreakdown";
import ScoreTrendChart from "./ScoreTrendChart";

export default function StateRatingExplorer({ states }) {
  const scored = useMemo(
    () =>
      states
        .map((state) => ({ ...state, score: compositeScore(state) }))
        .sort((a, b) => b.score - a.score),
    [states],
  );

  const [selectedId, setSelectedId] = useState(scored[0]?.id ?? null);
  const [search, setSearch] = useState("");
  const [tierFilter, setTierFilter] = useState("all");

  // Deep-linking from the CSR Tracker table uses a URL hash (safe with static
  // export, unlike server-read searchParams, which isn't available at build
  // time). window.location isn't known until after hydration, so this has to
  // run in an effect — the resulting re-render is expected here.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && scored.some((s) => s.id === hash)) {
      setSelectedId(hash);
    }
  }, [scored]);
  /* eslint-enable react-hooks/set-state-in-effect */

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return scored.filter((state) => {
      const matchesSearch = !q || state.name.toLowerCase().includes(q);
      const matchesTier = tierFilter === "all" || getTier(state.score).id === tierFilter;
      return matchesSearch && matchesTier;
    });
  }, [scored, search, tierFilter]);

  const selected = scored.find((s) => s.id === selectedId) ?? filtered[0] ?? null;

  return (
    <div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
        {/* LIST */}
        <div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search states or UTs…"
              className="w-full border border-clay bg-paper px-4 py-2.5 text-sm text-ink placeholder:text-ink-soft/60 focus:border-banyan focus:outline-none"
            />
            <select
              value={tierFilter}
              onChange={(e) => setTierFilter(e.target.value)}
              className="border border-clay bg-paper px-4 py-2.5 text-sm text-ink focus:border-banyan focus:outline-none"
            >
              <option value="all">All scores</option>
              {TIERS.map((tier) => (
                <option key={tier.id} value={tier.id}>
                  Score {tier.min}+
                </option>
              ))}
            </select>
          </div>

          <ul className="gsr-scroll-thin mt-4 max-h-[560px] divide-y divide-clay overflow-y-auto border border-clay">
            {filtered.map((state, i) => (
              <li key={state.id}>
                <button
                  type="button"
                  onClick={() => setSelectedId(state.id)}
                  className={`flex w-full items-center justify-between gap-3 px-4 py-3 text-left transition-colors hover:bg-paper-deep ${
                    selected?.id === state.id ? "bg-paper-deep" : "bg-paper"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="w-5 text-xs font-semibold text-ink-soft/60">{i + 1}</span>
                    <span>
                      <span className="block text-sm font-medium text-ink">{state.name}</span>
                      <span className="block text-xs text-ink-soft/70">{state.type}</span>
                    </span>
                  </span>
                </button>
              </li>
            ))}
            {filtered.length === 0 && (
              <li className="px-4 py-10 text-center text-sm text-ink-soft">No states match those filters.</li>
            )}
          </ul>
        </div>

        {/* DETAIL */}
        {selected && (
          <div className="border border-clay bg-paper p-6 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft/70">
                  {selected.type} &middot; {selected.region}
                </p>
                <h3 className="mt-1 font-display text-2xl font-semibold text-ink">{selected.name}</h3>
              </div>
            </div>

            <Link
              href={`/csr-tracker/${selected.id}`}
              className="mt-4 inline-flex items-center text-sm font-semibold text-banyan underline decoration-clay decoration-2 underline-offset-4 transition-colors hover:text-marigold-deep hover:decoration-marigold"
            >
              View full fund grantee details →
            </Link>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <Stat label="TRP Score" value={`${selected.score}/100`} />
              <Stat label="Fund Utilization" value={`${selected.csrFundUtilizationPct}%`} />
              <Stat label="Income Growth" value={`${selected.annualIncomeGrowthPct}%`} />
              <Stat
                label="Pillar Total"
                value={`${pillarTotal(selected.pillars)}/${PILLAR_MAX_TOTAL}`}
              />
            </div>

            <div className="mt-8">
              <p className="text-sm font-semibold text-ink">Rating pillars</p>
              <div className="mt-4">
                <PillarBreakdown pillars={selected.pillars} />
              </div>
            </div>

            <div className="mt-8">
              <p className="text-sm font-semibold text-ink">
                Score trend, {TREND_YEARS[0]}–{TREND_YEARS[TREND_YEARS.length - 1]}
              </p>
              <div className="mt-4">
                <ScoreTrendChart years={TREND_YEARS} values={selected.scoreTrend} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="border border-clay/70 px-3 py-3">
      <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-soft/70">{label}</p>
      <p className="mt-1 font-mono text-lg font-semibold tabular-nums text-ink">{value}</p>
    </div>
  );
}
