// State-level CSR / GSDP tracking data — data source for the CSR Tracker and
// State Rating (State Rating Protocol) dashboards.
//
// `getStates()` is the single seam these dashboards read from. Swap its body
// for a real request (e.g. a Ministry of Corporate Affairs CSR data feed or
// a GSDP data provider) once GSR has a live data source; every consumer
// downstream only depends on the shape below, not on where the array comes
// from.
//
// Most figures below are deterministically generated placeholder data — NOT
// real government statistics. The exceptions are csrFundTotalCr (via
// CSR_FUND_HISTORY_CR), annualIncomeGrowthPct, scoreTrend and
// departmentFundsCr (via CSR_SECTOR_SPEND_CR), which are now backed by the
// Ministry of Corporate Affairs' real state-wise CSR spend reports. The rest
// exist so the dashboard layout, filters and rating engine can be built and
// demoed end to end until GSR connects a live source for them too.
//
// State shape:
//   id                        string   unique slug
//   name                      string
//   type                      "State" | "Union Territory"
//   region                    string   North | South | East | West | Northeast | Central
//   population                number
//   gsdpCr                    number   gross state domestic product, ₹ crore
//   gsdpGrowthPct             number   year-on-year GSDP growth, %
//   csrFundUtilizationPct     number   share of allocated CSR funds actually deployed, %
//   annualIncomeGrowthPct     number   real year-on-year growth in CSR fund spend, % (FY2023-24 → FY2024-25)
//   pillars                   object   see PILLARS in ../lib/rating.js — one score per key
//   scoreTrend                number[] composite score for each year, 2020-2026 (2025-26 projected), driven by real YoY growth
//   departmentFundsCr         object   real FY2024-25 CSR spend by development sector, ₹ crore — keys match DEPARTMENTS below
//   grantees                  object[] one record per sector — { department, agency, project, amountCr }; amountCr is real, agency/project are illustrative
//   abbr                      string   short map label (e.g. "TN", "J&K")
//   photoUrl                  string   path to a representative landmark photo, under public/images/states/

import { PILLARS, compositeScore } from "../lib/rating";

// The nine development sectors used in the Ministry of Corporate Affairs'
// state-wise CSR spend report — real cause-area totals, see
// CSR_SECTOR_SPEND_CR below. The agency/project text on each is still an
// illustrative NGO partner standing in until GSR has real grantee-level data.
export const DEPARTMENTS = [
  { key: "education", label: "Education, Differently Abled & Livelihood", agency: "Education for All Society", project: "School infrastructure, skilling & livelihood support" },
  { key: "sports", label: "Encouraging Sports", agency: "Sports Development Trust", project: "Grassroots sports infrastructure & training" },
  { key: "environment", label: "Environment, Animal Welfare & Conservation", agency: "Green Earth Conservation Trust", project: "Afforestation, clean energy & animal welfare" },
  { key: "genderEquality", label: "Gender Equality & Inclusion", agency: "Women & Child Welfare Trust", project: "Women empowerment & old-age care schemes" },
  { key: "health", label: "Health, Hunger & Sanitation", agency: "Community Health Foundation", project: "Primary healthcare, nutrition & sanitation" },
  { key: "heritageArtCulture", label: "Heritage, Art & Culture", agency: "Heritage & Culture Foundation", project: "Heritage conservation & cultural grants" },
  { key: "otherSectors", label: "Other Sectors", agency: "Admin & Special Initiatives Fund", project: "Tech incubation, armed forces welfare & admin overheads" },
  { key: "ruralDevelopment", label: "Rural Development", agency: "Rural Upliftment Trust", project: "Rural infrastructure & livelihood programmes" },
  { key: "slumAreaDevelopment", label: "Slum Area Development", agency: "Urban Renewal Society", project: "Slum rehabilitation & basic services" },
];

export const TREND_YEARS = [2020, 2021, 2022, 2023, 2024, 2025, 2026];

