import report from "@data/source/csr/dynamic-csr-report.json";

// Normalises both the report's state names ("Andaman And Nicobar") and the
// GeoJSON's ST_NM ("Andaman & Nicobar") to one comparable key.
export const stateKey = (name) =>
  name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z]+/g, "");

const KEY_ALIASES = {
  [stateKey("Leh And Ladakh")]: stateKey("Ladakh"),
  [stateKey("Dadra And Nagar Haveli")]: stateKey("Dadra and Nagar Haveli and Daman and Diu"),
  [stateKey("Daman And Diu")]: stateKey("Dadra and Nagar Haveli and Daman and Diu"),
};

export const SPEND_FINANCIAL_YEAR = "FY 2024-25";
const SPEND_FIELD = "CSR Spent as on FY 2024-25 (INR Cr.)";

const TITLE_OVERRIDES = {
  [stateKey("Dadra and Nagar Haveli and Daman and Diu")]: "Dadra and Nagar Haveli and Daman and Diu",
};

// Rows in the report that are not a geographic state: centrally pooled funds.
const NON_GEO = new Set([stateKey("Pan India (Other Centralized Funds)")]);

export function getCsrStateSpend() {
  const byKey = new Map();
  let panIndia = 0;

  for (const row of report) {
    const raw = stateKey(row.State);
    const key = KEY_ALIASES[raw] ?? raw;
    const amount = Number(row[SPEND_FIELD]) || 0;

    if (NON_GEO.has(raw)) {
      panIndia += amount;
      continue;
    }

    const entry = byKey.get(key) ?? {
      key,
      name: TITLE_OVERRIDES[key] ?? row.State.replace("Leh And Ladakh", "Ladakh"),
      total: 0,
      sectors: new Map(),
    };
    entry.total += amount;
    entry.sectors.set(
      row["Development Sector"],
      (entry.sectors.get(row["Development Sector"]) ?? 0) + amount,
    );
    byKey.set(key, entry);
  }

  const states = [...byKey.values()]
    .map((s) => ({
      key: s.key,
      name: s.name,
      total: s.total,
      sectors: [...s.sectors]
        .map(([sector, amount]) => ({ sector, amount }))
        .sort((a, b) => b.amount - a.amount),
    }))
    .sort((a, b) => b.total - a.total)
    .map((s, i) => ({ ...s, rank: i + 1 }));

  const stateTotal = states.reduce((s, x) => s + x.total, 0);
  return {
    states,
    panIndia,
    stateTotal,
    grandTotal: stateTotal + panIndia,
    max: states[0]?.total ?? 0,
  };
}

// Light → deep banyan green
export const SCALE = ["#e4eadb", "#b9cdb4", "#8bb08f", "#5b8f6d", "#2f6a56", "#12312c"];

export function colorFor(value, max) {
  if (!value) return null;
  const t = Math.sqrt(value / max);
  return SCALE[Math.min(SCALE.length - 1, Math.floor(t * SCALE.length))];
}

// Client props for CsrSpendMapSection. Amounts (₹ crore) are displayed with
// two decimals, so they are rounded to two decimals here to drop float noise
// (e.g. 8630.800000000003) from the serialized page payload.
const round2 = (n) => Math.round(n * 100) / 100;
export function toClientStateSpend(data) {
  return {
    ...data,
    panIndia: round2(data.panIndia),
    stateTotal: round2(data.stateTotal),
    grandTotal: round2(data.grandTotal),
    max: round2(data.max),
    states: data.states.map((s) => ({
      ...s,
      total: round2(s.total),
      sectors: s.sectors.map(({ sector, amount }) => ({ sector, amount: round2(amount) })),
    })),
  };
}
