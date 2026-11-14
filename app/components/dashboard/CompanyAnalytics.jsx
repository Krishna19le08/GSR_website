"use client";

import { useMemo, useState } from "react";

const PAGE_SIZE = 25;

const cr = (rupees) =>
  `₹${(rupees / 1e7).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} Cr`;
const pct = (v) => `${(v * 100).toFixed(1)}%`;

function Panel({ title, sub, children }) {
  return (
    <div className="border border-clay bg-paper p-5">
      <h2 className="font-display text-lg font-semibold text-ink">{title}</h2>
      {sub && <p className="mt-1 text-xs text-ink-soft">{sub}</p>}
      <div className="mt-4">{children}</div>
    </div>
  );
}

function BarRow({ label, value, max, right, color = "bg-banyan" }) {
  return (
    <div className="grid grid-cols-[minmax(0,9rem)_1fr_auto] items-center gap-3 py-1 text-xs sm:grid-cols-[minmax(0,14rem)_1fr_auto]">
      <span className="truncate text-ink" title={label}>{label}</span>
      <div className="h-3 bg-paper-deep">
        <div className={`h-full ${color}`} style={{ width: `${max ? (value / max) * 100 : 0}%` }} />
      </div>
      <span className="font-mono text-ink-soft">{right}</span>
    </div>
  );
}

function ParetoChart({ points }) {
  const W = 400, H = 160, P = 28;
  const step = Math.max(1, Math.floor(points.length / 100));
  const pts = points.filter((p, i) => i % step === 0 || i === points.length - 1);
  const x = (r) => P + ((r - 1) / Math.max(1, points.length - 1)) * (W - P - 8);
  const y = (s) => H - 20 - s * (H - 20 - 8);
  const d = pts.map((p, i) => `${i ? "L" : "M"}${x(p.rank).toFixed(1)},${y(p.share).toFixed(1)}`).join(" ");
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label="Cumulative share of CSR spend by company rank">
      {[0, 0.25, 0.5, 0.75, 1].map((t) => (
        <g key={t}>
          <line x1={P} x2={W - 8} y1={y(t)} y2={y(t)} stroke="#c7b89a" strokeWidth="0.5" />
          <text x={P - 4} y={y(t) + 3} textAnchor="end" fontSize="8" fill="#55503f">{t * 100}%</text>
        </g>
      ))}
      <path d={d} fill="none" stroke="#c98a11" strokeWidth="2" />
      <text x={W - 8} y={H - 4} textAnchor="end" fontSize="8" fill="#55503f">companies by rank →</text>
    </svg>
  );
}

const COLUMNS = [
  { key: "rank", label: "Rank" },
  { key: "name", label: "Company" },
  { key: "ownership", label: "Type" },
  { key: "listed", label: "Listing" },
  { key: "sectors", label: "Sector" },
  { key: "amountSpent", label: "CSR spent" },
];