// Real CSR fund amounts actually spent per state, FY2018-19 through FY2024-25
// (₹ crore), sourced from the Ministry of Corporate Affairs' published
// state-wise CSR spend report. Indexed by the fiscal year's END year, so
// entry [1] (2020) is FY2019-20 spend, entry [6] (2025) is FY2024-25 spend.
// This is the one real (non-generated) figure in this file — it replaces
// the total CSR fund amount, the annual income growth rate, and the score
// trend below, which used to be random placeholders. Union territories that
// were reported jointly (Dadra and Nagar Haveli + Daman and Diu) are summed.
const CSR_FUND_HISTORY_CR = {
  "Andhra Pradesh": [665.97, 710.23, 719.81, 663.5, 987.33, 1175.88, 1383.52],
  "Arunachal Pradesh": [24.56, 18.02, 10.58, 119.42, 13.36, 39.82, 40.06],
  "Assam": [210, 285, 180.23, 406.42, 475.11, 495.6, 607.04],
  "Bihar": [137.95, 110.48, 89.89, 178.97, 247.93, 261.62, 456.12],
  "Chhattisgarh": [149.35, 269.68, 325.63, 317.7, 610.16, 435.62, 551.88],
  "Goa": [46.77, 43.91, 41.92, 45.43, 60.91, 86.43, 106.01],
  "Gujarat": [1082.18, 984.37, 1461.6, 1613.18, 2066.67, 2780.14, 4549.1],
  "Haryana": [378.11, 537.91, 550.86, 687.13, 780.35, 850.01, 1385.61],
  "Himachal Pradesh": [78.79, 78.78, 106.31, 140.27, 141.4, 158.25, 225.34],
  "Jharkhand": [109.8, 155.21, 226.54, 243.95, 400.92, 417.4, 842.38],
  "Karnataka": [1257.69, 1448.16, 1277.81, 1849.82, 2061.4, 2328.53, 3395.43],
  "Kerala": [354.78, 298.56, 290.67, 241.58, 363.34, 399.47, 616.57],
  "Madhya Pradesh": [243.55, 220.46, 375.51, 427.48, 669.11, 612.99, 1195.34],
  "Maharashtra": [3147.72, 3353.24, 3464.81, 5407.4, 5723.29, 6283.97, 8630.8],
  "Manipur": [7.81, 14.21, 10.39, 15.62, 53.69, 84.47, 33.73],
  "Meghalaya": [16.54, 17.65, 17.63, 19.63, 23.04, 34.66, 62.07],
  "Mizoram": [0.11, 0.25, 0.97, 6.94, 11.01, 4.48, 14.97],
  "Nagaland": [2.12, 5.1, 3.57, 12.46, 13.57, 15.41, 26.79],
  "Odisha": [697.91, 717.39, 578.16, 752.37, 998.07, 1404.24, 1574.98],
  "Punjab": [166.85, 189.44, 158.46, 185.41, 263.55, 368.15, 578.49],
  "Rajasthan": [595.49, 734.12, 670, 713.85, 1123.16, 1176.73, 1620.16],
  "Sikkim": [5.87, 10.99, 17.28, 28.24, 36.18, 41.87, 54.55],
  "Tamil Nadu": [877.08, 1072.26, 1174.07, 1441.03, 1641.23, 2055.31, 2738.49],
  "Telangana": [428.06, 445.8, 627.71, 688.58, 1042.02, 1103.33, 1445.78],
  "Tripura": [23.06, 9.4, 9.29, 15.91, 19.26, 9.45, 15.89],
  "Uttar Pradesh": [521.32, 577.98, 907.32, 1345.02, 1213.76, 1590.66, 2212.68],
  "Uttarakhand": [172.31, 124.7, 160.58, 228.09, 307.76, 366.02, 519.98],
  "West Bengal": [382.23, 423.85, 471.48, 571.89, 783.45, 877.09, 1075.33],
  "Andaman and Nicobar Islands": [0.82, 1.29, 2.86, 9.71, 2.53, 3.03, 15.13],
  "Chandigarh": [11.46, 15.58, 13.4, 51.19, 18.51, 114.39, 146.19],
  "Dadra and Nagar Haveli and Daman and Diu": [19.73, 27.87, 27.23, 18.27, 23.22, 30.29, 35.92],
  "Delhi": [750.85, 830, 724.59, 1198.5, 1518.29, 2004.31, 2752.75],
  "Jammu and Kashmir": [36.44, 25.27, 35.56, 50.68, 72.19, 104.11, 224.29],
  "Ladakh": [0, 0, 0, 14.84, 11.72, 30.48, 25.58],
  "Lakshadweep": [0.39, 0, 0.01, 0.97, 0.02, 0.36, 0.57],
  "Puducherry": [9.15, 11.32, 12.43, 9.31, 14.62, 34.53, 27.96],
};

