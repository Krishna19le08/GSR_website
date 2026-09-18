"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { DEPARTMENTS } from "../../data/states-data";

const inr = (n) => `₹${n.toLocaleString("en-IN")} Cr`;

export default function StateCsrTable({ states }) {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("gsdpCr");
  const [sortDir, setSortDir] = useState("desc");

  const rows = useMemo(() => {
    const q = search.trim().toLowerCase();
    const filtered = states.filter((s) => s.name.toLowerCase().includes(q));
    const sorted = [...filtered].sort((a, b) => {
      const diff = a[sortBy] - b[sortBy];
      return sortDir === "asc" ? diff : -diff;
    });
    return sorted;
  }, [states, search, sortBy, sortDir]);

  function toggleSort(key) {
    if (sortBy === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortBy(key);
      setSortDir("desc");
    }
  }

  const columns = [
    { key: "name", label: "State / UT", sortable: false },
    { key: "gsdpCr", label: "GSDP" },
    { key: "gsdpGrowthPct", label: "GSDP Growth" },
    { key: "csrFundUtilizationPct", label: "CSR Utilization" },
  ];

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search states or union territories…"
        className="w-full max-w-xs border border-clay bg-paper px-4 py-2.5 text-sm text-ink placeholder:text-ink-soft/60 focus:border-banyan focus:outline-none"
      />

      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-clay text-left text-xs font-semibold uppercase tracking-[0.08em] text-ink-soft">
              {columns.map((col) => (
                <th key={col.key} className="py-3 pr-4">
                  {col.sortable === false ? (
                    col.label
                  ) : (
                    <button
                      type="button"
                      onClick={() => toggleSort(col.key)}
                      className="inline-flex items-center gap-1 hover:text-ink"
                    >
                      {col.label}
                      {sortBy === col.key && <span aria-hidden="true">{sortDir === "asc" ? "↑" : "↓"}</span>}
                    </button>
                  )}
                </th>
              ))}
              {DEPARTMENTS.map((dept) => (
                <th key={dept.key} className="py-3 pr-4">
                  {dept.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-clay">
            {rows.map((state) => (
              <tr key={state.id} className="align-top">
                <td className="py-3 pr-4">
                  <Link href={`/csr-tracker/${state.id}`} className="font-medium text-banyan hover:underline">
                    {state.name}
                  </Link>
                  <p className="text-xs text-ink-soft/70">{state.type}</p>
                </td>
                <td className="py-3 pr-4 font-mono tabular-nums text-ink-soft">{inr(state.gsdpCr)}</td>
                <td className="py-3 pr-4 font-mono tabular-nums text-ink-soft">{state.gsdpGrowthPct}%</td>
                <td className="py-3 pr-4 font-mono tabular-nums text-ink-soft">{state.csrFundUtilizationPct}%</td>
                {DEPARTMENTS.map((dept) => (
                  <td key={dept.key} className="py-3 pr-4 font-mono tabular-nums text-ink-soft">
                    {inr(state.departmentFundsCr[dept.key])}
                  </td>
                ))}
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={4 + DEPARTMENTS.length} className="py-10 text-center text-ink-soft">
                  No states match that search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
