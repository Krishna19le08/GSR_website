// Compact wire format for the company table on /csr-tracker.
//
// The full company list (~700 rows with sector/state/district/year lists) is
// too large to serialize into the page, so scripts/build-csr-data.mjs writes
// it to public/data/csr/companies.json with repeated strings dictionary-
// encoded, and CompanyAnalytics fetches and decodes it on demand.
// encodeCompanies() runs at build time, decodeCompanies() in the browser;
// both live here so the format is defined once.

export const COMPANIES_URL = "/data/csr/companies.json";

function dictionary(values) {
  const list = [...new Set(values)].sort();
  const index = new Map(list.map((v, i) => [v, i]));
  return { list, index };
}

// companies: rank-ordered output of getCsrCompanyAnalytics().companies
export function encodeCompanies(companies) {
  const sectors = dictionary(companies.flatMap((c) => c.sectors));
  const states = dictionary(companies.flatMap((c) => c.states));
  const districts = dictionary(companies.flatMap((c) => c.districts));
  const years = dictionary(companies.flatMap((c) => c.years));
  const ownership = dictionary(companies.map((c) => c.ownership));
  return {
    v: 1,
    dict: {
      sectors: sectors.list,
      states: states.list,
      districts: districts.list,
      years: years.list,
      ownership: ownership.list,
    },
    // [name, cin, amountSpent, ownershipIdx, sectorIdx[], stateIdx[], districtIdx[], yearIdx[]]
    rows: companies.map((c) => [
      c.name,
      c.cin,
      Math.round(c.amountSpent * 100) / 100,
      ownership.index.get(c.ownership),
      c.sectors.map((s) => sectors.index.get(s)),
      c.states.map((s) => states.index.get(s)),
      c.districts.map((d) => districts.index.get(d)),
      c.years.map((y) => years.index.get(y)),
    ]),
  };
}

// Returns rows in the same shape the table renders (rank = position + 1).
export function decodeCompanies({ dict, rows }) {
  const pick = (list) => (ids) => ids.map((i) => list[i]);
  const sectors = pick(dict.sectors), states = pick(dict.states);
  const districts = pick(dict.districts), years = pick(dict.years);
  return rows.map(([name, cin, amountSpent, own, s, st, d, y], i) => ({
    name,
    cin,
    amountSpent,
    listed: cin.startsWith("L") ? "Listed" : "Unlisted",
    ownership: dict.ownership[own],
    sectors: sectors(s),
    states: states(st),
    districts: districts(d),
    years: years(y),
    rank: i + 1,
  }));
}