// Real FY2024-25 CSR spend per state, broken down by development sector
// (the Ministry of Corporate Affairs' dynamic CSR report) — ₹ crore, keys
// match DEPARTMENTS above in the same order: [education, sports,
// environment, genderEquality, health, heritageArtCulture, otherSectors,
// ruralDevelopment, slumAreaDevelopment]. A sector absent from a state's
// report (no CSR activity recorded there that year) is 0. Union territories
// reported jointly (Dadra and Nagar Haveli + Daman and Diu) are summed.
const CSR_SECTOR_SPEND_CR = {
  "Andaman and Nicobar Islands": [12.47, 0, 0.19, 0, 1.08, 0, 0, 1.4, 0],
  "Andhra Pradesh": [676.31, 5.93, 175.61, 46.59, 321.72, 7.89, 0.06, 148.99, 0.41],
  "Arunachal Pradesh": [10.01, 0.82, 0.92, 0.28, 17.13, 0.65, 0.08, 10.17, 0],
  "Assam": [174.42, 5.71, 91.86, 24.46, 238.27, 5.75, 0.03, 66.34, 0.2],
  "Bihar": [178.01, 2.27, 22.55, 15.35, 195.39, 1.35, 0, 41.19, 0],
  "Chandigarh": [13.37, 55.13, 0.77, 0.42, 76.36, 0, 0.01, 0.02, 0.11],
  "Chhattisgarh": [181.38, 5.65, 27.02, 14.5, 235.73, 8.94, 0.58, 77.65, 0.44],
  "Dadra and Nagar Haveli and Daman and Diu": [12.08, 1.65, 3.95, 1.98, 13.71, 0.5, 0.05, 2, 0],
  "Delhi": [1529.58, 91.02, 193.39, 93.88, 731.53, 59.69, 37.32, 16.07, 0.27],
  "Goa": [38.72, 8.48, 11.89, 1.82, 33.8, 6.21, 0, 4.98, 0.12],
  "Gujarat": [1826.4, 300.1, 986.86, 123.02, 1059.26, 67.72, 1.15, 183.56, 1.03],
  "Haryana": [715.85, 55.53, 165.78, 49.13, 314.07, 5.67, 0.94, 78.36, 0.28],
  "Himachal Pradesh": [94.44, 9.34, 27.45, 11.05, 54.11, 7.4, 0.15, 21.29, 0.12],
  "Jammu and Kashmir": [63.44, 0.32, 97.14, 1.47, 45.58, 2.62, 0.43, 13.27, 0],
  "Jharkhand": [322.54, 66.89, 75.36, 14.72, 256.42, 35.66, 0.45, 69.07, 1.27],
  "Karnataka": [1656.61, 113.71, 481.63, 110.44, 855.13, 50.37, 1.44, 122.82, 3.28],
  "Kerala": [221.9, 9.35, 65.56, 33.56, 237.6, 4.85, 0.04, 36.77, 6.93],
  "Ladakh": [8.25, 0.16, 3.92, 0.05, 12.74, 0.35, 0, 0.1, 0],
  "Lakshadweep": [0, 0, 0, 0, 0.57, 0, 0, 0, 0],
  "Madhya Pradesh": [407.06, 2.76, 235.17, 23.98, 290.79, 7.78, 0.05, 227.69, 0.06],
  "Maharashtra": [4837.55, 137.18, 602.11, 239.97, 2384.2, 114.54, 16.27, 295.44, 3.54],
  "Manipur": [17.27, 2.11, 1.14, 0.49, 11.37, 0, 0, 1.35, 0],
  "Meghalaya": [17.72, 6.94, 6.88, 0.75, 11.96, 0.05, 0, 17.76, 0],
  "Mizoram": [8.82, 0, 1.56, 0, 2.94, 0, 0, 1.65, 0],
  "Nagaland": [6.2, 0.07, 1.24, 0.2, 14.28, 0, 0, 4.79, 0],
  "Odisha": [656.21, 87.81, 127.94, 44.07, 417.35, 44.25, 0.11, 190.83, 6.42],
  "Puducherry": [11.89, 1.91, 3.77, 0.39, 5.2, 3.35, 0.1, 1.35, 0],
  "Punjab": [291.29, 5.76, 37.02, 22.19, 163.96, 1.62, 3.55, 53.01, 0.09],
  "Rajasthan": [742.27, 24.61, 208.36, 55.31, 343.56, 51.13, 0.89, 193.84, 0.19],
  "Sikkim": [23.48, 1.11, 5.63, 0.13, 11.91, 0, 0.01, 12.28, 0],
  "Tamil Nadu": [1332.38, 61.66, 242.07, 70.08, 804.49, 61.04, 5.2, 155.4, 6.18],
  "Telangana": [719.72, 19.7, 125.95, 65.18, 413.4, 18.21, 0.84, 82.03, 0.75],
  "Tripura": [4.27, 0.21, 4.19, 0.15, 5.49, 0.01, 0, 1.58, 0],
  "Uttar Pradesh": [925.27, 18.85, 240.48, 89.77, 735.61, 30.1, 1.28, 167.34, 3.97],
  "Uttarakhand": [236.21, 3.25, 48.04, 8.6, 137.58, 30.69, 0.61, 52.68, 2.33],
  "West Bengal": [430.47, 20.12, 81.3, 38.01, 394.02, 53.52, 0.47, 56.98, 0.43],
};

function yoyGrowthPct(curr, prev) {
  if (prev <= 0) return curr > 0 ? 100 : 0;
  return Math.round(((curr - prev) / prev) * 1000) / 10;
}

