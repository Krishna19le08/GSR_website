import fs from "node:fs";
import path from "node:path";
import { stateKey } from "./state-spend";

// Row-level CSR project ledger (2014–2020, data/source/csr/csr-projects-by-companies.csv),
// aggregated per state so the map detail panel can show district/company/
// project counts alongside the FY 2024-25 totals from data/source/csr/dynamic-csr-report.json.
const CSV_PATH = path.join(
  process.cwd(),
  "data",
  "source",
  "csr",
  "csr-projects-by-companies.csv",
);

function parseCsvLine(line) {
  const cells = [];
  let cur = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (inQuotes) {
      if (ch === '"') {
        if (line[i + 1] === '"') {
          cur += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        cur += ch;
      }
    } else if (ch === '"') {
      inQuotes = true;
    } else if (ch === ",") {
      cells.push(cur);
      cur = "";
    } else {
      cur += ch;
    }
  }
  cells.push(cur);
  return cells;
}

function loadRows() {
  const text = fs.readFileSync(CSV_PATH, "utf8");
  const lines = text.split(/\r?\n/).filter(Boolean);
  const header = parseCsvLine(lines[0]);
  const col = Object.fromEntries(header.map((h, i) => [h, i]));

  return lines.slice(1).map((line) => {
    const c = parseCsvLine(line);
    return {
      year: (c[col.year] || "").slice(0, 4),
      state: c[col.state_name],
      district: c[col.district_name],
      sector: c[col.development_sector],
      company: c[col.company_name],
      cin: c[col.cin],
      spentLakhs: Number(c[col.amount_spent_in_lakhs]) || 0,
    };
  });
}

const ROWS = loadRows();
const NOT_MENTIONED = "not mentioned";

// Raw row access for other lib modules that need to aggregate this same
// project ledger a different way (e.g. per-company instead of per-state).
export function getCsrProjectRows() {
  return ROWS;
}

export { NOT_MENTIONED };

// State names as they appear in the csv don't always match the boundary
// file's slug (public/data/geo/districts/<slug>.json) — a few UTs are named or
// split differently. Everything not listed here just gets kebab-cased.
const SLUG_OVERRIDES = {
  "Dadra Nagar Haveli and Daman and Diu": "dadra-and-nagar-haveli-and-daman-and-diu",
  "Lakshadweep Islands": "lakshadweep",
  Pondicherry: "puducherry",
};

function slugify(name) {
  return SLUG_OVERRIDES[name] ?? name.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function getCsrStateProjects() {
  const byKey = new Map();

  for (const r of ROWS) {
    if (!r.state || r.state.toLowerCase() === NOT_MENTIONED) continue;
    const key = stateKey(r.state);
    const entry = byKey.get(key) ?? {
      key,
      name: r.state,
      years: new Set(),
      districts: new Map(),
      companies: new Set(),
      projects: 0,
    };
    entry.years.add(r.year);
    entry.companies.add(r.cin || r.company);
    entry.projects += 1;

    if (r.district && r.district.toLowerCase() !== NOT_MENTIONED) {
      const d = entry.districts.get(r.district) ?? {
        spentLakhs: 0,
        projects: 0,
        companies: new Set(),
        sectors: new Map(),
      };
      d.spentLakhs += r.spentLakhs;
      d.projects += 1;
      d.companies.add(r.cin || r.company);
      if (r.sector && r.sector.toLowerCase() !== NOT_MENTIONED) {
        d.sectors.set(r.sector, (d.sectors.get(r.sector) ?? 0) + r.spentLakhs);
      }
      entry.districts.set(r.district, d);
    }

    byKey.set(key, entry);
  }

  return [...byKey.values()].map((e) => {
    const years = [...e.years].filter(Boolean).sort();
    const districts = [...e.districts.entries()]
      .map(([district, d]) => ({
        district,
        amount: d.spentLakhs / 100,
        projectCount: d.projects,
        companyCount: d.companies.size,
        sectors: [...d.sectors.entries()]
          .map(([sector, spentLakhs]) => ({ sector, amount: spentLakhs / 100 }))
          .sort((a, b) => b.amount - a.amount),
      }))
      .sort((a, b) => b.amount - a.amount);

    return {
      key: e.key,
      name: e.name,
      stateId: slugify(e.name),
      projectCount: e.projects,
      companyCount: e.companies.size,
      districtCount: e.districts.size,
      yearRange: years.length ? `${years[0]}–${years[years.length - 1]}` : "",
      topDistricts: districts.slice(0, 5),
      districts,
    };
  });
}
