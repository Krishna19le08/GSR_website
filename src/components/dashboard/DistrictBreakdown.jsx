"use client";

import { Fragment, useMemo, useState } from "react";

const inr = (n) => `₹${n.toLocaleString("en-IN")} Cr`;

export default function DistrictBreakdown({ districts }) {
  const [search, setSearch] = useState("");
  const [openDistrict, setOpenDistrict] = useState(null);

  const rows = useMemo(() => {
    const q = search.trim().toLowerCase();
    return districts.filter((d) => d.name.toLowerCase().includes(q));
  }, [districts, search]);

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search districts…"
        className="w-full max-w-xs border border-clay bg-paper px-4 py-2.5 text-sm text-ink placeholder:text-ink-soft/60 focus:border-banyan focus:outline-none"
      />

      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-clay text-left text-xs font-semibold uppercase tracking-[0.08em] text-ink-soft">
              <th className="py-3 pr-4">District</th>
              <th className="py-3 pr-4">Classification</th>
              <th className="py-3 pr-4">CSR spend (all years)</th>
              <th className="py-3 pr-4" />
            </tr>
          </thead>
          <tbody className="divide-y divide-clay">
            {rows.map((district) => {
              const isOpen = openDistrict === district.name;
              return (
                <Fragment key={district.name}>
                  <tr
                    className="cursor-pointer align-top hover:bg-paper-deep"
                    onClick={() => setOpenDistrict(isOpen ? null : district.name)}
                  >
                    <td className="py-3 pr-4 font-medium text-ink">{district.name}</td>
                    <td className="py-3 pr-4 text-ink-soft">
                      <span
                        className={`inline-flex items-center border px-2 py-0.5 text-xs font-medium ${
                          district.type === "Aspirational"
                            ? "border-marigold-deep/40 text-marigold-deep"
                            : "border-clay text-ink-soft"
                        }`}
                      >
                        {district.type}
                      </span>
                    </td>
                    <td className="py-3 pr-4 font-mono tabular-nums text-ink-soft">{inr(district.totalCr)}</td>
                    <td className="py-3 pr-4 text-right text-ink-soft">
                      <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
                    </td>
                  </tr>
                  {isOpen && (
                    <tr>
                      <td colSpan={4} className="bg-paper-deep px-4 py-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-ink-soft">
                          Sector breakdown, {district.name}
                        </p>
                        <ul className="mt-3 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
                          {district.sectors.map((sector) => (
                            <li
                              key={sector.key}
                              className="flex items-baseline justify-between gap-4 border-b border-clay/60 py-1.5 text-sm"
                            >
                              <span className="text-ink-soft">{sector.label}</span>
                              <span className="font-mono tabular-nums text-ink">{inr(sector.amountCr)}</span>
                            </li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  )}
                </Fragment>
              );
            })}
            {rows.length === 0 && (
              <tr>
                <td colSpan={4} className="py-10 text-center text-ink-soft">
                  No districts match that search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