const STATE_LIST = [
  ["Andhra Pradesh", "State", "South", "AP"],
  ["Arunachal Pradesh", "State", "Northeast", "AR"],
  ["Assam", "State", "Northeast", "AS"],
  ["Bihar", "State", "East", "BR"],
  ["Chhattisgarh", "State", "Central", "CG"],
  ["Goa", "State", "West", "GA"],
  ["Gujarat", "State", "West", "GJ"],
  ["Haryana", "State", "North", "HR"],
  ["Himachal Pradesh", "State", "North", "HP"],
  ["Jharkhand", "State", "East", "JH"],
  ["Karnataka", "State", "South", "KA"],
  ["Kerala", "State", "South", "KL"],
  ["Madhya Pradesh", "State", "Central", "MP"],
  ["Maharashtra", "State", "West", "MH"],
  ["Manipur", "State", "Northeast", "MN"],
  ["Meghalaya", "State", "Northeast", "ML"],
  ["Mizoram", "State", "Northeast", "MZ"],
  ["Nagaland", "State", "Northeast", "NL"],
  ["Odisha", "State", "East", "OD"],
  ["Punjab", "State", "North", "PB"],
  ["Rajasthan", "State", "North", "RJ"],
  ["Sikkim", "State", "Northeast", "SK"],
  ["Tamil Nadu", "State", "South", "TN"],
  ["Telangana", "State", "South", "TS"],
  ["Tripura", "State", "Northeast", "TR"],
  ["Uttar Pradesh", "State", "North", "UP"],
  ["Uttarakhand", "State", "North", "UK"],
  ["West Bengal", "State", "East", "WB"],
  ["Andaman and Nicobar Islands", "Union Territory", "South", "AN"],
  ["Chandigarh", "Union Territory", "North", "CH"],
  ["Dadra and Nagar Haveli and Daman and Diu", "Union Territory", "West", "DN"],
  ["Delhi", "Union Territory", "North", "DL"],
  ["Jammu and Kashmir", "Union Territory", "North", "J&K"],
  ["Ladakh", "Union Territory", "North", "LA"],
  ["Lakshadweep", "Union Territory", "South", "LD"],
  ["Puducherry", "Union Territory", "South", "PY"],
];

// Small deterministic PRNG (mulberry32) so every reload of the dashboard
// shows the same numbers instead of the layout reshuffling under a viewer.
function seededRandom(seed) {
  let a = seed;
  return function next() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return hash;
}

function buildState([name, type, region, abbr], index) {
  const rand = seededRandom(hashString(name) + index);
  const id = name.toLowerCase().replace(/[^a-z]+/g, "-").replace(/(^-|-$)/g, "");

  const population = Math.round(1_200_000 + rand() * 220_000_000);
  const gsdpCr = Math.round(8_000 + rand() * 2_800_000);
  const gsdpGrowthPct = Math.round((3 + rand() * 9) * 10) / 10;
  const csrFundUtilizationPct = Math.round(35 + rand() * 60);

  const history = CSR_FUND_HISTORY_CR[name];
  const annualIncomeGrowthPct = Math.min(
    100,
    Math.max(0, yoyGrowthPct(history[history.length - 1], history[history.length - 2])),
  );

  const pillars = Object.fromEntries(
    PILLARS.map((pillar) => [pillar.key, Math.round(pillar.max * (0.4 + rand() * 0.6))]),
  );

  const finalScore = compositeScore({ csrFundUtilizationPct, annualIncomeGrowthPct });
  const scoreTrend = TREND_YEARS.map((year, i) => {
    if (i === TREND_YEARS.length - 1) return finalScore; // 2026 not yet reported — carries the latest score
    const yearGrowthPct = Math.min(100, Math.max(0, yoyGrowthPct(history[i + 1], history[i])));
    return compositeScore({ csrFundUtilizationPct, annualIncomeGrowthPct: yearGrowthPct });
  });

  const csrFundTotalCr = history[history.length - 1];
  const sectorSpend = CSR_SECTOR_SPEND_CR[name];
  const departmentFundsCr = Object.fromEntries(
    DEPARTMENTS.map((dept, i) => [dept.key, sectorSpend[i]]),
  );

  const grantees = DEPARTMENTS.map((dept) => ({
    department: dept.label,
    agency: `${name} ${dept.agency}`,
    project: dept.project,
    amountCr: departmentFundsCr[dept.key],
  }));

  return {
    id,
    name,
    type,
    region,
    abbr,
    photoUrl: `/images/states/${id}.jpg`,
    population,
    gsdpCr,
    gsdpGrowthPct,
    csrFundUtilizationPct,
    annualIncomeGrowthPct,
    pillars,
    scoreTrend,
    departmentFundsCr,
    grantees,
  };
}

const sampleStates = STATE_LIST.map(buildState);

export function getStates() {
  return sampleStates;
}

export function getStateById(id) {
  return sampleStates.find((state) => state.id === id) ?? null;
}
