"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { TIERS, compositeScore, getTier } from "../../lib/rating";
import ImagePlaceholder from "../ImagePlaceholder";

// Leaflet touches `window` at import time, so the map can only ever render
// on the client — load it lazily and skip SSR for this piece.
const IndiaStateMap = dynamic(() => import("./IndiaStateMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full min-h-[420px] items-center justify-center bg-paper-deep text-sm text-ink-soft">
      Loading map…
    </div>
  ),
});

export default function IndiaStateMapSection({ states, basePath = "/csr-tracker" }) {
  const [hoveredId, setHoveredId] = useState(null);
  const [activeTier, setActiveTier] = useState(null);

  const scoredStates = useMemo(
    () => states.map((state) => ({ ...state, score: compositeScore(state) })),
    [states],
  );
  const statesById = useMemo(
    () => new Map(scoredStates.map((state) => [state.id, state])),
    [scoredStates],
  );

  const topState = useMemo(
    () => [...scoredStates].sort((a, b) => b.score - a.score)[0],
    [scoredStates],
  );

  const tierCounts = useMemo(() => {
    const counts = new Map(TIERS.map((tier) => [tier.id, 0]));
    scoredStates.forEach((state) => {
      const tier = getTier(state.score);
      counts.set(tier.id, (counts.get(tier.id) ?? 0) + 1);
    });
    return counts;
  }, [scoredStates]);

  const hoveredState = hoveredId ? statesById.get(hoveredId) : null;
  const previewState = hoveredState ?? topState;

  return (
    <div className="border border-clay bg-paper">
      {/* TIER FILTER STRIP */}
      <div className="flex flex-wrap items-center gap-2 border-b border-clay bg-paper-deep px-4 py-3">
        <button
          type="button"
          onClick={() => setActiveTier(null)}
          className={`inline-flex items-center gap-1.5 border px-3 py-1.5 text-xs font-semibold transition-colors ${
            activeTier === null
              ? "border-ink bg-ink text-paper"
              : "border-clay text-ink-soft hover:border-ink/40 hover:text-ink"
          }`}
        >
          All states
        </button>
        {[...TIERS].reverse().map((tier) => (
          <button
            key={tier.id}
            type="button"
            onClick={() => setActiveTier((current) => (current === tier.id ? null : tier.id))}
            className={`inline-flex items-center gap-1.5 border px-3 py-1.5 text-xs font-semibold transition-colors ${
              activeTier === tier.id
                ? "border-transparent text-paper"
                : "border-clay text-ink-soft hover:border-ink/40 hover:text-ink"
            }`}
            style={activeTier === tier.id ? { backgroundColor: tier.color } : undefined}
          >
            <span
              className="inline-block size-2 rounded-full"
              style={{ backgroundColor: activeTier === tier.id ? "currentColor" : tier.color }}
              aria-hidden="true"
            />
            Score {tier.min}+
            <span className={activeTier === tier.id ? "text-paper/70" : "text-ink-soft/60"}>
              {tierCounts.get(tier.id) ?? 0}
            </span>
          </button>
        ))}
      </div>

      {/* MAP + LIVE PREVIEW */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px]">
        <div className="h-[460px] w-full border-b border-clay lg:border-b-0 lg:border-r">
          <IndiaStateMap
            statesById={statesById}
            basePath={basePath}
            activeTier={activeTier}
            onHoverState={setHoveredId}
          />
        </div>

        <aside className="flex flex-col justify-between">
          <div>
            <div className="relative">
              <ImagePlaceholder
                label={`[ ${previewState.name} ]`}
                ratio="aspect-[16/10]"
                className="w-full"
                src={previewState.photoUrl}
                alt={previewState.name}
              />
              <span className="absolute left-3 top-3 bg-paper/90 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                {hoveredState ? "Now hovering" : "Top performer"}
              </span>
            </div>

            <div className="px-5 pt-4">
              <p className="font-display text-lg font-semibold leading-tight text-ink">
                {previewState.name}
              </p>
              <p className="mt-1 text-xs text-ink-soft">
                {previewState.type} &middot; {previewState.region}
              </p>
            </div>

            <dl className="mx-5 mt-5 grid grid-cols-2 gap-4 border-t border-clay pt-4">
              <div>
                <dt className="text-[11px] uppercase tracking-[0.1em] text-ink-soft/60">GSDP</dt>
                <dd className="mt-1 font-mono text-sm font-semibold text-ink">
                  ₹{previewState.gsdpCr.toLocaleString("en-IN")} Cr
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.1em] text-ink-soft/60">
                  Fund utilization
                </dt>
                <dd className="mt-1 font-mono text-sm font-semibold text-ink">
                  {previewState.csrFundUtilizationPct}%
                </dd>
              </div>
            </dl>

            <Link
              href={`${basePath}/${previewState.id}`}
              className="mx-5 mt-5 inline-flex items-center text-sm font-semibold text-banyan underline decoration-clay decoration-2 underline-offset-4 transition-colors hover:text-marigold-deep hover:decoration-marigold"
            >
              Open full dashboard &rarr;
            </Link>
          </div>

          <p className="mx-5 mb-5 mt-6 border-t border-clay pt-4 text-xs text-ink-soft/70">
            Hover any state on the map to preview it here, click to open its
            full CSR fund and grantee details.
          </p>
        </aside>
      </div>
    </div>
  );
}
