"use client";

import { useMemo, useState } from "react";

export default function InstructorDirectory({ instructors, statesById }) {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All regions");

  const regions = useMemo(
    () => ["All regions", ...new Set(instructors.map((i) => i.region))],
    [instructors],
  );

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return instructors.filter((instructor) => {
      const matchesRegion = region === "All regions" || instructor.region === region;
      const matchesSearch =
        !q ||
        instructor.name.toLowerCase().includes(q) ||
        instructor.focusArea.toLowerCase().includes(q);
      return matchesRegion && matchesSearch;
    });
  }, [instructors, search, region]);

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search instructors or focus area…"
          className="w-full max-w-xs border border-clay bg-paper px-4 py-2.5 text-sm text-ink placeholder:text-ink-soft/60 focus:border-banyan focus:outline-none"
        />
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="border border-clay bg-paper px-4 py-2.5 text-sm text-ink focus:border-banyan focus:outline-none"
        >
          {regions.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      <p className="mt-4 text-xs text-ink-soft">
        {filtered.length} of {instructors.length} instructors assigned across state regions
      </p>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((instructor) => (
          <div key={instructor.id} className="border border-clay bg-paper p-5">
            <p className="font-display text-base font-semibold text-ink">{instructor.name}</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-marigold-deep">
              {instructor.focusArea}
            </p>
            <p className="mt-3 text-sm text-ink-soft">{instructor.region} region</p>
            <p className="mt-1 text-sm text-ink-soft">
              {instructor.statesCovered
                .map((id) => statesById.get(id)?.name ?? id)
                .join(", ")}
            </p>
            <p className="mt-3 text-xs text-ink-soft/70">{instructor.email}</p>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="col-span-full py-10 text-center text-sm text-ink-soft">
            No instructors match that search.
          </p>
        )}
      </div>
    </div>
  );
}
