"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import StateIcon from "./StateIcon";
import RatingBadge from "./RatingBadge";
import Icon from "../icons";
import { compositeScore, getTier, TIERS } from "../../lib/rating";

const REGIONS = ["North", "South", "East", "West", "Central", "Northeast"];

const QUICK_FILTERS = [
  { id: "all", label: "All states" },
  { id: "big-economies", label: "₹10 Lakh Cr+ economies" },
  { id: "top10-gsdp", label: "Top 10 by GSDP" },
  { id: "population", label: "By population" },
  { id: "rating-hi", label: "Hi → L rating" },
  { id: "rating-lo", label: "L → Hi rating" },
];

const lakhCr = (cr) => `₹${(cr / 100000).toLocaleString("en-IN", { maximumFractionDigits: 2 })} Lakh Cr`;

export default function StateCardGrid({ states, maxCompare = 4 }) {
  const scored = useMemo(
    () => states.map((s) => ({ ...s, score: compositeScore(s) })),
    [states],
  );

  const [search, setSearch] = useState("");
  const [regionFilter, setRegionFilter] = useState("all");
  const [tierFilter, setTierFilter] = useState("all");
  const [quickFilter, setQuickFilter] = useState("all");
  const [compareIds, setCompareIds] = useState([]);

  const rows = useMemo(() => {
    const q = search.trim().toLowerCase();
    let list = scored.filter((s) => {
      const matchesSearch = !q || s.name.toLowerCase().includes(q);
      const matchesRegion =
        regionFilter === "all" ||
        (regionFilter === "ut" ? s.type === "Union Territory" : s.region === regionFilter);
      const matchesTier = tierFilter === "all" || getTier(s.score).id === tierFilter;
      return matchesSearch && matchesRegion && matchesTier;
    });

    switch (quickFilter) {
      case "big-economies":
        list = list.filter((s) => s.gsdpCr >= 1_000_000).sort((a, b) => b.gsdpCr - a.gsdpCr);
        break;
      case "top10-gsdp":
        list = [...list].sort((a, b) => b.gsdpCr - a.gsdpCr).slice(0, 10);
        break;
      case "population":
        list = [...list].sort((a, b) => b.population - a.population);
        break;
      case "rating-lo":
        list = [...list].sort((a, b) => a.score - b.score);
        break;
      case "rating-hi":
      default:
        list = [...list].sort((a, b) => b.score - a.score);
    }
    return list;
  }, [scored, search, regionFilter, tierFilter, quickFilter]);

  function toggleCompare(id) {
    setCompareIds((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      if (prev.length >= maxCompare) return prev;
      return [...prev, id];
    });
  }

  const compareStates = scored.filter((s) => compareIds.includes(s.id));

  return (
    <div>
      {/* TOOLBAR */}
      <div className="border border-clay bg-paper p-5 sm:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {/* SEARCH */}
          <div className="relative w-full sm:max-w-sm">
            <Icon
              name="search"
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-ink-soft/50"
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search states or union territories…"
              className="w-full border border-clay bg-paper py-2.5 pl-9 pr-9 text-sm text-ink placeholder:text-ink-soft/60 focus:border-banyan focus:outline-none"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                aria-label="Clear search"
                className="absolute right-2.5 top-1/2 flex size-5 -translate-y-1/2 items-center justify-center text-ink-soft/50 hover:text-banyan"
              >
                <Icon name="close" className="size-3.5" />
              </button>
            )}
          </div>

          <p className="text-xs text-ink-soft/70 sm:text-right">
            <span className="font-semibold text-ink">{rows.length}</span> of {scored.length} states &amp; UTs
            &middot; select up to {maxCompare} to compare
          </p>
        </div>

        {/* REGION CHIPS */}
        <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-clay/60 pt-4">
          <span className="w-full text-xs font-semibold uppercase tracking-[0.1em] text-ink-soft/60 sm:w-auto">
            Region
          </span>
          <Chip active={regionFilter === "all"} onClick={() => setRegionFilter("all")}>
            All
          </Chip>
          {REGIONS.map((r) => (
            <Chip key={r} active={regionFilter === r} onClick={() => setRegionFilter(r)}>
              {r}
            </Chip>
          ))}
          <Chip active={regionFilter === "ut"} onClick={() => setRegionFilter("ut")}>
            Union Territories
          </Chip>
        </div>

        {/* TIER CHIPS */}
        <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-clay/60 pt-4">
          <span className="w-full text-xs font-semibold uppercase tracking-[0.1em] text-ink-soft/60 sm:w-auto">
            Tier
          </span>
          <Chip active={tierFilter === "all"} onClick={() => setTierFilter("all")}>
            All
          </Chip>
          {TIERS.map((tier) => (
            <Chip key={tier.id} active={tierFilter === tier.id} onClick={() => setTierFilter(tier.id)}>
              <span className="mr-1.5 inline-block size-2 rounded-full" style={{ backgroundColor: tier.color }} aria-hidden="true" />
              {tier.label}
            </Chip>
          ))}
        </div>

        {/* QUICK FILTER / SORT CHIPS */}
        <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-clay/60 pt-4">
          <span className="w-full text-xs font-semibold uppercase tracking-[0.1em] text-ink-soft/60 sm:w-auto">
            Quick filters
          </span>
          {QUICK_FILTERS.map((qf) => (
            <Chip key={qf.id} active={quickFilter === qf.id} onClick={() => setQuickFilter(qf.id)}>
              {qf.label}
            </Chip>
          ))}
        </div>
      </div>

      {/* CARD GRID */}
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {rows.map((state) => {
          const tier = getTier(state.score);
          const delta =
            state.scoreTrend.length > 1
              ? Math.round((state.scoreTrend[state.scoreTrend.length - 1] - state.scoreTrend[state.scoreTrend.length - 2]) * 10) / 10
              : 0;
          const checked = compareIds.includes(state.id);

          return (
            <div
              key={state.id}
              className={`group relative border bg-paper p-4 transition-all duration-200 hover:-translate-y-0.5 ${
                checked ? "border-banyan" : "border-clay hover:border-banyan/60"
              }`}
              style={{ borderTopColor: tier.color, borderTopWidth: "3px" }}
            >
              <button
                type="button"
                onClick={() => toggleCompare(state.id)}
                aria-pressed={checked}
                aria-label={checked ? `Remove ${state.name} from compare` : `Add ${state.name} to compare`}
                className={`absolute right-3 top-3 flex size-5 items-center justify-center rounded-full border text-[10px] font-bold transition-colors ${
                  checked ? "border-banyan bg-banyan text-paper" : "border-clay text-ink-soft/50 hover:border-banyan"
                }`}
              >
                {checked ? "✓" : ""}
              </button>

              <Link href={`/csr-tracker/${state.id}`} className="block">
                <StateIcon stateId={state.id} className="size-6 text-banyan" />
                <p className="mt-2.5 font-display text-sm font-semibold leading-tight text-ink">{state.name}</p>
                <p className="mt-0.5 text-[11px] text-ink-soft/70">
                  {state.type === "Union Territory" ? "Union Territory" : state.region}
                </p>
                <p className="mt-2 font-mono text-xs tabular-nums text-ink-soft">{lakhCr(state.gsdpCr)}</p>

                <div className="mt-3 flex items-center justify-between gap-2">
                  <RatingBadge score={state.score} size="sm" />
                </div>
                <p className="mt-2 flex items-baseline gap-1.5">
                  <span className="font-mono text-xl font-semibold tabular-nums text-ink">{state.score}</span>
                  <span
                    className={`font-mono text-[11px] font-semibold tabular-nums ${
                      delta > 0 ? "text-banyan" : delta < 0 ? "text-marigold-deep" : "text-ink-soft/60"
                    }`}
                  >
                    {delta > 0 ? "▲" : delta < 0 ? "▼" : "–"} {Math.abs(delta)}
                  </span>
                </p>
              </Link>
            </div>
          );
        })}
        {rows.length === 0 && (
          <p className="col-span-full py-10 text-center text-sm text-ink-soft">No states match those filters.</p>
        )}
      </div>

      {/* COMPARE PANEL */}
      {compareStates.length > 0 && (
        <div className="mt-8 border border-clay bg-paper-deep p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft/70">
              Comparing {compareStates.length} state{compareStates.length > 1 ? "s" : ""}
            </p>
            <button
              type="button"
              onClick={() => setCompareIds([])}
              className="text-xs font-semibold text-ink-soft underline decoration-clay decoration-2 underline-offset-4 hover:text-banyan"
            >
              Clear
            </button>
          </div>

          {compareStates.length < 2 ? (
            <p className="mt-4 text-sm text-ink-soft">Select at least one more state to see a side-by-side comparison.</p>
          ) : (
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[480px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-clay text-left text-xs font-semibold uppercase tracking-[0.08em] text-ink-soft">
                    <th className="py-2 pr-4">Metric</th>
                    {compareStates.map((s) => (
                      <th key={s.id} className="py-2 pr-4">
                        {s.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-clay">
                  <CompareRow label="Score" states={compareStates} get={(s) => s.score} />
                  <CompareRow label="GSDP" states={compareStates} get={(s) => lakhCr(s.gsdpCr)} />
                  <CompareRow label="CSR Fund Utilization" states={compareStates} get={(s) => `${s.csrFundUtilizationPct}%`} />
                  <CompareRow label="Annual Income Growth" states={compareStates} get={(s) => `${s.annualIncomeGrowthPct}%`} />
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function CompareRow({ label, states, get }) {
  return (
    <tr>
      <td className="py-2 pr-4 font-medium text-ink">{label}</td>
      {states.map((s) => (
        <td key={s.id} className="py-2 pr-4 font-mono tabular-nums text-ink-soft">
          {get(s)}
        </td>
      ))}
    </tr>
  );
}

function Chip({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center border px-3 py-1.5 text-xs font-semibold transition-colors ${
        active ? "border-banyan bg-banyan text-paper" : "border-clay bg-paper text-ink-soft hover:border-banyan/60"
      }`}
    >
      {children}
    </button>
  );
}
