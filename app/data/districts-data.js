// District-level CSR spend data — sourced from the Ministry of Corporate
// Affairs' state-wise CSR spend report, merged into district-csr-data.json
// (one sheet per state/UT, one row per district x development sector).
//
// Only a subset of states currently have district-level data (the report
// covers 19 states/UTs so far); getDistrictsForState() returns an empty
// array for any state not yet in the source file, so callers should treat
// that as "no district breakdown available" rather than an error.

import raw from "./district-csr-data.json";
import { DEPARTMENTS } from "./states-data";
import { matchDistrictKey } from "../lib/district-geo";

// Maps a "Development Sector" label as it appears in the source report to
// the matching DEPARTMENTS key from states-data.js.
const SECTOR_TO_DEPT_KEY = {
  "Education, Differently Abled, livelihood": "education",
  "Encouraging Sports": "sports",
  "Environment, Animal Welfare, Conservation of Resources": "environment",
  "Gender Equality, Women Empowerment, Old Age Homes, Reducing Inequalities": "genderEquality",
  "Health, Eradicating Hunger, Poverty and Malnutrition, Safe Drinking water, Sanitation": "health",
  "Heritage Art And Culture": "heritageArtCulture",
  "Other Sectors (Technology Incubator And benefits To Armed Forces And Admin Overheads)": "otherSectors",
  "Rural Development": "ruralDevelopment",
  "Slum Area Development": "slumAreaDevelopment",
};

const DEPT_LABEL_BY_KEY = Object.fromEntries(DEPARTMENTS.map((d) => [d.key, d.label]));

// Maps the "State" name used in the source report to the state `id` slug
// used across the rest of the app (states-data.js). A few UTs are reported
// under a different name, or split across sheets that need to be merged
// into a single state id (Dadra and Nagar Haveli + Daman and Diu).
const STATE_NAME_TO_ID = {
  Lakshadweep: "lakshadweep",
  "Leh And Ladakh": "ladakh",
  Kerala: "kerala",
  "Andaman And Nicobar": "andaman-and-nicobar-islands",
  "Andhra Pradesh": "andhra-pradesh",
  "Arunachal Pradesh": "arunachal-pradesh",
  Assam: "assam",
  Bihar: "bihar",
  Chandigarh: "chandigarh",
  Chhattisgarh: "chhattisgarh",
  "Dadra And Nagar Haveli": "dadra-and-nagar-haveli-and-daman-and-diu",
  "Daman And Diu": "dadra-and-nagar-haveli-and-daman-and-diu",
  Delhi: "delhi",
  Goa: "goa",
  Haryana: "haryana",
  "Himachal Pradesh": "himachal-pradesh",
  Gujarat: "gujarat",
  "Jammu And Kashmir": "jammu-and-kashmir",
  Jharkhand: "jharkhand",
  Karnataka: "karnataka",
};

const TOTAL_FIELD = "CSR Spent as on ALL (INR Cr.)";

// Build { stateId -> [{ name, type, totalCr, sectors: [{ key, label, amountCr }] }] }
// once at module load, from every row across every sheet.
function buildDistrictsByState() {
  const byState = new Map();

  for (const rows of Object.values(raw)) {
    for (const row of rows) {
      const stateId = STATE_NAME_TO_ID[row.State];
      if (!stateId) continue;

      const districtName = row["List of Districts"];
      const amountCr = Number(row[TOTAL_FIELD]) || 0;
      const deptKey = SECTOR_TO_DEPT_KEY[row["Development Sector"]] ?? "others";

      if (!byState.has(stateId)) byState.set(stateId, new Map());
      const districts = byState.get(stateId);

      if (!districts.has(districtName)) {
        districts.set(districtName, {
          name: districtName,
          type: row["Type Of Districts"],
          totalCr: 0,
          sectorTotals: new Map(),
        });
      }
      const district = districts.get(districtName);
      district.totalCr += amountCr;
      district.sectorTotals.set(deptKey, (district.sectorTotals.get(deptKey) ?? 0) + amountCr);
    }
  }

  const result = new Map();
  for (const [stateId, districts] of byState) {
    const list = [...districts.values()]
      .map((d) => ({
        name: d.name,
        type: d.type,
        totalCr: Math.round(d.totalCr * 100) / 100,
        sectors: [...d.sectorTotals.entries()]
          .filter(([, amountCr]) => amountCr > 0)
          .map(([key, amountCr]) => ({
            key,
            label: DEPT_LABEL_BY_KEY[key] ?? "Others",
            amountCr: Math.round(amountCr * 100) / 100,
          }))
          .sort((a, b) => b.amountCr - a.amountCr),
      }))
      .sort((a, b) => b.totalCr - a.totalCr);
    result.set(stateId, list);
  }
  return result;
}

const districtsByState = buildDistrictsByState();

// Returns the district-level CSR breakdown for a state, or [] if the source
// report doesn't cover that state yet.
export function getDistrictsForState(stateId) {
  return districtsByState.get(stateId) ?? [];
}

// Looks up a district's CSR record by the name as it appears in the
// boundary geojson (public/data/districts/<stateId>.json), which is
// sometimes spelled differently than the CSR report — see
// ../lib/district-geo.js. Returns null if this state has no CSR report
// coverage, or no district in it matches.
export function getDistrictCsrData(stateId, geoDistrictName) {
  const districts = getDistrictsForState(stateId);
  if (districts.length === 0) return null;
  const matchedName = matchDistrictKey(
    geoDistrictName,
    districts.map((d) => d.name),
  );
  return districts.find((d) => d.name === matchedName) ?? null;
}
