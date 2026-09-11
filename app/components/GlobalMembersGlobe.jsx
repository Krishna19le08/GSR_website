"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Eyebrow } from "./ui";
import { getMembers } from "./members-data";

// Leaflet touches `window` at import time, so the map itself can only ever
// render on the client — load it lazily and skip SSR for this piece.
const LeafletMap = dynamic(() => import("./LeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center">
      <span className="animate-pulse text-xs uppercase tracking-[0.2em] text-slate-500">
        Loading map…
      </span>
    </div>
  ),
});

function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function MemberAvatar({ member, className = "" }) {
  if (member.profileImage) {
    return (
      <img
        src={member.profileImage}
        alt=""
        loading="lazy"
        className={`rounded-full object-cover ${className}`}
      />
    );
  }
  return (
    <div
      className={`flex items-center justify-center rounded-full bg-emerald-50 font-semibold text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400 ${className}`}
      aria-hidden="true"
    >
      {initials(member.name)}
    </div>
  );
}

export default function GlobalMembersGlobe() {
  const members = useMemo(() => getMembers(), []);
  const [query, setQuery] = useState("");
  const [countryFilter, setCountryFilter] = useState("all");
  const [stateFilter, setStateFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [selectedId, setSelectedId] = useState(null);

  const mapApiRef = useRef(null);
  const mapPanelRef = useRef(null);
  const listItemRefs = useRef({});

  const countries = useMemo(() => {
    const unique = Array.from(new Set(members.map((m) => m.country))).sort();
    return ["all", ...unique];
  }, [members]);

  const states = useMemo(() => {
    const inCountry =
      countryFilter === "all" ? members : members.filter((m) => m.country === countryFilter);
    const unique = Array.from(new Set(inCountry.map((m) => m.state).filter(Boolean))).sort();
    return ["all", ...unique];
  }, [members, countryFilter]);

  const categories = useMemo(() => {
    const inScope = members.filter(
      (m) =>
        (countryFilter === "all" || m.country === countryFilter) &&
        (stateFilter === "all" || m.state === stateFilter)
    );
    const unique = Array.from(new Set(inScope.map((m) => m.category).filter(Boolean))).sort();
    return ["all", ...unique];
  }, [members, countryFilter, stateFilter]);

  const filteredMembers = useMemo(() => {
    const q = query.trim().toLowerCase();
    return members.filter((m) => {
      const matchesQuery =
        !q ||
        m.name.toLowerCase().includes(q) ||
        m.organization.toLowerCase().includes(q) ||
        m.city.toLowerCase().includes(q) ||
        m.country.toLowerCase().includes(q);
      const matchesCountry = countryFilter === "all" || m.country === countryFilter;
      const matchesState = stateFilter === "all" || m.state === stateFilter;
      const matchesCategory = categoryFilter === "all" || m.category === categoryFilter;
      return matchesQuery && matchesCountry && matchesState && matchesCategory;
    });
  }, [members, query, countryFilter, stateFilter, categoryFilter]);

  useEffect(() => {
    if (!states.includes(stateFilter)) {
      setStateFilter("all");
    }
  }, [states, stateFilter]);

  useEffect(() => {
    if (!categories.includes(categoryFilter)) {
      setCategoryFilter("all");
    }
  }, [categories, categoryFilter]);

  useEffect(() => {
    if (selectedId && !filteredMembers.some((m) => m.id === selectedId)) {
      setSelectedId(null);
    }
  }, [filteredMembers, selectedId]);

  function focusMember(member, { scrollMapIntoView = false } = {}) {
    setSelectedId(member.id);
    mapApiRef.current?.goTo(member);

    const listNode = listItemRefs.current[member.id];
    if (listNode) {
      listNode.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
    if (scrollMapIntoView && mapPanelRef.current) {
      mapPanelRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function clearSelection() {
    setSelectedId(null);
  }

  function handleReset() {
    setSelectedId(null);
    mapApiRef.current?.reset();
  }

  function toggleMember(member) {
    if (member.id === selectedId) {
      handleReset();
    } else {
      focusMember(member, { scrollMapIntoView: true });
    }
  }

  return (
    <section className="bg-white py-20 dark:bg-zinc-950 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Our Global Reach</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            GSR Global Members
          </h2>
          <p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            GSR is a global network of people and organizations working
            together across the world. Explore the map or search the
            directory to find members advancing a healthier planet and a
            more equitable future.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-10">
          {/* Map */}
          <div
            ref={mapPanelRef}
            className="relative isolate h-[420px] overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 sm:h-[520px] lg:h-[620px]"
          >
            <LeafletMap
              ref={mapApiRef}
              members={filteredMembers}
              selectedId={selectedId}
              onMarkerClick={(member) => focusMember(member)}
              onBackgroundClick={clearSelection}
            />

            {/* Floating controls */}
            <div className="absolute right-3 top-3 z-[500] flex flex-col gap-2">
              <button
                type="button"
                onClick={() => mapApiRef.current?.zoomIn()}
                aria-label="Zoom in"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                +
              </button>
              <button
                type="button"
                onClick={() => mapApiRef.current?.zoomOut()}
                aria-label="Zoom out"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                −
              </button>
              <button
                type="button"
                onClick={handleReset}
                aria-label="Reset map view"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                ◎
              </button>
            </div>
          </div>

          {/* Member directory */}
          <div className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900 lg:h-[620px]">
            <div className="px-1">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-50">
                GSR Members
              </h3>
            </div>

            <label className="relative mt-4 block">
              <span className="sr-only">Search members</span>
              <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search members..."
                className="w-full rounded-full border border-zinc-300 bg-zinc-50 px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-500 focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50 dark:placeholder:text-zinc-500"
              />
            </label>

            <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
              <label className="relative">
                <span className="sr-only">Filter by country</span>
                <select
                  value={countryFilter}
                  onChange={(event) => setCountryFilter(event.target.value)}
                  className="w-full appearance-none rounded-full border border-zinc-300 bg-zinc-50 px-4 py-2.5 text-xs text-zinc-900 focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50 sm:py-2"
                >
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country === "all" ? "All countries" : country}
                    </option>
                  ))}
                </select>
              </label>
              <label className="relative">
                <span className="sr-only">Filter by state</span>
                <select
                  value={stateFilter}
                  onChange={(event) => setStateFilter(event.target.value)}
                  className="w-full appearance-none rounded-full border border-zinc-300 bg-zinc-50 px-4 py-2.5 text-xs text-zinc-900 focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50 sm:py-2"
                >
                  {states.map((state) => (
                    <option key={state} value={state}>
                      {state === "all" ? "All states" : state}
                    </option>
                  ))}
                </select>
              </label>
              <label className="relative">
                <span className="sr-only">Filter by cause category</span>
                <select
                  value={categoryFilter}
                  onChange={(event) => setCategoryFilter(event.target.value)}
                  className="w-full appearance-none rounded-full border border-zinc-300 bg-zinc-50 px-4 py-2.5 text-xs text-zinc-900 focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50 sm:py-2"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category === "all" ? "All categories" : category}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="gsr-scroll-thin mt-4 flex-1 space-y-2 overflow-y-auto pr-1 max-h-[420px] lg:max-h-none">
              {filteredMembers.length === 0 && (
                <p className="rounded-xl border border-dashed border-zinc-300 px-4 py-8 text-center text-sm text-zinc-500 dark:border-zinc-700">
                  No members match your search.
                </p>
              )}
              {filteredMembers.map((member) => {
                const isSelected = member.id === selectedId;
                return (
                  <div
                    key={member.id}
                    ref={(node) => {
                      listItemRefs.current[member.id] = node;
                    }}
                    className={`overflow-hidden rounded-xl border transition-colors ${
                      isSelected
                        ? "border-emerald-600/50 bg-emerald-50 dark:bg-emerald-500/10"
                        : "border-zinc-200 bg-white hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700 dark:hover:bg-zinc-800/60"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleMember(member)}
                      aria-expanded={isSelected}
                      className="flex w-full items-center gap-3 px-3 py-3 text-left"
                    >
                      <MemberAvatar member={member} className="h-11 w-11 shrink-0 text-sm" />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                          {member.name}
                        </p>
                        <p className="truncate text-sm text-zinc-500 dark:text-zinc-400">
                          {member.organization}
                        </p>
                        <p className="truncate text-xs text-zinc-500 dark:text-zinc-500">
                          📍 {member.city}
                          {member.state ? `, ${member.state}` : ""}, {member.country}
                        </p>
                        {member.category && (
                          <p className="mt-0.5 truncate text-[11px] font-medium text-emerald-700 dark:text-emerald-400">
                            {member.category}
                          </p>
                        )}
                      </div>
                      <span
                        className={`shrink-0 text-zinc-400 transition-transform dark:text-zinc-600 ${isSelected ? "rotate-90" : ""}`}
                        aria-hidden="true"
                      >
                        ›
                      </span>
                    </button>

                    {isSelected && (
                      <div className="border-t border-zinc-200 px-4 pb-4 pt-3 dark:border-zinc-800">
                        {member.description && (
                          <p className="text-xs leading-5 text-zinc-600 dark:text-zinc-400">
                            {member.description}
                          </p>
                        )}
                        {member.website && (
                          <a
                            href={member.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 transition-colors hover:text-emerald-800 dark:text-emerald-400"
                          >
                            View Profile →
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