export default function CompanyAnalytics({ data, mapSection }) {
  const {
    kpis,
    companies,
    buckets,
    byListing,
    byOwnership,
    cumulative,
    sectorOptions = [],
    stateOptions = [],
    districtOptions = [],
    districtsByState = {},
  } = data;
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("rank");
  const [dir, setDir] = useState("asc");
  const [listing, setListing] = useState("all");
  const [sector, setSector] = useState("all");
  const [state, setState] = useState("all");
  const [district, setDistrict] = useState("all");
  const [year, setYear] = useState("all");
  const [ownership, setOwnership] = useState("all");
  const [page, setPage] = useState(0);

  const yearOptions = useMemo(() => [...new Set(companies.flatMap((c) => c.years))].sort(), [companies]);
  const ownershipOptions = useMemo(() => [...new Set(companies.map((c) => c.ownership))].sort(), [companies]);

  const availableDistricts = state === "all" ? districtOptions : districtsByState[state] ?? [];

  const rows = useMemo(() => {
    const q = search.trim().toLowerCase();
    const filtered = companies.filter(
      (c) =>
        (listing === "all" || c.listed === listing) &&
        (sector === "all" || c.sectors.includes(sector)) &&
        (state === "all" || c.states.includes(state)) &&
        (district === "all" || c.districts.includes(district)) &&
        (year === "all" || c.years.includes(year)) &&
        (ownership === "all" || c.ownership === ownership) &&
        (!q || c.name.toLowerCase().includes(q) || c.cin.toLowerCase().includes(q)),
    );
    return filtered.sort((a, b) => {
      const av = a[sortBy];
      const bv = b[sortBy];
      const diff = typeof av === "string" ? av.localeCompare(bv) : av - bv;
      return dir === "asc" ? diff : -diff;
    });
  }, [companies, search, sortBy, dir, listing, sector, state, district, year, ownership]);

  const pages = Math.max(1, Math.ceil(rows.length / PAGE_SIZE));
  const safePage = Math.min(page, pages - 1);
  const visible = rows.slice(safePage * PAGE_SIZE, (safePage + 1) * PAGE_SIZE);

  function toggleSort(key) {
    if (sortBy === key) {
      setDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortBy(key);
      setDir(key === "amountSpent" ? "desc" : "asc");
    }
    setPage(0);
  }

  const listedCount = byListing.find((l) => l.label === "Listed")?.count ?? 0;
  const stats = [
    { value: kpis.count.toLocaleString("en-IN"), label: "Total No. of Companies" },
    {
      value: Math.round(kpis.total / 1e7).toLocaleString("en-IN"),
      label: "Total Amount Spent on CSR (INR Cr.)",
    },
    { value: listedCount.toLocaleString("en-IN"), label: "Listed Companies" },
    { value: pct(kpis.top10Share), label: "Share of Top 10 Companies" },
    { value: kpis.zeroSpend.toLocaleString("en-IN"), label: "Companies with Zero Spend" },
  ];

  const top10 = companies.slice(0, 10);
  const maxBucket = Math.max(...buckets.map((b) => b.count));
  const maxOwn = Math.max(...byOwnership.map((o) => o.total));

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="border-b-2 border-clay">
        <span className="inline-block border-b-4 border-banyan px-1 pb-3 text-sm font-semibold text-banyan">
          {data.financialYear} · past records
        </span>
      </div>
      <div className="grid grid-cols-2 gap-y-8 bg-paper-deep/60 px-4 py-8 lg:grid-cols-5 lg:gap-y-0">
        {stats.map((s, i) => (
          <div key={s.label} className={`px-4 text-center ${i ? "lg:border-l lg:border-clay" : ""}`}>
            <p className="font-mono text-3xl font-bold text-banyan sm:text-4xl">{s.value}</p>
            <p className="mt-3 text-sm text-ink-soft">{s.label}</p>
          </div>
        ))}
      </div>

      {mapSection && <div className="mt-6">{mapSection}</div>}

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Panel title="Top 10 companies" sub="By CSR amount spent">
          {top10.map((c) => (
            <BarRow key={c.cin || c.name} label={`${c.rank}. ${c.name}`} value={c.amountSpent} max={kpis.max} right={cr(c.amountSpent)} />
          ))}
        </Panel>

        <Panel title="Spend distribution" sub="Number of companies per spend band">
          {buckets.map((b) => (
            <BarRow key={b.label} label={b.label} value={b.count} max={maxBucket} right={b.count} color="bg-marigold" />
          ))}
        </Panel>

        <Panel title="Concentration curve" sub="Cumulative share of total spend, companies ranked high to low">
          <ParetoChart points={cumulative} />
        </Panel>

        <Panel title="Spend by company type" sub="Derived from the CIN ownership code">
          {byOwnership.map((o) => (
            <BarRow key={o.label} label={`${o.label} (${o.count})`} value={o.total} max={maxOwn} right={cr(o.total)} />
          ))}
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 border-t border-clay pt-3 text-xs text-ink-soft">
            {byListing.map((l) => (
              <span key={l.label}>
                <strong className="text-ink">{l.label}:</strong> {l.count} companies · {cr(l.total)}
              </span>
            ))}
          </div>
        </Panel>
      </div>

      <section className="mt-10">
        <h2 className="font-display text-2xl font-semibold text-ink">All companies</h2>
        <form
          onSubmit={(e) => { e.preventDefault(); setSearch(searchInput.trim()); setPage(0); }}
          className="mt-4 flex flex-wrap items-center gap-3"
        >
          <div className="flex w-full max-w-xs">
            <input
              type="text"
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
                if (!e.target.value.trim()) { setSearch(""); setPage(0); }
              }}
              placeholder="Search company name or CIN…"
              className="w-full border border-clay bg-paper px-4 py-2.5 text-sm text-ink placeholder:text-ink-soft/60 focus:border-banyan focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 border border-l-0 border-clay bg-banyan px-4 py-2.5 text-sm font-semibold text-paper hover:bg-banyan-deep"
            >
              Search
            </button>
          </div>
          <select
            value={listing}
            onChange={(e) => { setListing(e.target.value); setPage(0); }}
            className="border border-clay bg-paper px-3 py-2.5 text-sm text-ink focus:border-banyan focus:outline-none"
            aria-label="Filter by listing status"
          >
            <option value="all">All listings</option>
            <option value="Listed">Listed</option>
            <option value="Unlisted">Unlisted</option>
          </select>
          <select
            value={sector}
            onChange={(e) => { setSector(e.target.value); setPage(0); }}
            className="border border-clay bg-paper px-3 py-2.5 text-sm text-ink focus:border-banyan focus:outline-none"
            aria-label="Filter by development sector"
          >
            <option value="all">All sectors</option>
            {sectorOptions.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <select
            value={state}
            onChange={(e) => { setState(e.target.value); setDistrict("all"); setPage(0); }}
            className="border border-clay bg-paper px-3 py-2.5 text-sm text-ink focus:border-banyan focus:outline-none"
            aria-label="Filter by state"
          >
            <option value="all">All states</option>
            {stateOptions.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <select
            value={district}
            onChange={(e) => { setDistrict(e.target.value); setPage(0); }}
            className="border border-clay bg-paper px-3 py-2.5 text-sm text-ink focus:border-banyan focus:outline-none"
            aria-label="Filter by district"
          >
            <option value="all">All districts</option>
            {availableDistricts.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
          <select
            value={year}
            onChange={(e) => { setYear(e.target.value); setPage(0); }}
            className="border border-clay bg-paper px-3 py-2.5 text-sm text-ink focus:border-banyan focus:outline-none"
            aria-label="Filter by year"
          >
            <option value="all">All years</option>
            {yearOptions.map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
          <select
            value={ownership}
            onChange={(e) => { setOwnership(e.target.value); setPage(0); }}
            className="border border-clay bg-paper px-3 py-2.5 text-sm text-ink focus:border-banyan focus:outline-none"
            aria-label="Filter by company type"
          >
            <option value="all">All company types</option>
            {ownershipOptions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
          <span className="text-xs text-ink-soft">{rows.length} results</span>
        </form>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-clay text-left text-xs font-semibold uppercase tracking-[0.08em] text-ink-soft">
                {COLUMNS.map((col) =>
                  col.key === "sectors" ? (
                    <th key={col.key} className="py-3 pr-4">
                      {col.label}
                    </th>
                  ) : (
                    <th
                      key={col.key}
                      className="py-3 pr-4"
                      aria-sort={sortBy === col.key ? (dir === "asc" ? "ascending" : "descending") : "none"}
                    >
                      <button type="button" onClick={() => toggleSort(col.key)} className="uppercase tracking-[0.08em] hover:text-banyan">
                        {col.label}
                        {sortBy === col.key ? (dir === "asc" ? " ↑" : " ↓") : ""}
                      </button>
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              {visible.map((c) => (
                <tr key={c.cin || c.name} className="border-b border-clay/60">
                  <td className="py-3 pr-4 font-mono text-ink-soft">{c.rank}</td>
                  <td className="py-3 pr-4">
                    <span className="text-ink">{c.name}</span>
                    <span className="block font-mono text-[11px] text-ink-soft/70">{c.cin}</span>
                  </td>
                  <td className="py-3 pr-4 text-ink-soft">{c.ownership}</td>
                  <td className="py-3 pr-4 text-ink-soft">{c.listed}</td>
                  <td className="py-3 pr-4 text-ink-soft">
                    {c.sectors.length ? (
                      <span title={c.sectors.join(", ")}>
                        {c.sectors[0]}
                        {c.sectors.length > 1 && ` +${c.sectors.length - 1}`}
                      </span>
                    ) : (
                      "—"
                    )}
                  </td>
                  <td className="py-3 pr-4 font-mono text-ink">{cr(c.amountSpent)}</td>
                </tr>
              ))}
              {!visible.length && (
                <tr>
                  <td colSpan={COLUMNS.length} className="py-8 text-center text-ink-soft">No companies match.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex items-center justify-between text-xs text-ink-soft">
          <span>Page {safePage + 1} of {pages}</span>
          <div className="flex gap-2">
            <button type="button" disabled={safePage === 0} onClick={() => setPage(safePage - 1)} className="border border-clay px-3 py-1.5 hover:border-banyan disabled:opacity-40">Previous</button>
            <button type="button" disabled={safePage >= pages - 1} onClick={() => setPage(safePage + 1)} className="border border-clay px-3 py-1.5 hover:border-banyan disabled:opacity-40">Next</button>
          </div>
        </div>
      </section>
    </div>
  );
}
