import { getCsrProjectRows, NOT_MENTIONED } from "./state-projects";

const OWNERSHIP = {
  PLC: "Public limited",
  PTC: "Private limited",
  GOI: "Govt. of India",
  SGC: "State govt.",
  NPL: "Non-profit / other",
  FTC: "Foreign-owned",
  OPC: "One person co.",
};

const BUCKETS = [
  { label: "₹0", min: 0, max: 0 },
  { label: "< ₹5 L", min: 1, max: 5e5 },
  { label: "₹5–10 L", min: 5e5, max: 1e6 },
  { label: "₹10–25 L", min: 1e6, max: 2.5e6 },
  { label: "₹25–50 L", min: 2.5e6, max: 5e6 },
  { label: "₹50 L–1 Cr", min: 5e6, max: 1e7 },
  { label: "≥ ₹1 Cr", min: 1e7, max: Infinity },
];

function tally(rows, keyFn) {
  const map = new Map();
  for (const r of rows) {
    const k = keyFn(r);
    const e = map.get(k) ?? { label: k, count: 0, total: 0 };
    e.count += 1;
    e.total += r.amountSpent;
    map.set(k, e);
  }
  return [...map.values()].sort((a, b) => b.total - a.total);
}

const isReal = (v) => v && v.toLowerCase() !== NOT_MENTIONED;

export function getCsrCompanyAnalytics() {
  const rows = getCsrProjectRows();
  const byCompany = new Map();
  const districtsByState = new Map();

  for (const r of rows) {
    const cin = (r.cin || "").toUpperCase();
    const key = cin || r.company.toUpperCase();
    const entry = byCompany.get(key) ?? {
      name: r.company,
      cin: r.cin || "",
      amountSpent: 0,
      sectors: new Set(),
      states: new Set(),
      districts: new Set(),
      years: new Set(),
    };
    entry.amountSpent += r.spentLakhs * 1e5;
    if (isReal(r.sector)) entry.sectors.add(r.sector);
    if (isReal(r.state)) entry.states.add(r.state);
    if (isReal(r.district)) entry.districts.add(r.district);
    if (r.year) entry.years.add(r.year);
    byCompany.set(key, entry);

    if (isReal(r.state) && isReal(r.district)) {
      const set = districtsByState.get(r.state) ?? new Set();
      set.add(r.district);
      districtsByState.set(r.state, set);
    }
  }

  const companies = [...byCompany.values()]
    .map((c) => ({
      name: c.name,
      cin: c.cin,
      amountSpent: c.amountSpent,
      listed: c.cin.startsWith("L") ? "Listed" : "Unlisted",
      ownership: OWNERSHIP[c.cin.slice(12, 15)] ?? "Other",
      sectors: [...c.sectors].sort(),
      states: [...c.states].sort(),
      districts: [...c.districts].sort(),
      years: [...c.years].sort(),
    }))
    .sort((a, b) => b.amountSpent - a.amountSpent)
    .map((c, i) => ({ ...c, rank: i + 1 }));

  const total = companies.reduce((s, c) => s + c.amountSpent, 0);
  const spenders = companies.filter((c) => c.amountSpent > 0);
  const sortedAmts = spenders.map((c) => c.amountSpent).sort((a, b) => a - b);
  const median = sortedAmts.length ? sortedAmts[Math.floor(sortedAmts.length / 2)] : 0;
  const topShare = (n) =>
    total ? companies.slice(0, n).reduce((s, c) => s + c.amountSpent, 0) / total : 0;

  let run = 0;
  const cumulative = companies.map((c) => {
    run += c.amountSpent;
    return { rank: c.rank, share: total ? run / total : 0 };
  });

  const years = [...new Set(companies.flatMap((c) => c.years))].sort();

  return {
    financialYear: years.length ? `${years[0]}–${years[years.length - 1]}` : "",
    companies,
    sectorOptions: [...new Set(companies.flatMap((c) => c.sectors))].sort(),
    stateOptions: [...new Set(companies.flatMap((c) => c.states))].sort(),
    districtOptions: [...new Set(companies.flatMap((c) => c.districts))].sort(),
    districtsByState: Object.fromEntries(
      [...districtsByState.entries()].map(([state, set]) => [state, [...set].sort()]),
    ),
    kpis: {
      count: companies.length,
      total,
      average: spenders.length ? total / spenders.length : 0,
      median,
      zeroSpend: companies.length - spenders.length,
      top10Share: topShare(10),
      top50Share: topShare(50),
      max: companies[0]?.amountSpent ?? 0,
    },
    buckets: BUCKETS.map((b) => ({
      label: b.label,
      count: companies.filter((c) =>
        b.max === 0 ? c.amountSpent === 0 : c.amountSpent >= b.min && c.amountSpent < b.max,
      ).length,
    })),
    byListing: tally(companies, (c) => c.listed),
    byOwnership: tally(companies, (c) => c.ownership),
    cumulative,
  };
}
