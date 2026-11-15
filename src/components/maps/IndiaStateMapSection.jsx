"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
// Leaflet's stylesheet ships with the page CSS (not the lazily loaded map
// chunk), so it is in place before the map renders. Loaded only by the async
// chunk, the map could render unstyled for a moment and shift the layout.
import "leaflet/dist/leaflet.css";
import { useMemo, useState } from "react";
import { TIERS, compositeScore, getTier } from "@/lib/rating";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

// Leaflet touches `window` at import time, so the map can only ever render
// on the client — load it lazily and skip SSR for this piece.
const IndiaStateMap = dynamic(() => import("./IndiaStateMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full min-h-[360px] items-center justify-center bg-paper-deep text-sm text-ink-soft">
      Loading map…
    </div>
  ),
});

export default function IndiaStateMapSection({ states, basePath = "/csr-tracker" }) {
  const [hoveredId, setHoveredId] = useState(null);
  const [activeTier, setActiveTier] = useState(null);
  // Tapped state on touch screens (no hover there); see IndiaStateMap.
  const [selectedId, setSelectedId] = useState(null);

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
  const selectedState = selectedId ? statesById.get(selectedId) : null;
  const previewState = hoveredState ?? selectedState ?? topState;

  return (
    <div className="border border-clay bg-paper">
      {/* TIER FILTER STRIP */}
      <div className="flex flex-wrap items-center gap-2 border-b border-clay bg-paper-deep px-4 py-3">
        <button
          type="button"
          onClick={() => setActiveTier(null)}
          aria-pressed={activeTier === null}
          className={`inline-flex min-h-10 items-center gap-1.5 border px-3 text-xs font-semibold transition-colors ${
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
            aria-pressed={activeTier === tier.id}
            className={`inline-flex min-h-10 items-center gap-1.5 border px-3 text-xs font-semibold transition-colors ${
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
        <div className="relative h-[400px] w-full border-b border-clay sm:h-[460px] lg:border-b-0 lg:border-r">
          <IndiaStateMap
            statesById={statesById}
            basePath={basePath}
            activeTier={activeTier}
            onHoverState={setHoveredId}
            selectedId={selectedId}
            onSelectState={setSelectedId}
          />

          {/* Touch preview: the side panel sits below the map on phones, out
              of sight, so the tapped state is summarised right on the map. */}
          {selectedState && (
            <div className="absolute inset-x-3 bottom-3 z-[500] flex items-center gap-3 border border-clay bg-surface/95 p-3 shadow-[0_12px_28px_-12px_rgb(11_38_24/0.45)] backdrop-blur lg:hidden">
              <div className="min-w-0 flex-1">
                <p className="truncate font-display text-base font-semibold leading-tight text-ink">
                  {selectedState.name}
                </p>
                <p className="mt-0.5 text-xs text-ink-soft">
                  Score {Math.round(selectedState.score)} &middot; CSR {selectedState.csrIntensityPct.toFixed(2)}% of GSDP
                </p>
              </div>
              <Link
                href={`${basePath}/${selectedState.id}`}
                className="inline-flex min-h-11 shrink-0 items-center bg-banyan px-4 text-sm font-semibold text-paper"
              >
                Open &rarr;
              </Link>
              <button
                type="button"
                onClick={() => setSelectedId(null)}
                aria-label="Clear selection"
                className="-mr-1 flex size-11 shrink-0 items-center justify-center text-ink-soft"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="size-5" aria-hidden="true">
                  <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          )}
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
                {hoveredState ? "Now hovering" : selectedState ? "Selected" : "Top performer"}
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
                  CSR spend vs GSDP
                </dt>
                <dd className="mt-1 font-mono text-sm font-semibold text-ink">
                  {previewState.csrIntensityPct.toFixed(2)}%
                </dd>
              </div>
            </dl>

            <Link
              href={`${basePath}/${previewState.id}`}
              className="mx-5 mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-banyan underline decoration-clay decoration-2 underline-offset-4 transition-colors hover:text-marigold-deep hover:decoration-marigold"
            >
              Open full dashboard &rarr;
            </Link>
          </div>

          <p className="mx-5 mb-5 mt-6 border-t border-clay pt-4 text-xs text-ink-soft/70">
            <span className="[@media(hover:none)]:hidden">
              Hover any state on the map to preview it here, click to open its
              full CSR fund and grantee details.
            </span>
            <span className="hidden [@media(hover:none)]:inline">
              Tap a state to preview it, tap it again (or Open) for its full
              CSR fund and grantee details.
            </span>
          </p>
        </aside>
      </div>
    </div>
  );
}
